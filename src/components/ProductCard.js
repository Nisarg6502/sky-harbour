import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, MapPin } from 'lucide-react';
import ImageDuo from './ui/ImageDuo';
import Modal from './ui/Modal';
import { revealItem } from './ui/Reveal';

export default function ProductCard({ title, image1, image2, intro, description, details, benefits, badge }) {
    const [open, setOpen] = useState(false);
    const hasModal = Boolean(details || benefits);
    const origin = details?.find((d) => d.label === 'Origin')?.value;

    return (
        <motion.div
            variants={revealItem}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="group flex h-full flex-col overflow-hidden rounded-xl2 bg-cream-50 shadow-card ring-1 ring-ink/[0.04] transition-shadow duration-200 hover:shadow-card-hover"
        >
            <div className="relative">
                <ImageDuo image1={image1} image2={image2} alt={`${title} product photo`} className="aspect-[4/3] w-full" />
                {badge && (
                    <span className="absolute right-3 top-3 z-10 rounded-full bg-cream-50/95 px-3 py-1 text-xs font-semibold text-clay-600 shadow-soft backdrop-blur-sm">
                        {badge}
                    </span>
                )}
            </div>

            <div className="flex flex-1 flex-col p-6">
                <h4 className="font-display text-xl text-ink">{title}</h4>
                {origin && (
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-ink-muted">
                        <MapPin size={13} className="text-olive-500" />
                        {origin}
                    </div>
                )}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                    {intro || description}
                </p>
            </div>

            {hasModal && (
                <button
                    onClick={() => setOpen(true)}
                    className="btn-press group/btn flex items-center justify-center gap-1.5 border-t border-ink/10 py-3.5 text-sm font-semibold text-olive-700 transition-colors duration-200 [@media(hover:hover)]:hover:bg-olive-50"
                >
                    View Full Specification
                    <ArrowUpRight size={16} className="transition-transform duration-200 ease-out [@media(hover:hover)]:group-hover/btn:translate-x-0.5 [@media(hover:hover)]:group-hover/btn:-translate-y-0.5" />
                </button>
            )}

            {hasModal && (
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    title={title}
                    eyebrow="Product Specification"
                    image={image1}
                    imageAlt={`${title} product photo`}
                >
                    {details && details.length > 0 && (
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                            {details.map(({ label, value }) => (
                                <div key={label} className="rounded-xl border border-ink/10 bg-cream p-3.5">
                                    <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">{label}</dt>
                                    <dd className="mt-1 text-sm font-medium leading-snug text-ink">{value}</dd>
                                </div>
                            ))}
                        </div>
                    )}

                    {description && (
                        <p className="mt-6 border-l-2 border-clay-300 pl-4 text-sm leading-relaxed text-ink-muted">
                            {description}
                        </p>
                    )}

                    {benefits && (
                        <div className="mt-6">
                            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Key Benefits</h4>
                            <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                                {Object.values(benefits).map((benefit, i) => {
                                    const [lead, ...rest] = benefit.split(': ');
                                    const restText = rest.join(': ');
                                    return (
                                        <div key={i} className="flex gap-2 rounded-xl bg-olive-50 p-3">
                                            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-olive-600" />
                                            <p className="text-sm leading-relaxed text-ink">
                                                {restText ? <span className="font-semibold">{lead}: </span> : null}
                                                {restText || lead}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </Modal>
            )}
        </motion.div>
    );
}
