import React from 'react';
import { ArrowRight } from 'lucide-react';

const variants = {
    primary: 'bg-ink text-paper [@media(hover:hover)]:hover:bg-harbour-700',
    light: 'bg-paper text-ink [@media(hover:hover)]:hover:bg-paper-50',
    outline: 'border border-current text-ink [@media(hover:hover)]:hover:bg-ink [@media(hover:hover)]:hover:text-paper',
    outlineLight: 'border border-paper/40 text-paper [@media(hover:hover)]:hover:bg-paper [@media(hover:hover)]:hover:text-ink',
};

// Pill button. `arrow` adds the turmeric "porthole" that tips its arrow up on hover.
export default function Button({
    as: Tag = 'button',
    variant = 'primary',
    arrow = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Tag
            className={`btn-press group/button inline-flex items-center justify-center gap-3 rounded-full text-[0.9375rem] font-medium tracking-[0.01em] transition-[background-color,color,border-color] duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 ${arrow ? 'py-2 pl-6 pr-2' : 'px-6 py-3'} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
            {arrow && (
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-turmeric-400 text-ink">
                    <ArrowRight
                        size={17}
                        strokeWidth={2}
                        className="transition-transform duration-200 ease-out [@media(hover:hover)]:group-hover/button:-rotate-45"
                    />
                </span>
            )}
        </Tag>
    );
}
