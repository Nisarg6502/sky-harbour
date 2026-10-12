import React from 'react';
import { motion } from 'framer-motion';

export const easeOut = [0.23, 1, 0.32, 1];
export const easeInOut = [0.77, 0, 0.175, 1];

const viewport = { once: true, margin: '0px 0px -12% 0px' };

// Fade-up on first scroll into view. Deliberately slower and bigger than UI
// motion — this is marketing pacing, played once.
export function Reveal({
    children,
    className = '',
    delay = 0,
    y = 40,
    duration = 0.9,
    as = 'div',
    ...props
}) {
    const MotionTag = motion[as] || motion.div;

    return (
        <MotionTag
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration, ease: easeOut, delay }}
            {...props}
        >
            {children}
        </MotionTag>
    );
}

export function RevealGroup({ children, className = '', stagger = 0.09, delay = 0, as = 'div' }) {
    const MotionTag = motion[as] || motion.div;
    return (
        <MotionTag
            className={className}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={{
                hidden: {},
                show: {
                    transition: { staggerChildren: stagger, delayChildren: delay },
                },
            }}
        >
            {children}
        </MotionTag>
    );
}

// "Zoom-in-up": rises and settles from a slightly smaller size.
export const revealItem = {
    hidden: { opacity: 0, y: 56, scale: 0.94 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.9, ease: easeOut },
    },
};

// Headline lines rising out of a mask, one after another.
export function LineReveal({ lines, as = 'h2', className = '', lineClassName = '', delay = 0, stagger = 0.09 }) {
    const MotionTag = motion[as] || motion.h2;
    return (
        <MotionTag
            className={className}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
        >
            {lines.map((line, i) => (
                <span key={i} className={`block overflow-hidden pb-[0.1em] -mb-[0.1em] ${lineClassName}`}>
                    <motion.span
                        className="block"
                        variants={{
                            hidden: { y: '115%' },
                            show: { y: '0%', transition: { duration: 1, ease: easeOut } },
                        }}
                    >
                        {line}
                    </motion.span>
                    {i < lines.length - 1 && ' '}
                </span>
            ))}
        </MotionTag>
    );
}

// Statement text whose words rise out of their own masks, one after another,
// the first time it scrolls into view.
export function WordReveal({ text, as = 'p', className = '', stagger = 0.035, delay = 0 }) {
    const MotionTag = motion[as] || motion.p;
    return (
        <MotionTag
            className={className}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
        >
            {text.split(' ').map((word, i) => (
                <React.Fragment key={i}>
                    <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-top">
                        <motion.span
                            className="inline-block"
                            variants={{
                                hidden: { y: '110%' },
                                show: { y: '0%', transition: { duration: 0.9, ease: easeOut } },
                            }}
                        >
                            {word}
                        </motion.span>
                    </span>{' '}
                </React.Fragment>
            ))}
        </MotionTag>
    );
}

export default Reveal;
