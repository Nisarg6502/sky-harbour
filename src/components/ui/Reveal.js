import React from 'react';
import { motion } from 'framer-motion';

const easeOut = [0.23, 1, 0.32, 1];

export function Reveal({
    children,
    className = '',
    delay = 0,
    y = 20,
    duration = 0.6,
    as = 'div',
}) {
    const MotionTag = motion[as] || motion.div;

    return (
        <MotionTag
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration, ease: easeOut, delay }}
        >
            {children}
        </MotionTag>
    );
}

export function RevealGroup({ children, className = '', stagger = 0.08 }) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
                hidden: {},
                show: {
                    transition: { staggerChildren: stagger },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

export const revealItem = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: easeOut },
    },
};

export default Reveal;
