import React from 'react';
import { LineReveal, Reveal } from './Reveal';

const tones = {
    light: { eyebrow: 'text-turmeric-600', title: 'text-ink', body: 'text-ink-muted' },
    dark: { eyebrow: 'text-turmeric-300', title: 'text-paper', body: 'text-paper/70' },
    turmeric: { eyebrow: 'text-chilli-600', title: 'text-ink', body: 'text-ink/75' },
};

export function Eyebrow({ children, tone = 'light', className = '' }) {
    return (
        <Reveal y={16} duration={0.7} className={className}>
            <p className={`text-base font-medium tracking-[-0.005em] sm:text-lg ${tones[tone].eyebrow}`}>{children}</p>
        </Reveal>
    );
}

export default function SectionHeading({ eyebrow, title, description, tone = 'light', className = '' }) {
    const t = tones[tone];
    const lines = Array.isArray(title) ? title : [title];

    return (
        <div className={className}>
            {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
            <div className={`${eyebrow ? 'mt-4 ' : ''}grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-10`}>
                <LineReveal
                    as="h2"
                    lines={lines}
                    className={`text-[clamp(2.4rem,5.6vw,5rem)] font-light leading-[1] tracking-[-0.035em] ${description ? 'lg:col-span-7' : 'lg:col-span-12'} ${t.title}`}
                />
                {description && (
                    <Reveal delay={0.2} className="lg:col-span-5 lg:pb-2">
                        <p className={`max-w-md text-base leading-relaxed text-pretty sm:text-[1.0625rem] ${t.body}`}>{description}</p>
                    </Reveal>
                )}
            </div>
        </div>
    );
}
