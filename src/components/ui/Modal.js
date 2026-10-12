import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { easeOut } from './Reveal';

export default function Modal({ open, onClose, title, eyebrow, images = [], imageAlt, children }) {
    const closeRef = useRef(null);

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        closeRef.current?.focus({ preventScroll: true });
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [open, onClose]);

    return createPortal(
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: easeOut }}
                >
                    <div className="absolute inset-0 bg-harbour-950/60 backdrop-blur-[2px]" onClick={onClose} />
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label={title}
                        className="grain relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl bg-paper-50 shadow-lift sm:max-h-[88vh] sm:rounded-lg"
                        initial={{ opacity: 0, y: 24, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.98 }}
                        transition={{ duration: 0.28, ease: easeOut }}
                    >
                        <button
                            ref={closeRef}
                            onClick={onClose}
                            aria-label="Close"
                            className="btn-press absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-paper-50/90 text-ink shadow-soft transition-colors hover:bg-paper-50"
                        >
                            <X size={18} />
                        </button>

                        <div className="grid grid-cols-1 sm:grid-cols-5">
                            {images.length > 0 && (
                                // Photo plates at the photos' own 3:2 ratio, so nothing gets cropped.
                                <div className="bg-paper-200 p-4 sm:col-span-2 sm:p-5">
                                    <div className={`grid gap-3 sm:sticky sm:top-5 sm:grid-cols-1 ${images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                                        {images.map((src, i) => (
                                            <div key={src} className="relative aspect-[3/2] overflow-hidden rounded-[4px] bg-paper-200">
                                                <img
                                                    src={src}
                                                    alt={i === 0 ? imageAlt || title : ''}
                                                    className="absolute inset-0 h-full w-full object-cover mix-blend-multiply"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className={`px-6 py-7 sm:px-8 sm:py-9 ${images.length > 0 ? 'sm:col-span-3' : 'sm:col-span-5'}`}>
                                {eyebrow && <span className="text-sm font-medium text-turmeric-600">{eyebrow}</span>}
                                <h4 className="mt-2 pr-10 text-3xl font-light tracking-[-0.03em] text-ink text-balance">{title}</h4>
                                <div className="mt-6">{children}</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
