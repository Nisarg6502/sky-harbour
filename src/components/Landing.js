import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react';
import bg1 from '../images/fruits-vegetables-floating.jpg';
import FiveSpice from '../images/five-spice-ingredients.jpg';
import HotSpice from '../images/hot-spices-wooden-spoon.jpg';
import BioDeg from '../images/biodeg.jpg';
import Button from './ui/Button';

const slides = [
    { src: bg1, alt: 'Fresh fruits and vegetables' },
    { src: FiveSpice, alt: 'Five spice ingredients' },
    { src: HotSpice, alt: 'Hot spices on a wooden spoon' },
    { src: BioDeg, alt: 'Biodegradable products' },
];

const easeOut = [0.23, 1, 0.32, 1];
const easeInOut = [0.77, 0, 0.175, 1];

export default function Landing() {
    const [index, setIndex] = useState(0);
    const frameRef = useRef(null);
    const intervalRef = useRef(null);
    const reduceMotion = useReducedMotion();

    const restartAutoplay = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4200);
    };

    const goTo = (newIndex) => {
        setIndex((newIndex + slides.length) % slides.length);
        restartAutoplay();
    };

    const handleDragEnd = (_e, { offset, velocity }) => {
        if (offset.x < -60 || velocity.x < -500) {
            goTo(index + 1);
        } else if (offset.x > 60 || velocity.x > 500) {
            goTo(index - 1);
        }
    };

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], reduceMotion ? [0, 0] : [6, -6]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], reduceMotion ? [0, 0] : [-6, 6]), { stiffness: 150, damping: 20 });

    const handleMouseMove = (e) => {
        if (reduceMotion) return;
        const rect = frameRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    useEffect(() => {
        restartAutoplay();
        return () => clearInterval(intervalRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
            <motion.div
                className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-olive-100 blur-3xl"
                animate={reduceMotion ? {} : { y: [0, -18, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: easeInOut }}
            />
            <motion.div
                className="pointer-events-none absolute -right-16 top-40 h-64 w-64 rounded-full bg-clay-100 blur-3xl"
                animate={reduceMotion ? {} : { y: [0, 16, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: easeInOut, delay: 0.5 }}
            />

            <div className="container-page relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
                <div>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: easeOut }}
                        className="inline-flex items-center gap-2 rounded-full bg-olive-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-olive-700"
                    >
                        Spices · Agro · Biodegradable Exports
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: easeOut, delay: 0.08 }}
                        className="mt-6 font-display text-4xl leading-[1.08] text-ink text-balance sm:text-5xl md:text-6xl"
                    >
                        Your gateway to fresh horizons
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: easeOut, delay: 0.16 }}
                        className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
                    >
                        Exporting the finest selection of spices, agro products, and
                        biodegradable products worldwide. From our farms to your table,
                        excellence is our trademark.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: easeOut, delay: 0.24 }}
                        className="mt-9 flex flex-wrap items-center gap-4"
                    >
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                            <Button as="a" href="#productsection" variant="primary" className="px-7 py-3.5 text-base">
                                Explore Products
                                <ArrowRight size={18} />
                            </Button>
                        </motion.div>
                        <a
                            href="#about"
                            className="text-sm font-medium text-ink/70 underline-offset-4 transition-colors hover:text-ink hover:underline"
                        >
                            Learn about us
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    ref={frameRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ rotateX, rotateY, transformPerspective: 800 }}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
                    className="relative mx-auto aspect-[4/5] w-full max-w-md sm:aspect-[5/6]"
                >
                    <div className="absolute inset-0 touch-pan-y overflow-hidden rounded-xl2 shadow-card-hover">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={index}
                                src={slides[index].src}
                                alt={slides[index].alt}
                                className="absolute inset-0 h-full w-full object-cover"
                                initial={{ opacity: 0, scale: 1.03 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: easeInOut }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.6}
                                onDragEnd={handleDragEnd}
                            />
                        </AnimatePresence>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
                        <div className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    aria-label={`Show slide ${i + 1}`}
                                    onClick={() => goTo(i)}
                                    className={`pointer-events-auto h-1.5 rounded-full transition-[width,background-color] duration-300 ${i === index ? 'w-5 bg-cream' : 'w-1.5 bg-cream/50'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: easeOut, delay: 0.5 }}
                        style={{ transform: 'translateZ(40px)' }}
                        className="pointer-events-none absolute -bottom-5 -left-6 z-10 hidden items-center gap-3 rounded-2xl border border-ink/10 bg-cream-50/95 px-4 py-3 shadow-card-hover backdrop-blur sm:flex"
                    >
                        <motion.span
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-olive-100 text-olive-700"
                            animate={reduceMotion ? {} : { y: [0, -5, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: easeInOut }}
                        >
                            <ShieldCheck size={20} />
                        </motion.span>
                        <div className="leading-tight">
                            <p className="text-sm font-semibold text-ink">Quality you can trust</p>
                            <p className="text-xs text-ink-muted">Direct-from-farm sourcing</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.a
                href="#about"
                aria-label="Scroll to learn more"
                className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-ink/40 sm:block"
                animate={reduceMotion ? {} : { y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: easeInOut }}
            >
                <ChevronDown size={26} />
            </motion.a>
        </section>
    );
}
