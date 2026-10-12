import React from 'react';
import { Eyebrow } from './ui/SectionHeading';
import { Reveal, WordReveal } from './ui/Reveal';

export default function About() {
    return (
        <section id="about" className="py-24 sm:py-36">
            <div className="container-page">
                <Eyebrow>Who we are</Eyebrow>

                <WordReveal
                    text="At SkyHarbour, we are the epitome of quality and authenticity in the realm of spices, agro products, and biodegradable products."
                    className="mt-6 max-w-5xl text-[clamp(1.85rem,4.4vw,3.9rem)] font-light leading-[1.12] tracking-[-0.03em] text-ink"
                />

                <div className="mt-12 grid grid-cols-1 gap-6 border-t border-ink/10 pt-8 sm:mt-16 sm:grid-cols-2 sm:gap-10 lg:ml-[41.666%]">
                    <Reveal>
                        <p className="text-base leading-relaxed text-ink-muted text-pretty sm:text-[1.0625rem]">
                            With a steadfast dedication to excellence, our expertise lies in sourcing and
                            delivering premium spices that elevate culinary experiences.
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-base leading-relaxed text-ink-muted text-pretty sm:text-[1.0625rem]">
                            Based in India, SkyHarbour is on a mission to unite global palates with the most
                            exquisite flavors from our farms.
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
