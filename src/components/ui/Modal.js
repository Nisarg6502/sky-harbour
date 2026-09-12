import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function Modal({ open, onClose, title, eyebrow, image, imageAlt, children }) {
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [open, onClose]);

    return createPortal(
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                >
                    <div
                        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-xl2 bg-cream-50 shadow-card-hover origin-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <button
                            onClick={onClose}
                            aria-label="Close"
                            className="btn-press absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-ink/40 text-cream backdrop-blur-sm transition-colors hover:bg-ink/60"
                        >
                            <X size={18} />
                        </button>

                        {image ? (
                            <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-t-xl2 sm:h-64">
                                <img src={image} alt={imageAlt || title} className="h-full w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-6">
                                    {eyebrow && (
                                        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-clay-300">
                                            {eyebrow}
                                        </span>
                                    )}
                                    <h4 className="font-display text-2xl text-cream text-balance">{title}</h4>
                                </div>
                            </div>
                        ) : (
                            <div className="border-b border-ink/10 px-6 py-5">
                                {eyebrow && (
                                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-clay-500">
                                        {eyebrow}
                                    </span>
                                )}
                                <h4 className="font-display text-xl text-ink">{title}</h4>
                            </div>
                        )}

                        <div className="px-6 py-6 sm:px-8 sm:py-8">{children}</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
