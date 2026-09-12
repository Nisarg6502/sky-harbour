import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, ShieldCheck, Handshake, Gauge } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { RevealGroup, revealItem } from './ui/Reveal';

const features = [
    {
        icon: Sprout,
        title: 'Direct Farm Sourcing',
        description:
            'We take pride in sourcing our spices and agro products directly from farmers. This not only ensures the freshest produce but also empowers local communities.',
    },
    {
        icon: ShieldCheck,
        title: 'Quality Assurance',
        description:
            'Our commitment to quality surpasses industry standards. Rigorous quality control measures guarantee that every product we offer meets the highest international benchmarks.',
    },
    {
        icon: Handshake,
        title: 'Reliability and Transparency',
        description:
            'Trust is paramount in international trade. Our commitment to reliability ensures a seamless export experience, allowing you to focus on your core business.',
    },
    {
        icon: Gauge,
        title: 'Unlocking Efficiency',
        description:
            'Navigating the complexities of international markets can be both time-consuming and costly. By choosing SkyHarbour, you are tapping into our expertise, saving valuable resources.',
    },
];

export default function About() {
    return (
        <section id="about" className="bg-olive-50/60 py-24 sm:py-28">
            <div className="container-page">
                <SectionHeading
                    eyebrow="Who we are"
                    title="Quality and authenticity, from farm to table"
                    description="At SkyHarbour, we are the epitome of quality and authenticity in the realm of spices, agro products, and biodegradable products. With a steadfast dedication to excellence, our expertise lies in sourcing and delivering premium spices that elevate culinary experiences. Based in India, SkyHarbour is on a mission to unite global palates with the most exquisite flavors from our farms."
                />

                <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {features.map(({ icon: Icon, title, description }) => (
                        <motion.div
                            key={title}
                            variants={revealItem}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                            className="group rounded-xl2 bg-cream-50 p-8 text-center shadow-card transition-shadow duration-200 hover:shadow-card-hover sm:text-left"
                        >
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-olive-100 text-olive-700 transition-colors duration-200 group-hover:bg-olive-600 group-hover:text-cream sm:mx-0">
                                <Icon size={26} strokeWidth={1.75} />
                            </div>
                            <h3 className="mt-5 font-display text-xl text-ink">{title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{description}</p>
                        </motion.div>
                    ))}
                </RevealGroup>
            </div>
        </section>
    );
}
