import React, { useEffect, useRef, useState } from 'react';

const hoverQuery = '(hover: hover) and (pointer: fine)';

// Shows a product's photos stacked in one frame. Every photo stays mounted and a
// swap is a single opacity transition on the incoming photo laid over the
// outgoing one — no remounts, no blank frames.
// - Desktop: hovering the card (the nearest `.group`) fades the second photo in.
// - Touch: photos rotate slowly, only while the frame is on screen.
// `blend` multiplies the whole stack (not each photo) onto the paper tone, so
// white studio backgrounds disappear without overlapping photos darkening.
export default function ImageDuo({
    images: imagesProp,
    image1,
    image2,
    alt,
    className = 'relative',
    blend = false,
    intervalMs = 5000,
}) {
    const images = (imagesProp || [image1, image2]).filter((src, i, all) => src && all.indexOf(src) === i);
    const multiple = images.length > 1;
    const rootRef = useRef(null);
    const indexRef = useRef(0);
    const [hoverMode] = useState(() => typeof window !== 'undefined' && window.matchMedia(hoverQuery).matches);
    const [hovered, setHovered] = useState(false);
    const [index, setIndex] = useState(0);
    const [prev, setPrev] = useState(null);

    // Desktop: hover the surrounding card.
    useEffect(() => {
        if (!multiple || !hoverMode) return;
        const card = rootRef.current.closest('.group') || rootRef.current;
        const enter = () => setHovered(true);
        const leave = () => setHovered(false);
        card.addEventListener('mouseenter', enter);
        card.addEventListener('mouseleave', leave);
        return () => {
            card.removeEventListener('mouseenter', enter);
            card.removeEventListener('mouseleave', leave);
        };
    }, [multiple, hoverMode]);

    // Touch: rotate while visible.
    useEffect(() => {
        if (!multiple || hoverMode) return;
        let timer = null;
        const advance = () => {
            const current = indexRef.current;
            const next = (current + 1) % images.length;
            indexRef.current = next;
            setPrev(current);
            setIndex(next);
        };
        const observer = new IntersectionObserver(([entry]) => {
            clearInterval(timer);
            if (entry.isIntersecting) timer = setInterval(advance, intervalMs);
        });
        observer.observe(rootRef.current);
        return () => {
            observer.disconnect();
            clearInterval(timer);
        };
    }, [multiple, hoverMode, images.length, intervalMs]);

    const layerClass = (i) => {
        if (hoverMode) {
            if (i === 0) return 'z-0 opacity-100';
            if (i === 1) return `z-10 transition-opacity duration-500 ease-in-out ${hovered ? 'opacity-100' : 'opacity-0'}`;
            return 'hidden';
        }
        if (i === index) return 'z-20 opacity-100 transition-opacity duration-700 ease-in-out';
        if (i === prev) return 'z-10 opacity-100';
        return 'z-0 opacity-0';
    };

    const activeDot = hoverMode ? (hovered ? 1 : 0) : index;

    return (
        <div ref={rootRef} className={`overflow-hidden ${className}`}>
            <div
                className={`absolute inset-0 transition-transform duration-700 ease-out [@media(hover:hover)]:group-hover:scale-[1.04] ${blend ? 'mix-blend-multiply' : ''}`}
            >
                {images.map((src, i) => (
                    <img
                        key={src}
                        src={src}
                        alt={i === 0 ? alt : ''}
                        aria-hidden={i === 0 ? undefined : true}
                        loading="lazy"
                        decoding="async"
                        onTransitionEnd={!hoverMode && i === index ? () => setPrev(null) : undefined}
                        className={`absolute inset-0 h-full w-full object-cover ${layerClass(i)}`}
                    />
                ))}
            </div>

            {multiple && (
                <div className="absolute bottom-3 left-3 z-30 flex gap-1.5" aria-hidden="true">
                    {images.slice(0, hoverMode ? 2 : images.length).map((src, i) => (
                        <span
                            key={src}
                            className={`h-1.5 w-1.5 rounded-full shadow-[0_0_0_1px_rgba(28,26,22,0.15)] transition-colors duration-300 ${i === activeDot ? 'bg-paper' : 'bg-paper/45'}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
