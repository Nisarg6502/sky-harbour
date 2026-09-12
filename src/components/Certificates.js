import React from 'react';
import Apeda from "../images/apeda-logo.png";
import Spices from "../images/spices-board-logo.png";
import MSME from "../images/msme-logo.png";
import FSSAI from "../images/fssai.png";
import SectionHeading from './ui/SectionHeading';
import { RevealGroup, revealItem } from './ui/Reveal';
import { motion } from 'framer-motion';

const certificates = [
    { src: Apeda, alt: 'Apeda Logo' },
    { src: Spices, alt: 'Spices Board India Logo' },
    { src: MSME, alt: 'MSME Logo' },
    { src: FSSAI, alt: 'FSSAI Logo' },
];

function Certificates() {
    return (
        <section id="certificates" className="py-24 sm:py-28">
            <div className="container-page">
                <SectionHeading
                    eyebrow="Trust & Compliance"
                    title="Certificates"
                    description="Our commitment to excellence extends beyond the products we offer. We understand the importance of adhering to international standards and regulations to ensure that every shipment meets the highest quality and safety benchmarks. Our dedication to transparency and integrity is reflected in the certificates we hold."
                />

                <RevealGroup className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-4">
                    {certificates.map((cert) => (
                        <motion.div
                            key={cert.alt}
                            variants={revealItem}
                            whileHover={{ y: -4 }}
                            className="flex aspect-square items-center justify-center rounded-xl2 bg-cream-50 p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover"
                        >
                            <img src={cert.src} alt={cert.alt} className="max-h-full max-w-full object-contain" loading="lazy" />
                        </motion.div>
                    ))}
                </RevealGroup>
            </div>
        </section>
    );
}

export default Certificates;
