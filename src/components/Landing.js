import React from 'react';
import SalemTurmeric from '../images/salem-turmeric.jpg';
import GunturChilli from '../images/guntur-dried1.jpg';
import Cardamom from '../images/cardamom1.jpg';
import Maize from '../images/maize.jpg';
import BioDeg from '../images/biodeg.jpg';
import Button from './ui/Button';
import PhotoDeck from './ui/PhotoDeck';

// Full photos at their own proportions — nothing is cropped.
const photos = [
    { src: SalemTurmeric, w: 801, h: 534, alt: 'Dried Salem turmeric fingers', name: 'Salem Turmeric', from: 'Tamil Nadu' },
    { src: GunturChilli, w: 801, h: 534, alt: 'Dried Guntur red chillies', name: 'Guntur Chilli', from: 'Andhra Pradesh' },
    { src: Cardamom, w: 801, h: 534, alt: 'Green cardamom pods in a bowl', name: 'Cardamom' },
    { src: Maize, w: 1440, h: 1015, alt: 'Corn cobs and maize kernels', name: 'Maize' },
    { src: BioDeg, w: 960, h: 867, alt: 'Biodegradable plates, cups and cutlery', name: 'Biodegradable Products' },
];

const delay = (ms) => ({ '--d': `${ms}ms` });

export default function Landing() {
    return (
        <section id="top" className="relative overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
            <div className="container-page grid grid-cols-1 items-center gap-12 sm:gap-16 lg:grid-cols-12 lg:gap-8">
                <div className="relative z-10 lg:col-span-6">
                    <h1 className="text-[clamp(2.6rem,11.5vw,5.25rem)] font-light leading-[0.94] tracking-[-0.045em] text-ink lg:text-[clamp(4rem,6.2vw,6.5rem)]">
                        <span className="hero-line">
                            <span className="hero-rise" style={delay(120)}>Your gateway</span>
                        </span>{' '}
                        <span className="hero-line">
                            <span className="hero-rise pl-[0.85em]" style={delay(210)}>
                                to <em className="font-light italic text-harbour-500">fresh</em>
                            </span>
                        </span>{' '}
                        <span className="hero-line">
                            <span className="hero-rise" style={delay(300)}>horizons.</span>
                        </span>
                    </h1>

                    <p className="hero-fade mt-8 max-w-md text-base leading-relaxed text-ink-muted text-pretty sm:text-lg" style={delay(560)}>
                        Exporting the finest selection of spices, agro products, and biodegradable
                        products worldwide. From our farms to your table, excellence is our trademark.
                    </p>

                    <div className="hero-fade mt-10 flex flex-wrap items-center gap-x-7 gap-y-4" style={delay(680)}>
                        <Button as="a" href="#productsection" arrow>
                            Explore Products
                        </Button>
                        <a
                            href="#about"
                            className="text-[0.9375rem] font-medium text-ink underline decoration-ink/25 underline-offset-[6px] transition-[text-decoration-color] duration-200 hover:decoration-ink"
                        >
                            Learn about us
                        </a>
                    </div>
                </div>

                <PhotoDeck photos={photos} className="mx-auto w-full max-w-[36rem] lg:col-span-6 lg:max-w-none" />
            </div>
        </section>
    );
}
