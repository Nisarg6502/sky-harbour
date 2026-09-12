import React from 'react';

const variants = {
    primary:
        'bg-olive-600 text-cream hover:bg-olive-700 shadow-soft',
    outline:
        'border border-ink/15 text-ink hover:border-olive-500 hover:text-olive-700 bg-transparent',
    ghost:
        'text-ink/70 hover:text-ink bg-transparent',
    clay:
        'bg-clay-400 text-cream hover:bg-clay-500 shadow-soft',
};

export default function Button({
    as: Tag = 'button',
    variant = 'primary',
    className = '',
    children,
    ...props
}) {
    return (
        <Tag
            className={`btn-press inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 ease-out disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </Tag>
    );
}
