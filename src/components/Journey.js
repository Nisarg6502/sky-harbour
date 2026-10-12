import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { CargoShip } from '../brand/Ornaments';
import { easeOut } from './ui/Reveal';

// The four pillars from the original About section, laid out as stops on a sea lane.
const stops = [
    {
        title: 'Direct Farm Sourcing',
        description:
            'We take pride in sourcing our spices and agro products directly from farmers. This not only ensures the freshest produce but also empowers local communities.',
    },
    {
        title: 'Quality Assurance',
        description:
            'Our commitment to quality surpasses industry standards. Rigorous quality control measures guarantee that every product we offer meets the highest international benchmarks.',
    },
    {
        title: 'Reliability and Transparency',
        description:
            'Trust is paramount in international trade. Our commitment to reliability ensures a seamless export experience, allowing you to focus on your core business.',
    },
    {
        title: 'Unlocking Efficiency',
        description:
            'Navigating the complexities of international markets can be both time-consuming and costly. By choosing SkyHarbour, you are tapping into our expertise, saving valuable resources.',
    },
];

// Sea lane through the four stops (x = 12, 312, 612, 912 of 1200 — the left edge
// of each text column) and on to the destination marker at the far right.
const ROUTE = 'M12,70 C162,70 162,36 312,36 C462,36 462,74 612,74 C762,74 762,36 912,36 C1050,36 1050,64 1188,64';
const STOP_POINTS = [
    [12, 70],
    [312, 36],
    [612, 74],
    [912, 36],
];

export default function Journey() {
    const trackRef = useRef(null);
    const pathRef = useRef(null);
    const shipRef = useRef(null);
    const fractions = useRef([0, 0.25, 0.5, 0.75]);
    const [reached, setReached] = useState(1);

    const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 0.8', 'end 0.45'] });
    const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.0005 });

    // Measure where each stop sits along the route (the SVG sea lane on desktop,
    // the vertical rail on mobile) so lights switch on exactly as the line reaches them.
    useLayoutEffect(() => {
        const measure = () => {
            const path = pathRef.current;
            if (path && path.getBoundingClientRect().width) {
                const total = path.getTotalLength();
                const samples = 400;
                fractions.current = STOP_POINTS.map(([sx]) => {
                    let best = 0;
                    let bestDist = Infinity;
                    for (let i = 0; i <= samples; i++) {
                        const d = Math.abs(path.getPointAtLength((i / samples) * total).x - sx);
                        if (d < bestDist) {
                            bestDist = d;
                            best = i / samples;
                        }
                    }
                    return best;
                });
                placeShip(progress.get());
                return;
            }
            const track = trackRef.current;
            if (!track) return;
            // Rail runs from 8px to (height - 8px); each dot's centre sits ~10px below its item's top.
            const railLength = track.offsetHeight - 16;
            fractions.current = [...track.querySelectorAll('li')].map((li) => (li.offsetTop + 2) / railLength);
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const placeShip = (v) => {
        const path = pathRef.current;
        const ship = shipRef.current;
        if (!path || !ship || !path.getBoundingClientRect().width) return;
        const total = path.getTotalLength();
        const at = Math.min(Math.max(v, 0), 1) * total;
        const p = path.getPointAtLength(at);
        const ahead = path.getPointAtLength(Math.min(at + 4, total));
        const angle = (Math.atan2(ahead.y - p.y, ahead.x - p.x) * 180) / Math.PI;
        ship.setAttribute('transform', `translate(${p.x} ${p.y}) rotate(${angle * 0.6})`);
    };

    useMotionValueEvent(progress, 'change', (v) => {
        placeShip(v);
        const count = fractions.current.filter((f) => v >= f - 0.01).length;
        setReached((prev) => (prev === count ? prev : Math.max(count, 1)));
    });

    return (
        <section className="grain overflow-hidden bg-harbour-800 py-28 text-paper sm:py-36">
            <div className="container-page">
                <SectionHeading tone="dark" title={['Quality and authenticity,', 'from farm to table']} />

                <div ref={trackRef} className="relative mt-20 sm:mt-24">
                    {/* Desktop: horizontal sea lane */}
                    <svg viewBox="0 0 1200 100" className="hidden h-auto w-full overflow-visible lg:block" aria-hidden="true">
                        <path
                            d={ROUTE}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeDasharray="1 9"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                            className="text-paper/35"
                        />
                        <motion.path
                            ref={pathRef}
                            d={ROUTE}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            className="text-turmeric-400"
                            style={{ pathLength: progress }}
                        />
                        {STOP_POINTS.map(([x, y], i) => (
                            <g key={x} transform={`translate(${x} ${y})`}>
                                <circle r="9" className="fill-harbour-800" />
                                <circle
                                    r="9"
                                    fill="none"
                                    strokeWidth="1.5"
                                    className={`transition-[stroke] duration-500 ${i < reached ? 'stroke-turmeric-400' : 'stroke-paper/40'}`}
                                />
                                <circle
                                    r="4.5"
                                    className={`origin-center transition-[transform,fill] duration-500 ease-out ${i < reached ? 'scale-100 fill-turmeric-400' : 'scale-0 fill-paper/40'}`}
                                    style={{ transformBox: 'fill-box' }}
                                />
                            </g>
                        ))}
                        {/* Destination */}
                        <circle cx="1188" cy="64" r="4" className="fill-paper/60" />
                        <g ref={shipRef}>
                            <CargoShip size={40} x={-20} y={-27} className="text-paper" />
                        </g>
                    </svg>

                    {/* Mobile: vertical rail */}
                    <div className="absolute bottom-2 left-[9px] top-2 w-px bg-paper/20 lg:hidden" aria-hidden="true">
                        <motion.div className="absolute inset-0 origin-top bg-turmeric-400" style={{ scaleY: progress }} />
                    </div>

                    <ol className="grid grid-cols-1 gap-12 lg:mt-10 lg:grid-cols-4 lg:gap-0">
                        {stops.map((stop, i) => {
                            const active = i < reached;
                            return (
                                <li key={stop.title} className="relative max-w-xl pl-10 lg:max-w-none lg:pl-0 lg:pr-10">
                                    <span
                                        aria-hidden="true"
                                        className={`absolute left-0 top-1 flex h-[19px] w-[19px] items-center justify-center rounded-full border bg-harbour-800 transition-colors duration-500 lg:hidden ${active ? 'border-turmeric-400' : 'border-paper/40'}`}
                                    >
                                        <span className={`h-2 w-2 rounded-full transition-[transform,background-color] duration-500 ${active ? 'scale-100 bg-turmeric-400' : 'scale-0 bg-paper/40'}`} />
                                    </span>
                                    <motion.div
                                        animate={{ opacity: active ? 1 : 0.4 }}
                                        transition={{ duration: 0.6, ease: easeOut }}
                                    >
                                        <h3 className="text-2xl font-normal tracking-[-0.02em] text-paper">{stop.title}</h3>
                                        <p className="mt-3 text-[0.9375rem] leading-relaxed text-paper/65 text-pretty">{stop.description}</p>
                                    </motion.div>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </section>
    );
}
