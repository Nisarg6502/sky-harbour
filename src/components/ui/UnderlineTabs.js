import React from 'react';
import { motion } from 'framer-motion';

export default function UnderlineTabs({ tabs, active, onChange, layoutId, className = '' }) {
    return (
        <div
            className={`flex flex-wrap items-center justify-center gap-2 ${className}`}
        >
            {tabs.map((tab) => {
                const isActive = tab.id === active;
                const Icon = tab.icon;
                return (
                    <button
                        key={tab.id}
                        onClick={() => onChange(tab.id)}
                        className={`btn-press relative flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ease-out ${isActive ? 'text-cream' : 'text-ink-muted hover:bg-ink/5 hover:text-ink'
                            }`}
                    >
                        {isActive && (
                            <motion.span
                                layoutId={layoutId}
                                className="absolute inset-0 rounded-full bg-clay-500 shadow-soft"
                                transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
                            />
                        )}
                        {Icon && <Icon size={14} className="relative z-10" strokeWidth={2.25} />}
                        <span className="relative z-10">{tab.label}</span>
                    </button>
                );
            })}
        </div>
    );
}
