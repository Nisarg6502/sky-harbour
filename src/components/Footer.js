import { LogoLockup } from '../brand/Logo';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from './ui/SocialIcons';
import { WHATSAPP_URL } from './NavbarMain';

const productLinks = [
    { label: 'Spices', tab: 'spices' },
    { label: 'Agro Products', tab: 'agro' },
    { label: 'Biodegradable Products', tab: 'bio' },
];

const usefulLinks = [
    { label: 'Home', href: '#top' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#productsection' },
    { label: 'Contact Us', href: WHATSAPP_URL, external: true },
];

const socials = [
    { icon: FacebookIcon, href: 'https://www.facebook.com/share/14qmSi6xdcA/', label: 'Facebook' },
    { icon: InstagramIcon, href: 'https://www.instagram.com/skyharbourimpex', label: 'Instagram' },
    { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/yashrajpatilresydue', label: 'LinkedIn' },
];

const linkClass = 'text-[0.9375rem] text-paper/70 transition-colors duration-200 hover:text-paper';

function Footer() {
    return (
        <footer className="grain bg-harbour-900 text-paper/70">
            <div className="border-b border-paper/10">
                <div className="container-page flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
                    <span className="text-sm text-paper/60">Get connected with us on social networks:</span>
                    <ul className="flex gap-2.5">
                        {socials.map(({ icon: Icon, href, label }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="btn-press flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper/80 transition-colors duration-200 hover:border-turmeric-400 hover:bg-turmeric-400 hover:text-ink"
                                >
                                    <Icon size={17} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="container-page grid grid-cols-1 gap-14 py-20 sm:grid-cols-2 sm:py-24 lg:grid-cols-12 lg:gap-10">
                <div className="sm:col-span-2 lg:col-span-5">
                    <LogoLockup className="h-auto w-[min(100%,19rem)] text-paper" />
                    <p className="mt-8 max-w-sm text-[0.9375rem] leading-relaxed text-paper/60 text-pretty">
                        At SkyHarbour Impex, we are passionate about delivering the freshest and finest
                        selection of spices, agro, and biodegradable products to global markets, cultivating
                        flavors that transcend borders.
                    </p>
                    <dl className="mt-8 space-y-1 text-sm text-paper/45">
                        <div>
                            <dt className="inline">CIN No: </dt>
                            <dd className="inline text-paper/60">U47990KA2023PTC175888</dd>
                        </div>
                        <div>
                            <dt className="inline">GSTIN No: </dt>
                            <dd className="inline text-paper/60">29ABLCS2303K1Z4</dd>
                        </div>
                    </dl>
                </div>

                <div className="lg:col-span-2">
                    <h3 className="text-base font-medium text-paper">Products</h3>
                    <ul className="mt-5 space-y-3">
                        {productLinks.map(({ label, tab }) => (
                            <li key={label}>
                                <a
                                    href="#productsection"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.dispatchEvent(new CustomEvent('sh:select-product-tab', { detail: { tab } }));
                                        document.getElementById('productsection')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className={linkClass}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-2">
                    <h3 className="text-base font-medium text-paper">Useful Links</h3>
                    <ul className="mt-5 space-y-3">
                        {usefulLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                                    className={linkClass}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-3">
                    <h3 className="text-base font-medium text-paper">Contact</h3>
                    <ul className="mt-5 space-y-3 text-[0.9375rem] leading-relaxed">
                        <li>
                            <a href="mailto:team@skyharbourimpex.com" className={linkClass}>
                                team@skyharbourimpex.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+917899933077" className={`whitespace-nowrap ${linkClass}`}>+91 7899933077</a>
                            <span className="text-paper/30"> / </span>
                            <a href="tel:+918530489863" className={`whitespace-nowrap ${linkClass}`}>+91 85304 89863</a>
                        </li>
                        <li className="text-paper/60">
                            No.1-1165/1, Aiwan-E-Shahi, GB court, Gulbarga pincode - 585102
                            <br />
                            State: Karnataka
                            <br />
                            Country: India
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-paper/10">
                <div className="container-page pb-24 pt-6 text-center sm:pb-6">
                    <p className="text-sm text-paper/45">
                        © {new Date().getFullYear()} Copyright:{' '}
                        <span className="text-paper/70">SkyHarbour Impex Private Limited</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
