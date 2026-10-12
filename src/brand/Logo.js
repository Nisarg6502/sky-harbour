import React from 'react';
import { LOCKUP_SUBLINE, LOCKUP_VIEWBOX, WORDMARK_LETTERS, WORDMARK_VIEWBOX } from './logoPaths';

// "Skyharbour" wordmark (digital logo). Inherits the surrounding text colour.
export function Wordmark({ className = '', title = 'Skyharbour', ...props }) {
    return (
        <svg
            viewBox={WORDMARK_VIEWBOX}
            fill="currentColor"
            role="img"
            aria-label={title}
            className={className}
            {...props}
        >
            {WORDMARK_LETTERS.map((d) => (
                <path key={d.slice(0, 12)} d={d} />
            ))}
        </svg>
    );
}

// Full lockup with "Impex Pvt Ltd" (print logo) — used where the legal entity is named.
export function LogoLockup({ className = '', title = 'Skyharbour Impex Pvt Ltd', ...props }) {
    return (
        <svg
            viewBox={LOCKUP_VIEWBOX}
            fill="currentColor"
            role="img"
            aria-label={title}
            className={className}
            {...props}
        >
            {WORDMARK_LETTERS.map((d) => (
                <path key={d.slice(0, 12)} d={d} />
            ))}
            {LOCKUP_SUBLINE.map((d) => (
                <path key={d.slice(0, 12)} d={d} />
            ))}
        </svg>
    );
}

export default Wordmark;
