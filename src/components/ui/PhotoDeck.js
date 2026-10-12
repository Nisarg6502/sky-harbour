import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, animate, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { easeInOut, easeOut } from './Reveal';

// Resting angle and nudge for each print, so the pile looks hand-placed and
// every photo keeps its own angle wherever it sits in the pile.
const REST = [
    { rotate: -2.5, x: -6, y: 4 },
    { rotate: 3.5, x: 10, y: -6 },
    { rotate: -5, x: -14, y: -10 },
    { rotate: 6, x: 16, y: 8 },
    { rotate: -7, x: -4, y: 14 },
];

const pileSpring = { type: 'spring', stiffness: 170, damping: 24, mass: 0.9 };
const homeSpring = { type: 'spring', stiffness: 150, damping: 22 };
const THROW_MS = 360;

// Resolves once the logo intro has handed over to the page (html.sh-ready).
function useIntroReady() {
    const [ready, setReady] = useState(() => document.documentElement.classList.contains('sh-ready'));
    useEffect(() => {
        if (ready) return;
        const root = document.documentElement;
        const observer = new MutationObserver(() => root.classList.contains('sh-ready') && setReady(true));
        observer.observe(root, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, [ready]);
    return ready;
}

function Print({ photo, cardIndex, depth, count, ready, dealing, fanned, draggable, flying, reduceMotion, onDragStart, onRelease, onTap, register }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const tilt = useTransform(x, [-320, 320], [-16, 16]);
    const ref = useRef(null);
    const rest = REST[cardIndex % REST.length];

    useEffect(() => register(cardIndex, { x, y, ref }), [cardIndex, register, x, y]);

    // A print that isn't mid-throw always glides back to its place in the pile.
    // This is what tucks a thrown print under the others, and it also rescues a
    // print that was let go anywhere else — nothing can be left stranded.
    useEffect(() => {
        if (flying) return;
        if (Math.abs(x.get()) < 0.5 && Math.abs(y.get()) < 0.5) return;
        const transition = reduceMotion ? { duration: 0 } : homeSpring;
        animate(x, 0, transition);
        animate(y, 0, transition);
    }, [depth, flying, reduceMotion, x, y]);

    const visible = depth < 4;
    const spread = fanned ? 1.9 : 1;
    const isTop = depth === 0;
    const target = ready
        ? {
              opacity: visible ? 1 : 0,
              rotate: (isTop ? rest.rotate * 0.4 : rest.rotate) * spread,
              translateX: rest.x * spread * (isTop ? 0.3 : 1),
              translateY: rest.y * spread - depth * (fanned ? 14 : 6),
              scale: 1 - depth * 0.035,
          }
        : { opacity: 0, rotate: 0, translateX: 0, translateY: 90, scale: 0.96 };

    return (
        <motion.div
            className={`col-start-1 row-start-1 w-[84%] max-w-[34rem] will-change-transform ${flying ? 'pointer-events-none' : ''}`}
            style={{ zIndex: count - depth }}
            initial={false}
            animate={target}
            transition={
                dealing
                    ? { duration: 1, ease: easeOut, delay: (count - 1 - depth) * 0.12 }
                    : { ...pileSpring, opacity: { duration: 0.4 } }
            }
        >
            <motion.figure
                ref={ref}
                data-card={cardIndex}
                drag={draggable ? 'x' : false}
                dragElastic={0.55}
                dragMomentum={false}
                onDragStart={onDragStart}
                onDragEnd={(_, info) => onRelease(cardIndex, info)}
                onTap={draggable ? onTap : undefined}
                style={{ x, y, rotate: tilt }}
                className={`select-none rounded-[3px] bg-paper-50 p-1.5 shadow-[0_1px_2px_rgba(28,26,22,0.08),0_22px_44px_-18px_rgba(28,26,22,0.45)] sm:p-2 ${draggable ? 'cursor-grab active:cursor-grabbing' : ''}`}
            >
                <img
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.w}
                    height={photo.h}
                    draggable={false}
                    decoding="async"
                    fetchpriority={cardIndex === 0 ? 'high' : undefined}
                    className="pointer-events-none block h-auto w-full rounded-[2px]"
                />
            </motion.figure>
        </motion.div>
    );
}

// A loose pile of photo prints. The top print can be dragged or flicked either
// way and tucks itself under the pile; the pile also shuffles on its own while
// it is on screen and nobody is handling it.
export default function PhotoDeck({ photos, intervalMs = 4800, className = '' }) {
    const [order, setOrder] = useState(() => photos.map((_, i) => i));
    const [flying, setFlying] = useState([]);
    const [fanned, setFanned] = useState(false);
    const [entered, setEntered] = useState(false);
    const [dealing, setDealing] = useState(true);
    const cards = useRef({});
    const rootRef = useRef(null);
    const orderRef = useRef(order);
    const flyingRef = useRef(new Set());
    const lastHandled = useRef(0);
    const pressing = useRef(false);
    const dragged = useRef(false);
    const inView = useRef(true);
    const reduceMotion = useReducedMotion();
    const ready = useIntroReady();
    orderRef.current = order;

    // The pile leans gently toward a mouse cursor, like prints handled on a table.
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const tiltSpring = { stiffness: 120, damping: 18, mass: 0.6 };
    const leanX = useSpring(useTransform(pointerY, [-0.5, 0.5], reduceMotion ? [0, 0] : [5, -5]), tiltSpring);
    const leanY = useSpring(useTransform(pointerX, [-0.5, 0.5], reduceMotion ? [0, 0] : [-7, 7]), tiltSpring);

    const register = useCallback((i, handles) => {
        cards.current[i] = handles;
    }, []);

    // Deal the prints in from below, bottom of the pile first.
    useEffect(() => {
        if (!ready) return;
        const t = setTimeout(() => setEntered(true), 250);
        const done = setTimeout(() => setDealing(false), 250 + 1000 + photos.length * 120);
        return () => {
            clearTimeout(t);
            clearTimeout(done);
        };
    }, [ready, photos.length]);

    // Throw one print out to the side; when it lands it moves to the bottom of
    // the pile (and its own effect glides it home underneath the others).
    // Throws can overlap, and a fallback timer always finishes the move even if
    // the flight animation is interrupted.
    const throwCard = useCallback(
        (card, dir, velocity = 0) => {
            const handles = cards.current[card];
            if (card === undefined || !handles || flyingRef.current.has(card)) return;
            flyingRef.current.add(card);
            setFlying([...flyingRef.current]);

            let done = false;
            const finish = () => {
                if (done) return;
                done = true;
                clearTimeout(fallback);
                flyingRef.current.delete(card);
                setFlying([...flyingRef.current]);
                setOrder((o) => [...o.filter((i) => i !== card), card]);
            };
            const fallback = setTimeout(finish, reduceMotion ? 0 : THROW_MS + 250);
            if (reduceMotion) return;

            const width = handles.ref.current?.offsetWidth || 400;
            const flight = { duration: THROW_MS / 1000, ease: easeInOut };
            animate(handles.x, dir * width * 0.72, { ...flight, velocity, onComplete: finish });
            animate(handles.y, -16, flight);
        },
        [reduceMotion]
    );

    const firstSettled = (o) => o.find((i) => !flyingRef.current.has(i));
    const throwTop = useCallback(
        (dir) => throwCard(orderRef.current.find((i) => !flyingRef.current.has(i)), dir),
        [throwCard]
    );

    const onRelease = (card, { offset, velocity }) => {
        lastHandled.current = Date.now();
        if (flyingRef.current.has(card)) return;
        const handles = cards.current[card];
        const width = handles?.ref.current?.offsetWidth || 400;
        if (Math.abs(offset.x) > width * 0.2 || Math.abs(velocity.x) > 450) {
            throwCard(card, Math.sign(offset.x || velocity.x) || 1, velocity.x);
        } else if (handles) {
            animate(handles.x, 0, { type: 'spring', stiffness: 320, damping: 26 });
            animate(handles.y, 0, { type: 'spring', stiffness: 320, damping: 26 });
        }
    };

    // Track presses anywhere on the pile so the auto-shuffle never fights a hand.
    useEffect(() => {
        const release = () => {
            if (pressing.current) lastHandled.current = Date.now();
            pressing.current = false;
        };
        window.addEventListener('pointerup', release);
        window.addEventListener('pointercancel', release);
        return () => {
            window.removeEventListener('pointerup', release);
            window.removeEventListener('pointercancel', release);
        };
    }, []);

    // Auto-shuffle while on screen, the tab is visible and nobody is handling the pile.
    useEffect(() => {
        if (!entered || reduceMotion) return;
        const observer = new IntersectionObserver(([e]) => {
            inView.current = e.isIntersecting;
        });
        observer.observe(rootRef.current);
        const id = setInterval(() => {
            const idle = !pressing.current && Date.now() - lastHandled.current > intervalMs;
            if (idle && inView.current && !fanned && !document.hidden && flyingRef.current.size === 0) throwTop(1);
        }, intervalMs);
        return () => {
            clearInterval(id);
            observer.disconnect();
        };
    }, [entered, reduceMotion, fanned, intervalMs, throwTop]);

    const topCard = firstSettled(order) ?? order[0];
    const topPhoto = photos[topCard];

    return (
        <div className={className}>
            <motion.div
                ref={rootRef}
                style={{ rotateX: leanX, rotateY: leanY, transformPerspective: 1400 }}
                role="group"
                aria-roledescription="carousel"
                aria-label={topPhoto.name}
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        lastHandled.current = Date.now();
                        throwTop(1);
                    } else if (e.key === 'ArrowLeft') {
                        e.preventDefault();
                        lastHandled.current = Date.now();
                        throwTop(-1);
                    }
                }}
                onPointerDown={() => {
                    pressing.current = true;
                    dragged.current = false;
                    lastHandled.current = Date.now();
                }}
                onPointerEnter={(e) => e.pointerType === 'mouse' && setFanned(true)}
                onPointerLeave={(e) => {
                    if (e.pointerType !== 'mouse') return;
                    setFanned(false);
                    pointerX.set(0);
                    pointerY.set(0);
                }}
                onPointerMove={(e) => {
                    if (e.pointerType !== 'mouse') return;
                    const r = e.currentTarget.getBoundingClientRect();
                    pointerX.set((e.clientX - r.left) / r.width - 0.5);
                    pointerY.set((e.clientY - r.top) / r.height - 0.5);
                }}
                className="relative grid aspect-square w-full place-items-center sm:aspect-[6/5] rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-turmeric-400/70"
            >
                {photos.map((photo, i) => {
                    const depth = order.indexOf(i);
                    return (
                        <Print
                            key={photo.src}
                            photo={photo}
                            cardIndex={i}
                            depth={depth}
                            count={photos.length}
                            ready={entered}
                            dealing={dealing}
                            fanned={fanned}
                            draggable={i === topCard && !flying.includes(i)}
                            flying={flying.includes(i)}
                            reduceMotion={reduceMotion}
                            onDragStart={() => {
                                dragged.current = true;
                            }}
                            onRelease={onRelease}
                            onTap={() => {
                                // A press that turned into a drag is not a click: a
                                // hesitant drag that snaps back must not advance the pile.
                                if (dragged.current) return;
                                lastHandled.current = Date.now();
                                throwTop(1);
                            }}
                            register={register}
                        />
                    );
                })}
            </motion.div>

            <div className="relative mt-3 h-7 overflow-hidden text-center sm:mt-4" aria-live="polite">
                <AnimatePresence initial={false} mode="popLayout">
                    <motion.p
                        key={topPhoto.src}
                        className="absolute inset-x-0 text-base text-ink sm:text-lg"
                        initial={{ y: '100%', opacity: 0 }}
                        animate={{ y: '0%', opacity: entered ? 1 : 0 }}
                        exit={{ y: '-100%', opacity: 0 }}
                        transition={{ duration: 0.5, ease: easeOut }}
                    >
                        {topPhoto.name}
                        {topPhoto.from && <span className="text-ink-muted"> — {topPhoto.from}</span>}
                    </motion.p>
                </AnimatePresence>
            </div>
        </div>
    );
}
