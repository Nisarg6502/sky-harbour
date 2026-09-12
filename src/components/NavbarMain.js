import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../images/Logo.png';
import Button from './ui/Button';
import { WhatsappIcon } from './ui/SocialIcons';

const links = [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#productsection' },
    { label: 'Certificates', href: '#certificates' },
];

export default function NavbarMain() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const onPointerDown = (e) => {
            if (headerRef.current && !headerRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('pointerdown', onPointerDown);
        return () => document.removeEventListener('pointerdown', onPointerDown);
    }, [open]);

    return (
        <header
            ref={headerRef}
            id="top"
            className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-out ${scrolled ? 'bg-cream/90 shadow-soft backdrop-blur-md' : 'bg-transparent'
                }`}
        >
            <nav className="container-page flex h-20 items-center justify-between">
                <a href="#top" className="flex items-center gap-2">
                    <img src={Logo} alt="SkyHarbour logo" className="h-11 w-auto" />
                </a>

                <ul className="hidden items-center gap-1 lg:flex">
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="group relative px-4 py-2 text-sm font-medium text-ink/75 transition-colors hover:text-ink"
                            >
                                {link.label}
                                <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-olive-600 transition-transform duration-200 ease-out [@media(hover:hover)]:group-hover:scale-x-100" />
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:block">
                    <Button
                        as="a"
                        href="https://wa.me/+918530489863"
                        target="_blank"
                        rel="noreferrer"
                        variant="primary"
                    >
                        <WhatsappIcon size={16} />
                        Contact Us
                    </Button>
                </div>

                <button
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle menu"
                    className="btn-press rounded-full p-2 text-ink lg:hidden"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden bg-cream shadow-soft lg:hidden"
                    >
                        <ul className="container-page flex flex-col gap-1 py-4">
                            {links.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="block rounded-lg px-3 py-3 text-base font-medium text-ink/80 hover:bg-ink/5 hover:text-ink"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-2">
                                <Button
                                    as="a"
                                    href="https://wa.me/+918530489863"
                                    target="_blank"
                                    rel="noreferrer"
                                    variant="primary"
                                    className="w-full"
                                >
                                    <WhatsappIcon size={16} />
                                    Contact Us
                                </Button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
