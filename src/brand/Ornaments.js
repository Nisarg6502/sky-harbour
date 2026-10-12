import React from 'react';

// Small cargo ship, side profile, for the farm-to-table route.
export function CargoShip({ size = 28, className = '', ...props }) {
    return (
        <svg viewBox="0 0 32 24" width={size} height={(size * 24) / 32} className={className} aria-hidden="true" {...props}>
            <path d="M1.5 15.5 H30.5 L27 21.5 H5 Z" fill="currentColor" />
            <rect x="5" y="10.5" width="4.6" height="4.4" rx="0.4" fill="currentColor" opacity="0.85" />
            <rect x="10.3" y="10.5" width="4.6" height="4.4" rx="0.4" fill="currentColor" opacity="0.65" />
            <rect x="10.3" y="5.6" width="4.6" height="4.4" rx="0.4" fill="currentColor" opacity="0.85" />
            <rect x="15.6" y="10.5" width="4.6" height="4.4" rx="0.4" fill="currentColor" opacity="0.85" />
            <rect x="21.6" y="7" width="4.2" height="8" rx="0.5" fill="currentColor" />
            <rect x="22.8" y="3.5" width="1.8" height="3.2" fill="currentColor" />
        </svg>
    );
}
