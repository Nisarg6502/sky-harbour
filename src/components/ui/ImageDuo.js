import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ImageDuo({ image1, image2, alt, className = '', intervalMs = 3200 }) {
    const images = image2 && image2 !== image1 ? [image1, image2] : [image1];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (images.length < 2) return;
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % images.length);
        }, intervalMs);
        return () => clearInterval(id);
    }, [images.length, intervalMs]);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <AnimatePresence mode="wait">
                <motion.img
                    key={index}
                    src={images[index]}
                    alt={alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out [@media(hover:hover)]:group-hover:scale-110"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
                />
            </AnimatePresence>
            {images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                    {images.map((_, i) => (
                        <span
                            key={i}
                            className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${i === index ? 'w-4 bg-cream' : 'w-1.5 bg-cream/50'
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
