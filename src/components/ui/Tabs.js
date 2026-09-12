import React from 'react';
import { motion } from 'framer-motion';

export default function Tabs({ tabs, active, onChange, layoutId, size = 'md', className = '' }) {
    const sizes = size === 'sm'
        ? 'px-4 py-2 text-sm'
        : 'px-5 py-3 text-sm sm:text-base';

    return (
        <div
            className={`inline-flex flex-wrap justify-center gap-1.5 rounded-full bg-ink/5 p-1.5 ${className}`}
        >
            {tabs.map((tab) => {
                const isActive = tab.id === active;
                const Icon = tab.icon;
                return (
                    <button
                        key={tab.id}
                        onClick={() => onChange(tab.id)}
                        className={`btn-press relative flex items-center gap-2 rounded-full font-semibold transition-colors duration-200 ease-out ${sizes} ${isActive ? 'text-cream' : 'text-ink/60 hover:text-ink'
                            }`}
                    >
                        {isActive && (
                            <motion.span
                                layoutId={layoutId}
                                className="absolute inset-0 rounded-full bg-olive-600 shadow-soft"
                                transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
                            />
                        )}
                        {Icon && <Icon size={16} className="relative z-10" strokeWidth={2.25} />}
                        <span className="relative z-10">{tab.label}</span>
                    </button>
                );
            })}
        </div>
    );
}
