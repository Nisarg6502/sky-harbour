import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { WhatsappIcon } from './ui/SocialIcons';
import Button from './ui/Button';
import { LineReveal, Reveal, easeInOut } from './ui/Reveal';
import { WHATSAPP_URL } from './NavbarMain';

const WAVE = 'M0,30 C60,10 120,10 180,30 S300,50 360,30 S480,10 540,30 S660,50 720,30 S840,10 900,30 S1020,50 1080,30 S1200,10 1260,30 S1380,50 1440,30 S1560,10 1620,30';

export default function Contact() {
    return (
        <section id="contact" className="grain relative overflow-hidden bg-turmeric-400 pb-36 pt-28 text-ink sm:pb-44 sm:pt-36">
            <div className="container-page relative">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-7">
                        <LineReveal
                            as="h2"
                            lines={['Contact Us']}
                            className="text-[clamp(3.2rem,9vw,8.5rem)] font-light leading-[0.9] tracking-[-0.045em]"
                        />
                        <Reveal delay={0.25} className="mt-10 flex flex-wrap items-center gap-4">
                            <Button as="a" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                                <WhatsappIcon size={17} />
                                WhatsApp
                            </Button>
                            <Button as="a" href="mailto:team@skyharbourimpex.com" variant="outline" className="border-ink/40">
                                <Mail size={17} />
                                team@skyharbourimpex.com
                            </Button>
                        </Reveal>
                    </div>

                    <Reveal delay={0.3} className="lg:col-span-5">
                        <ul className="divide-y divide-ink/15 border-y border-ink/15">
                            <li className="flex gap-4 py-4">
                                <Phone size={18} className="mt-1 shrink-0 text-ink/60" />
                                <span className="text-lg">
                                    <a href="tel:+917899933077" className="whitespace-nowrap hover:underline">+91 7899933077</a>
                                    {' / '}
                                    <a href="tel:+918530489863" className="whitespace-nowrap hover:underline">+91 85304 89863</a>
                                </span>
                            </li>
                            <li className="flex gap-4 py-4">
                                <MapPin size={18} className="mt-0.5 shrink-0 text-ink/60" />
                                <span className="leading-snug">
                                    No.1-1165/1, Aiwan-E-Shahi, GB court, Gulbarga pincode - 585102
                                    <br />
                                    State: Karnataka
                                    <br />
                                    Country: India
                                </span>
                            </li>
                        </ul>
                    </Reveal>
                </div>
            </div>

            {/* The sea, drawing itself in along the bottom edge */}
            <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="absolute inset-x-0 bottom-8 h-10 w-full sm:bottom-12 sm:h-14" aria-hidden="true">
                {[0, 1].map((row) => (
                    <motion.path
                        key={row}
                        d={WAVE}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        vectorEffect="non-scaling-stroke"
                        className={row === 0 ? 'text-ink/60' : 'text-ink/25'}
                        transform={row === 1 ? 'translate(-90 14)' : undefined}
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.2, ease: easeInOut, delay: 0.2 + row * 0.25 }}
                    />
                ))}
            </svg>
        </section>
    );
}
