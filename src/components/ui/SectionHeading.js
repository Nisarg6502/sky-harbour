import React from 'react';
import { Reveal } from './Reveal';

export default function SectionHeading({ eyebrow, title, description, align = 'center', className = '' }) {
    const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

    return (
        <div className={`max-w-3xl ${alignment} ${className}`}>
            {eyebrow && (
                <Reveal>
                    <span className="inline-flex items-center gap-2 rounded-full bg-olive-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-olive-700">
                        {eyebrow}
                    </span>
                </Reveal>
            )}
            <Reveal delay={0.08}>
                <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] text-ink text-balance">
                    {title}
                </h2>
            </Reveal>
            {description && (
                <Reveal delay={0.14}>
                    <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink-muted text-balance">
                        {description}
                    </p>
                </Reveal>
            )}
        </div>
    );
}
