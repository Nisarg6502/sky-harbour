import React from 'react';
import { motion } from 'framer-motion';
import { easeOut } from './Reveal';

const tones = {
    turmeric: 'bg-turmeric-400',
    chilli: 'bg-gradient-to-r from-turmeric-400 to-chilli-400',
};

// A quiet scale (curcumin %, Scoville heat) with the product's range filled in.
export default function RangeMeter({ label, min = 0, max, from, to, value, tone = 'turmeric' }) {
    const pct = (n) => ((n - min) / (max - min)) * 100;

    return (
        <div>
            <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="text-ink-muted">{label}</span>
                <span className="font-medium tabular-nums text-ink">{value}</span>
            </div>
            <div className="relative mt-2 h-1.5 overflow-hidden rounded-full bg-ink/[0.08]">
                <motion.span
                    className={`absolute inset-y-0 origin-left rounded-full ${tones[tone]}`}
                    style={{ left: `${pct(from)}%`, width: `${pct(to) - pct(from)}%` }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                    transition={{ duration: 1.1, ease: easeOut, delay: 0.3 }}
                />
            </div>
        </div>
    );
}
