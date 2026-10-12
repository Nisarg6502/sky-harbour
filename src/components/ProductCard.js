import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, MapPin } from 'lucide-react';
import ImageDuo from './ui/ImageDuo';
import Modal from './ui/Modal';
import RangeMeter from './ui/RangeMeter';
import { revealItem } from './ui/Reveal';

// Product "label": photo, name, origin, an optional spec meter and a link to the full spec sheet.
export default function ProductCard({ title, image1, image2, intro, description, details, benefits, badge, meter, layout = 'stack' }) {
    const [open, setOpen] = useState(false);
    const hasModal = Boolean(details || benefits);
    const origin = details?.find((d) => d.label === 'Origin')?.value;
    const wide = layout === 'wide';

    return (
        <motion.article
            variants={revealItem}
            className={`group flex h-full flex-col ${wide ? 'gap-8 sm:grid sm:grid-cols-2 sm:items-center sm:gap-10' : ''}`}
        >
            <div className="relative aspect-[3/2] overflow-hidden rounded-[6px] bg-paper-200">
                <ImageDuo image1={image1} image2={image2} alt={`${title} product photo`} className="absolute inset-0" blend />
                {badge && (
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-paper-50/95 px-3 py-1 text-[0.8125rem] font-medium text-ink shadow-soft">
                        {badge}
                    </span>
                )}
            </div>

            <div className={`flex flex-1 flex-col ${wide ? '' : 'mt-5'}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className={`font-normal tracking-[-0.025em] text-ink ${wide ? 'text-4xl font-light' : 'text-2xl'}`}>{title}</h4>
                    {origin && (
                        <span className="inline-flex items-center gap-1 text-sm text-ink-muted">
                            <MapPin size={14} className="text-turmeric-600" />
                            {origin.split(';')[0]}
                        </span>
                    )}
                </div>
                <p className={`mt-3 leading-relaxed text-ink-muted text-pretty ${wide ? 'text-base' : 'flex-1 text-[0.9375rem]'}`}>
                    {intro || description}
                </p>
                {wide && intro && description && !hasModal && (
                    <p className="mt-4 border-l-2 border-turmeric-400 pl-4 text-[0.9375rem] leading-relaxed text-ink-muted text-pretty">
                        {description}
                    </p>
                )}

                {meter && (
                    <div className="mt-6">
                        <RangeMeter {...meter} />
                    </div>
                )}

                {hasModal && (
                    <button
                        onClick={() => setOpen(true)}
                        className="btn-press group/btn mt-6 inline-flex items-center gap-1.5 self-start border-b border-ink/30 pb-1 text-sm font-medium text-ink transition-colors duration-200 [@media(hover:hover)]:hover:border-ink"
                    >
                        View Full Specification
                        <ArrowUpRight
                            size={15}
                            className="transition-transform duration-200 ease-out [@media(hover:hover)]:group-hover/btn:-translate-y-0.5 [@media(hover:hover)]:group-hover/btn:translate-x-0.5"
                        />
                    </button>
                )}
            </div>

            {hasModal && (
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    title={title}
                    eyebrow="Product Specification"
                    images={[image1, image2].filter((src, i, all) => src && all.indexOf(src) === i)}
                    imageAlt={`${title} product photo`}
                >
                    {details && details.length > 0 && (
                        <dl className="divide-y divide-dashed divide-ink/15 border-y border-ink/15">
                            {details.map(({ label, value }) => (
                                <div key={label} className="grid grid-cols-3 gap-4 py-3">
                                    <dt className="text-sm text-ink-muted">{label}</dt>
                                    <dd className="col-span-2 text-[0.9375rem] leading-snug text-ink">{value}</dd>
                                </div>
                            ))}
                        </dl>
                    )}

                    {description && (
                        <p className="mt-6 text-[0.9375rem] leading-relaxed text-ink-muted text-pretty">{description}</p>
                    )}

                    {benefits && (
                        <div className="mt-7">
                            <h5 className="text-base font-medium text-ink">Key Benefits</h5>
                            <ul className="mt-3 space-y-3">
                                {Object.values(benefits).map((benefit, i) => {
                                    const [lead, ...rest] = benefit.split(': ');
                                    const restText = rest.join(': ');
                                    return (
                                        <li key={i} className="flex gap-3">
                                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cardamom-100 text-cardamom-600">
                                                <Check size={12} strokeWidth={3} />
                                            </span>
                                            <p className="text-[0.9375rem] leading-relaxed text-ink">
                                                {restText ? <span className="font-medium">{lead}. </span> : null}
                                                <span className="text-ink-muted">{restText || lead}</span>
                                            </p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                </Modal>
            )}
        </motion.article>
    );
}
