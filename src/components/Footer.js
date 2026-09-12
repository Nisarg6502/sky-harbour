import Logo from "../images/Logo.png";
import { MapPin, Mail, Phone } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from './ui/SocialIcons';

const productLinks = [
    { label: 'Spices', tab: 'spices' },
    { label: 'Agro Products', tab: 'agro' },
    { label: 'Biodegradable Products', tab: 'bio' },
];

const usefulLinks = [
    { label: 'Home', href: '#top' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#productsection' },
    { label: 'Contact Us', href: 'https://wa.me/+918530489863' },
];

const socials = [
    { icon: FacebookIcon, href: 'https://www.facebook.com/share/14qmSi6xdcA/', label: 'Facebook' },
    { icon: InstagramIcon, href: 'https://www.instagram.com/skyharbourimpex', label: 'Instagram' },
    { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/yashrajpatilresydue', label: 'LinkedIn' },
];

function Footer() {
    return (
        <footer className="border-t border-ink/10 bg-olive-800 text-cream/80">
            <div className="container-page flex flex-col items-center justify-between gap-4 border-b border-cream/10 py-6 sm:flex-row">
                <span className="text-sm text-cream/70">Get connected with us on social networks:</span>
                <div className="flex items-center gap-3">
                    {socials.map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={label}
                            className="btn-press flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-clay-400 hover:text-ink"
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
            </div>

            <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <img src={Logo} width="958" height="148" className="h-auto w-48 brightness-0 invert opacity-90" alt="Logo of SkyHarbour" loading="lazy" />
                    <p className="mt-4 text-sm leading-relaxed text-cream/70">
                        At SkyHarbour Impex, we are passionate about delivering the freshest and finest selection of spices, agro, and biodegradable products to global markets, cultivating flavors that transcend borders.
                    </p>
                    <p className="mt-4 text-xs leading-relaxed text-cream/50">
                        <b className="text-cream/70">CIN NO:</b> U47990KA2023PTC175888
                        <br />
                        <b className="text-cream/70">GSTIN NO:</b> 29ABLCS2303K1Z4
                    </p>
                </div>

                <div>
                    <h3 className="font-display text-base text-cream">Products</h3>
                    <ul className="mt-4 space-y-2.5">
                        {productLinks.map(({ label, tab }) => (
                            <li key={label}>
                                <a
                                    href="#productsection"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.dispatchEvent(new CustomEvent('sh:select-product-tab', { detail: { tab } }));
                                        document.getElementById('productsection')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="font-display text-base text-cream">Useful Links</h3>
                    <ul className="mt-4 space-y-2.5">
                        {usefulLinks.map((link) => (
                            <li key={link.label}>
                                <a href={link.href} className="text-sm text-cream/70 transition-colors hover:text-cream">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="font-display text-base text-cream">Contact</h3>
                    <ul className="mt-4 space-y-3 text-sm text-cream/70">
                        <li className="flex gap-3">
                            <MapPin size={18} className="mt-0.5 shrink-0 text-clay-300" />
                            <span>
                                No.1-1165/1, Aiwan-E-Shahi, GB court, Gulbarga pincode - 585102
                                <br />
                                State: Karnataka
                                <br />
                                Country: India
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="shrink-0 text-clay-300" />
                            <a href="mailto:team@skyharbourimpex.com" className="hover:text-cream">
                                team@skyharbourimpex.com
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="shrink-0 text-clay-300" />
                            <span>
                                <a href="tel:+917899933077" className="hover:text-cream">+91 7899933077</a>
                                {' / '}
                                <a href="tel:+918530489863" className="hover:text-cream">+91 85304 89863</a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-cream/10 pb-20 pt-6 sm:py-6 text-center text-xs text-cream/50">
                © {new Date().getFullYear()} Copyright: <span className="font-semibold text-cream/70">SkyHarbour Impex Private Limited</span>
            </div>
        </footer>
    );
}

export default Footer;
