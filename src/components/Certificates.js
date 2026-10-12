import React from 'react';
import { motion } from 'framer-motion';
import Apeda from '../images/apeda-logo.png';
import Spices from '../images/spices-board-logo.png';
import MSME from '../images/msme-logo.png';
import FSSAI from '../images/fssai.png';
import SectionHeading from './ui/SectionHeading';
import { easeOut } from './ui/Reveal';

const certificates = [
    { src: Apeda, alt: 'Apeda Logo', name: 'APEDA', tilt: -3 },
    { src: Spices, alt: 'Spices Board India Logo', name: 'Spices Board', tilt: 2 },
    { src: MSME, alt: 'MSME Logo', name: 'MSME', tilt: -1.5 },
    { src: FSSAI, alt: 'FSSAI Logo', name: 'FSSAI', tilt: 3 },
];

// Each certificate is a postage stamp that gets pressed onto the page.
const stamp = {
    hidden: { opacity: 0, scale: 1.25, rotate: 0 },
    show: (tilt) => ({
        opacity: 1,
        scale: 1,
        rotate: tilt,
        transition: { duration: 0.5, ease: easeOut },
    }),
};

function Certificates() {
    return (
        <section id="certificates" className="grain bg-paper-200 py-28 sm:py-36">
            <div className="container-page">
                <SectionHeading
                    eyebrow="Trust & Compliance"
                    title="Certificates"
                    description="Our commitment to excellence extends beyond the products we offer. We understand the importance of adhering to international standards and regulations to ensure that every shipment meets the highest quality and safety benchmarks. Our dedication to transparency and integrity is reflected in the certificates we hold."
                />

                <motion.ul
                    className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:mt-24 sm:gap-x-6 md:grid-cols-4 lg:gap-x-10"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '0px 0px -15% 0px' }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
                >
                    {certificates.map((cert) => (
                        <li key={cert.name} className="flex justify-center">
                            <motion.div
                                custom={cert.tilt}
                                variants={stamp}
                                className="drop-shadow-[0_6px_14px_rgba(28,26,22,0.14)]"
                            >
                                <div className="perforated h-[180px] w-[144px] bg-paper-50 lg:h-[240px] lg:w-[192px]">
                                    <div className="flex h-full w-full items-center justify-center border border-ink/10 bg-white p-3 sm:p-4">
                                        <img src={cert.src} alt={cert.alt} loading="lazy" className="max-h-full max-w-full object-contain" />
                                    </div>
                                </div>
                            </motion.div>
                        </li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
}

export default Certificates;
