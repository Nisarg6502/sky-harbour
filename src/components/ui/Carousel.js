import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel({ items, className = '' }) {
    const [[index, direction], setState] = useState([0, 0]);

    const go = (dir) => {
        setState(([i]) => {
            const next = (i + dir + items.length) % items.length;
            return [next, dir];
        });
    };

    return (
        <div className={`relative overflow-hidden rounded-xl2 bg-ink/5 ${className}`}>
            <div className="relative aspect-[16/10] w-full">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.img
                        key={index}
                        src={items[index].src}
                        alt={items[index].alt}
                        loading="lazy"
                        custom={direction}
                        initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
                        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </AnimatePresence>
            </div>

            <button
                onClick={() => go(-1)}
                aria-label="Previous image"
                className="btn-press absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-cream/90 p-2 text-ink shadow-soft hover:bg-cream transition-colors"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={() => go(1)}
                aria-label="Next image"
                className="btn-press absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-cream/90 p-2 text-ink shadow-soft hover:bg-cream transition-colors"
            >
                <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                {items.map((_, i) => (
                    <button
                        key={i}
                        aria-label={`Go to image ${i + 1}`}
                        onClick={() => setState([i, i > index ? 1 : -1])}
                        className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${i === index ? 'w-5 bg-cream' : 'w-1.5 bg-cream/50 hover:bg-cream/80'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
