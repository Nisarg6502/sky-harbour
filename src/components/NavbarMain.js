import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { WhatsappIcon } from './ui/SocialIcons';
import { Wordmark } from '../brand/Logo';
import { easeOut, easeInOut } from './ui/Reveal';

export const WHATSAPP_URL = 'https://wa.me/+918530489863';

const links = [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#productsection' },
    { label: 'Certificates', href: '#certificates' },
];

export default function NavbarMain() {
    const [scrolled, setScrolled] = useState(false);
    const [tucked, setTucked] = useState(false);
    const [open, setOpen] = useState(false);
    const lastY = useRef(0);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 12);
            // Tuck the bar away while reading downwards, bring it back on any upward scroll.
            if (Math.abs(y - lastY.current) > 6) {
                setTucked(y > lastY.current && y > 160);
                lastY.current = y;
            }
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (!open) return;
        document.body.style.overflow = 'hidden';
        const onKey = (e) => e.key === 'Escape' && setOpen(false);
        document.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', onKey);
        };
    }, [open]);

    const solid = scrolled || open;

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,box-shadow] duration-300 ease-out ${tucked && !open ? '-translate-y-full' : ''} ${solid ? 'bg-paper/90 shadow-[0_1px_0_rgba(28,26,22,0.08)] backdrop-blur-md' : 'bg-transparent'}`}
            >
                <nav className="container-page relative z-10 flex h-[4.5rem] items-center justify-between sm:h-20">
                    <a href="#top" aria-label="Skyharbour — back to top" className="text-ink" onClick={() => setOpen(false)}>
                        <Wordmark className="h-[22px] w-auto sm:h-[25px]" />
                    </a>

                    <ul className="hidden items-center gap-9 lg:flex">
                        {links.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="group relative py-2 text-[0.9375rem] text-ink/70 transition-colors duration-200 hover:text-ink"
                                >
                                    {link.label}
                                    <span className="absolute inset-x-0 bottom-1 h-px origin-left scale-x-0 bg-ink transition-transform duration-300 ease-out [@media(hover:hover)]:group-hover:scale-x-100" />
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-2">
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-press hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors duration-200 [@media(hover:hover)]:hover:bg-harbour-700 sm:inline-flex"
                        >
                            <WhatsappIcon size={16} />
                            Contact Us
                        </a>
                        <button
                            onClick={() => setOpen((v) => !v)}
                            aria-label={open ? 'Close menu' : 'Open menu'}
                            aria-expanded={open}
                            className="btn-press relative flex h-11 w-11 items-center justify-center lg:hidden"
                        >
                            <span
                                className={`absolute h-[1.5px] w-6 bg-ink transition-transform duration-300 ease-out ${open ? 'rotate-45' : '-translate-y-[4px]'}`}
                            />
                            <span
                                className={`absolute h-[1.5px] w-6 bg-ink transition-transform duration-300 ease-out ${open ? '-rotate-45' : 'translate-y-[4px]'}`}
                            />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Sibling of <header>, not a child: the header's backdrop-filter would
                otherwise become the containing block for this fixed overlay. */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 z-[45] flex flex-col bg-paper grain pt-24 lg:hidden"
                        initial={{ clipPath: 'inset(0 0 100% 0)' }}
                        animate={{ clipPath: 'inset(0 0 0% 0)' }}
                        exit={{ clipPath: 'inset(0 0 100% 0)' }}
                        transition={{ duration: 0.6, ease: easeInOut }}
                    >
                        <motion.ul
                            className="container-page flex flex-col"
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            variants={{
                                hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
                                show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
                            }}
                        >
                            {links.map((link) => (
                                <li key={link.label} className="overflow-hidden border-b border-ink/10">
                                    <motion.a
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="flex items-baseline gap-4 py-4 text-[2.5rem] font-light leading-none tracking-[-0.03em] text-ink"
                                        variants={{
                                            hidden: { y: '110%' },
                                            show: { y: '0%', transition: { duration: 0.7, ease: easeOut } },
                                        }}
                                    >
                                        {link.label}
                                    </motion.a>
                                </li>
                            ))}
                        </motion.ul>

                        <motion.div
                            className="container-page mt-auto pb-[max(2rem,env(safe-area-inset-bottom))]"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 0.45, duration: 0.6, ease: easeOut } }}
                            exit={{ opacity: 0, transition: { duration: 0.15 } }}
                        >
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-press flex w-full items-center justify-center gap-2 rounded-full bg-ink py-4 text-base font-medium text-paper"
                            >
                                <WhatsappIcon size={18} />
                                Contact Us
                            </a>
                            <a href="mailto:team@skyharbourimpex.com" className="mt-5 block text-center text-[0.9375rem] text-ink-muted">team@skyharbourimpex.com</a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
