import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { Reveal, RevealGroup, revealItem } from './ui/Reveal';
import ImageDuo from './ui/ImageDuo';
import ProductCard from './ProductCard';

import LakadongPowder from '../images/lakadong-powder.jpg';
import LakadongDried from '../images/lakadong-dried.jpg';
import YaingangPowder from '../images/yaingang-powder.jpg';
import YaingangDried from '../images/yaingang-dried.jpg';
import TangianPowder from '../images/ta-ngian-powder.jpg';
import TangianDried from '../images/ta-ngian-dried.jpg';
import SalemTurmeric from '../images/salem-turmeric.jpg';
import ByadgiDried1 from '../images/byadgi-dried1.jpg';
import ByadgiDried2 from '../images/byadgi-dried2.jpg';
import GunturDried1 from '../images/guntur-dried1.jpg';
import GunturDried2 from '../images/guntur-dried2.jpg';
import Ginger from '../images/ginger.jpg';
import Ginger2 from '../images/ginger2.jpg';
import Cardamom1 from '../images/cardamom1.jpg';
import Cardamom2 from '../images/cardamom2.jpg';
import BlackPepper1 from '../images/black-pepper.jpg';
import BlackPepper2 from '../images/black-pepper2.jpg';
import Cumin1 from '../images/cumin1.jpg';
import Cumin2 from '../images/cumin2.jpg';
import Mushroom from '../images/mushroom.jpg';
import BabyCorn from '../images/babycorn.jpg';
import Rice from '../images/rice.jpg';
import FoxNut from '../images/foxnut.jpg';
import Maize from '../images/maize.jpg';
import TurDal from '../images/turdal.jpg';
import Soyabean from '../images/soyabean.jpg';
import Moringa1 from '../images/moringa1.jpeg';
import Moringa2 from '../images/moringa2.jpeg';
import Moringa3 from '../images/moringa3.jpeg';
import BioCup from '../images/biocup.jpg';
import Areca from '../images/areca.jpg';
import KraftPaper from '../images/kraftpaper.jpg';
import Coconut from '../images/coconut.jpg';
import Disposable from '../images/disposable.jpg';

const turmericSpecs = [
    {
        id: 1,
        Name: 'Lakadong Turmeric',
        Curcumin: '6% - 9%',
        Origin: 'Meghalaya',
        Intro: "The world's best with high curcumin content, perfect for home remedies and Ayurvedic marvels.",
        Description:
            'This variety comes from Meghalaya and is considered to be the world’s best turmeric variety due to its very high curcumin content, which can range from 7-12%. It has a dark yellow colour and a pungent taste. It is used for making various home remedies and Ayurvedic medicines.',
        Benefits: {
            first: 'Anti-Inflammatory: Aids in reducing inflammation in the body, potentially easing conditions like arthritis.',
            second: 'Powerful Antioxidant: Acts as a strong antioxidant, protecting cells from damage and supporting overall well-being.',
            third: 'Joint Health: Supports joint health and may alleviate joint pain and stiffness.',
            fourth: 'Digestive Aid: Helps with digestion and soothes digestive issues.',
        },
        Image1: LakadongPowder,
        Image2: LakadongDried,
    },
    {
        id: 2,
        Name: 'Yaingang Turmeric',
        Curcumin: '4% - 6%',
        Origin: 'Manipur',
        Intro: 'A golden treasure with gentle curcumin content, ideal for traditional remedies and culinary delights.',
        Description:
            'From the picturesque landscapes of Manipur, Yaingang Turmeric is a cherished gem. This exceptional variety boasts a curcumin content ranging from 4 to 6%, making it a valuable addition to your pantry. With its warm, golden color and a gentle, earthy taste, Yaingang Turmeric has been a traditional choice for crafting home remedies and Ayurvedic medicines for generations.',
        Benefits: {
            first: 'Mild Flavor: With a gentle, earthy taste, it enhances a variety of dishes.',
            second: 'Antioxidant Power: Acts as an antioxidant, protecting against cell damage and supporting well-being.',
            third: 'Traditional Remedies: A popular choice for crafting traditional home remedies and Ayurvedic medicines.',
            fourth: 'Anti-Inflammatory: Aids in reducing inflammation and promoting joint health.',
        },
        Image1: YaingangPowder,
        Image2: YaingangDried,
    },
    {
        id: 3,
        Name: 'Ta-ngian Turmeric',
        Curcumin: '2% - 4%',
        Origin: 'Arunachal Pradesh',
        Intro: 'A unique spice from Arunachal Pradesh, offering mild yet distinctive flavors and potential health benefits.',
        Description:
            'Grown in the lush valleys of Arunachal Pradesh, Tangian Turmeric is a unique treasure. With a curcumin content ranging from 2 to 4%, it offers a mild yet distinct flavor profile. Tangian Turmeric has been a culinary and medicinal staple in the region for generations.',
        Benefits: {
            first: 'Wellness Potential: May provide various health benefits, making it a valuable addition to your diet.',
            second: 'Culinary Versatility: Enhances a wide range of dishes with its subtle, earthy taste.',
            third: 'Traditional Remedy: Used for generations in traditional remedies and Ayurvedic practices.',
            fourth: 'Distinct Flavor: Offers a mild and unique flavor profile.',
        },
        Image1: TangianPowder,
        Image2: TangianDried,
    },
    {
        id: 4,
        Name: 'Salem Turmeric',
        Curcumin: '2% - 5%',
        Origin: 'Salem - Tamil Nadu; Erode - Tamil Nadu; Sangli - Maharashtra; Rajapore - Maharashtra',
        Intro:
            'Discover the mild and flavorful charm of this beloved spice from Tamil Nadu. This prestigious variety earned a Geographical Indication (GI) tag in 2019, highlighting its exceptional quality and heritage.',
        Description:
            'These varieties come from Tamil Nadu and are widely used in cooking and medicine. They have a lighter yellow colour and a mild flavour. Erode turmeric is one of the most exported varieties of turmeric in India. Salem turmeric received a Geographical Indication (GI) tag in 2019.',
        Benefits: {
            first: 'Anti-Inflammatory: Aids in reducing inflammation in the body, potentially easing conditions like arthritis.',
            second: 'Powerful Antioxidant: Acts as a strong antioxidant, protecting cells from damage and supporting overall well-being.',
            third: 'Joint Health: Supports joint health and may alleviate joint pain and stiffness.',
            fourth: 'Digestive Aid: Helps with digestion and soothes digestive issues.',
        },
        Image1: SalemTurmeric,
        Image2: SalemTurmeric,
    },
];

const redChilliSpecs = [
    {
        id: 1,
        Name: 'Byadgi Chilli',
        Origin: 'Karnataka',
        Color: 'Dark Red',
        Flavour: 'Mildly Spicy',
        Pungency: '8000 - 12000 SHU',
        Styles: 'Whole, Powder',
        Description:
            'Named after the town of Byadgi in Karnataka, this variety boasts a deep red color and a mild flavor, making it a less spicy alternative compared to other varieties. Its Scoville Heat Unit (SHU) ranges from 8,000 - 12,000, akin to the heat level of a Thai pepper.',
        Intro: 'A vibrant chili variety with a deep red hue and mild flavor, perfect for a touch of spice without the heat.',
        Image1: ByadgiDried1,
        Image2: ByadgiDried2,
    },
    {
        id: 2,
        Name: 'Guntur Chilli',
        Origin: 'Andhra Pradesh',
        Color: 'Bright Red',
        Flavour: 'Spicy',
        Pungency: '35,000–40,000 SHU',
        Styles: 'Whole, Powder',
        Description:
            'Hailing from the spice-rich Guntur district of Andhra Pradesh, this fiery variety, known as Sannam S4, boasts a dark red color and a pungent flavor, delivering a fiery and hot spice profile.',
        Intro: 'Spice up your culinary adventures with Guntur Chilli, known for its fiery heat and bold flavors.',
        Image1: GunturDried1,
        Image2: GunturDried2,
    },
];

const singleSpices = {
    Ginger: {
        Name: 'Ginger',
        Description:
            "Our ginger is a zesty wonder, known for its distinctive aroma and bold taste. In addition to its culinary versatility, ginger is renowned for its potential health benefits. It's been used for centuries to ease digestive discomfort, reduce inflammation, and boost the immune system.",
        Image1: Ginger,
        Image2: Ginger2,
        Copy: "Our ginger collection is a celebration of the spice's versatility. From the iconic Cochin Ginger, known for its pungent aroma and flavor, to the milder, more delicate varieties, our ginger collection offers a range of options to suit your culinary needs.",
    },
    Cardamom: {
        Name: 'Cardamom',
        Description:
            "Our cardamom is a culinary delight, known for its bold flavor and aroma. Whether you're adding it to your favorite curry or brewing a cup of tea, our cardamom is a versatile ingredient that elevates your dishes.",
        Image1: Cardamom1,
        Image2: Cardamom2,
        Copy: 'Our Cardamom Collection brings the exquisite fragrance and flavor of this spice right to your kitchen, from the bold and aromatic to the subtly sweet.',
    },
    'Black Pepper': {
        Name: 'Black Pepper',
        Description:
            "Our black pepper is a culinary delight, known for its bold flavor and aroma. Whether you're adding it to your favorite curry or brewing a cup of tea, our black pepper is a versatile ingredient that elevates your dishes.",
        Image1: BlackPepper1,
        Image2: BlackPepper2,
        Copy: "Dive into the bold world of pepper with our Black Pepper Collection. Known for its strong and pungent flavor, black pepper is a staple in kitchens worldwide.",
    },
    Cumin: {
        Name: 'Cumin',
        Description:
            "Our cumin is a culinary delight, known for its bold flavor and aroma. Whether you're adding it to your favorite curry or brewing a cup of tea, our cumin is a versatile ingredient that elevates your dishes.",
        Image1: Cumin1,
        Image2: Cumin2,
        Copy: 'Our Cumin Collection is a testament to the warm and earthy aroma that cumin brings to your dishes, from seasoning curries to soups.',
    },
};


const agroItems = [
    { name: 'Rice', images: [Rice], alt: 'Bowl of rice grains' },
    { name: 'Foxnut', images: [FoxNut], alt: 'White bowl containing foxnuts' },
    { name: 'Maize', images: [Maize], alt: 'Corn and corn kernels on a wooden table' },
    { name: 'Soyabean', images: [Soyabean], alt: 'A bag of soyabeans and a spoon on a wooden table' },
    { name: 'Toor Dal', images: [TurDal], alt: 'Toor dal in a white bowl' },
    { name: 'Baby Corn', images: [BabyCorn], alt: 'Several white baby corns' },
    { name: 'Mushroom', images: [Mushroom], alt: 'Two mushrooms' },
    { name: 'Moringa', images: [Moringa1, Moringa2, Moringa3], alt: 'Powdered moringa leaves in a bowl' },
];

const bioItems = [
    { name: 'Biodegradable cups', src: BioCup, alt: 'Biodegradable cup', span: 'lg:col-span-3', aspect: 'aspect-[4/3]' },
    { name: 'Areca leaf plates', src: Areca, alt: 'Areca leaf plates', span: 'lg:col-span-3', aspect: 'aspect-[4/3]' },
    { name: 'Kraft paper products', src: KraftPaper, alt: 'Kraft paper products', span: 'lg:col-span-2', aspect: 'aspect-square' },
    { name: 'Coconut-based products', src: Coconut, alt: 'Coconut-based products', span: 'lg:col-span-2', aspect: 'aspect-square' },
    { name: 'Disposable cutlery', src: Disposable, alt: 'Disposable cutlery', span: 'col-span-2 lg:col-span-2', aspect: 'aspect-[16/9] lg:aspect-square' },
];

const mainTabs = [
    { id: 'spices', label: 'Spices', thumb: SalemTurmeric },
    { id: 'agro', label: 'Agro Products', thumb: Maize },
    { id: 'bio', label: 'Biodegradable Products', thumb: BioCup },
];

// Each variety carries its own photo, used as the thumbnail in the index.
const spiceTabs = [
    { id: 'turmeric', label: 'Turmeric', thumb: SalemTurmeric },
    { id: 'redchilli', label: 'Red Chillies', thumb: GunturDried1 },
    { id: 'ginger', label: 'Ginger', thumb: Ginger },
    { id: 'cardamom', label: 'Cardamom', thumb: Cardamom1 },
    { id: 'pepper', label: 'Black Pepper', thumb: BlackPepper1 },
    { id: 'cumin', label: 'Cumin', thumb: Cumin1 },
];

// "6% - 9%" / "35,000–40,000 SHU" -> [6, 9] / [35000, 40000]
const parseRange = (text) => (text.match(/[\d,.]+/g) || []).map((n) => Number(n.replace(/,/g, '')));
const fmt = (n) => n.toLocaleString('en-US');

// Every panel below is always present in the DOM (toggled with the `hidden`
// utility, not conditionally rendered) so the full catalog stays crawlable
// even though only one tab is visually active at a time. `panel-in` replays
// its entrance each time a panel is un-hidden.
function panelClass(isActive) {
    return isActive ? 'panel-in' : 'hidden';
}

// Phones: three equal tiles, each with a product photo; the chosen one fills in.
// Larger screens: editorial text tabs with a sliding bar. All options always visible.
function CategoryTabs({ active, onChange }) {
    return (
        <div role="tablist" aria-label="Product categories" className="grid grid-cols-3 gap-2 sm:gap-0 sm:border-t sm:border-ink/15">
            {mainTabs.map((tab) => {
                const isActive = tab.id === active;
                return (
                    <button
                        key={tab.id}
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => onChange(tab.id)}
                        className="btn-press group relative flex flex-col items-center gap-2 rounded-2xl px-1.5 pb-3 pt-2 text-center sm:block sm:rounded-none sm:px-0 sm:pb-5 sm:pr-6 sm:pt-6 sm:text-left"
                    >
                        {isActive && (
                            <motion.span
                                layoutId="category-tile"
                                className="absolute inset-0 rounded-2xl bg-ink sm:hidden"
                                transition={{ type: 'spring', duration: 0.45, bounce: 0.15 }}
                            />
                        )}
                        {!isActive && <span className="absolute inset-0 rounded-2xl ring-1 ring-ink/15 sm:hidden" aria-hidden="true" />}
                        {isActive && (
                            <motion.span
                                layoutId="category-bar"
                                className="absolute inset-x-0 -top-px hidden h-[3px] bg-turmeric-400 sm:right-6 sm:block"
                                transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
                            />
                        )}
                        <span className="relative block aspect-[4/3] w-full overflow-hidden rounded-xl bg-paper-200 sm:hidden">
                            <img src={tab.thumb} alt="" loading="lazy" className={`h-full w-full object-cover mix-blend-multiply transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-75'}`} />
                        </span>
                        <span
                            className={`relative block text-[0.8125rem] font-medium leading-tight transition-colors duration-200 sm:text-[clamp(1.5rem,2.3vw,2.15rem)] sm:font-light sm:tracking-[-0.03em] ${isActive ? 'text-paper sm:text-ink' : 'text-ink/70 sm:text-ink/35 [@media(hover:hover)]:sm:group-hover:text-ink/70'}`}
                        >
                            {tab.label}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}

// Variety picker: each row carries the spice's own photo; a soft card slides
// behind the selected row and its photo comes into full colour.
function SpiceIndex({ active, onChange }) {
    return (
        <ul className="flex flex-wrap gap-2 lg:block lg:space-y-1">
            {spiceTabs.map((tab) => {
                const isActive = tab.id === active;
                return (
                    <li key={tab.id}>
                        <button
                            onClick={() => onChange(tab.id)}
                            aria-pressed={isActive}
                            className={`btn-press relative flex w-full items-center gap-3 rounded-full py-1.5 pl-1.5 pr-4 text-left transition-colors duration-200 lg:gap-4 lg:rounded-2xl lg:p-2 lg:pr-4 ${isActive ? 'text-ink' : 'text-ink/60 hover:text-ink'}`}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="spice-highlight"
                                    className="absolute inset-0 rounded-full bg-paper-50 shadow-[0_1px_2px_rgba(28,26,22,0.06),0_8px_20px_-10px_rgba(28,26,22,0.25)] ring-1 ring-ink/[0.06] lg:rounded-2xl"
                                    transition={{ type: 'spring', duration: 0.5, bounce: 0.18 }}
                                />
                            )}
                            {!isActive && (
                                <span className="absolute inset-0 rounded-full ring-1 ring-ink/10 lg:hidden" aria-hidden="true" />
                            )}
                            <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-paper-200 lg:h-12 lg:w-12 lg:rounded-xl">
                                <img
                                    src={tab.thumb}
                                    alt=""
                                    loading="lazy"
                                    className={`h-full w-full object-cover mix-blend-multiply transition-[filter,opacity,transform] duration-500 ease-out ${isActive ? 'scale-110 opacity-100' : 'scale-100 opacity-60 grayscale'}`}
                                />
                            </span>
                            <span className="relative text-[0.9375rem] lg:text-lg">{tab.label}</span>
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

function PanelIntro({ children, className = '' }) {
    return <p className={`max-w-2xl text-base leading-relaxed text-ink-muted text-pretty ${className}`}>{children}</p>;
}

function Tile({ name, images, alt, aspect = 'aspect-[4/5]', className = '' }) {
    return (
        <motion.figure variants={revealItem} className={`group ${className}`}>
            <div className={`relative overflow-hidden rounded-[6px] bg-paper-200 ${aspect}`}>
                <ImageDuo images={images} alt={alt} className="absolute inset-0" blend />
            </div>
            <figcaption className="mt-3 text-lg tracking-[-0.01em] text-ink">{name}</figcaption>
        </motion.figure>
    );
}

export default function Product() {
    const [mainTab, setMainTab] = useState('spices');
    const [spiceTab, setSpiceTab] = useState('turmeric');

    useEffect(() => {
        const handler = (e) => {
            const tab = e.detail?.tab;
            if (mainTabs.some((t) => t.id === tab)) {
                setMainTab(tab);
            }
        };
        window.addEventListener('sh:select-product-tab', handler);
        return () => window.removeEventListener('sh:select-product-tab', handler);
    }, []);

    return (
        <section id="productsection" className="py-28 sm:py-36">
            <div className="container-page">
                <SectionHeading
                    eyebrow="Our Catalog"
                    title={['Explore our', 'exquisite products']}
                    description="Explore our product showcase, where each flavor, color, and aroma narrates a tale of quality and authenticity. At SkyHarbour Impex, we're dedicated to presenting an extensive array of premium spices, agro products, and biodegradable goods."
                />

                <Reveal className="mt-16 sm:mt-20" y={24}>
                    <CategoryTabs active={mainTab} onChange={setMainTab} />
                </Reveal>

                <div className="mt-12 sm:mt-16">
                    {/* Spices */}
                    <div className={panelClass(mainTab === 'spices')}>
                        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                            <aside className="lg:sticky lg:top-28 lg:col-span-3 lg:self-start">
                                <PanelIntro className="text-[0.9375rem]">
                                    Welcome to our Spices section, where we unlock a world of flavor, color, and
                                    health benefits that only the finest spices can provide. Our treasury of
                                    spices includes offerings from the lush North-Eastern corners to the
                                    vibrant South of India.
                                </PanelIntro>
                                <p className="mb-3 mt-8 hidden text-base font-medium text-turmeric-600 lg:block">Spice Varieties</p>
                                <div className="mt-8 lg:mt-0">
                                    <SpiceIndex active={spiceTab} onChange={setSpiceTab} />
                                </div>
                            </aside>

                            <div className="lg:col-span-9">
                                {/* Turmeric */}
                                <div className={panelClass(spiceTab === 'turmeric')}>
                                    <h3 className="text-3xl font-light tracking-[-0.03em] text-ink">Turmeric</h3>
                                    <PanelIntro className="mt-3">
                                        Our premium turmeric collection features unique varieties,
                                        distinguished by their curcumin content — from the picturesque
                                        landscapes of North-East India to the iconic Finger Turmeric from
                                        the vibrant South.
                                    </PanelIntro>
                                    <RevealGroup className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
                                        {turmericSpecs.map((t) => {
                                            const [lo, hi] = parseRange(t.Curcumin);
                                            return (
                                                <ProductCard
                                                    key={t.id}
                                                    title={t.Name}
                                                    intro={t.Intro}
                                                    description={t.Description}
                                                    benefits={t.Benefits}
                                                    image1={t.Image1}
                                                    image2={t.Image2}
                                                    details={[
                                                        { label: 'Origin', value: t.Origin },
                                                        { label: 'Curcumin', value: t.Curcumin },
                                                    ]}
                                                    meter={{
                                                        label: 'Curcumin',
                                                        value: `${lo}–${hi}%`,
                                                        min: 0,
                                                        max: 10,
                                                        from: lo,
                                                        to: hi,
                                                    }}
                                                />
                                            );
                                        })}
                                    </RevealGroup>
                                </div>

                                {/* Red Chillies */}
                                <div className={panelClass(spiceTab === 'redchilli')}>
                                    <h3 className="text-3xl font-light tracking-[-0.03em] text-ink">Red Chillies</h3>
                                    <PanelIntro className="mt-3">
                                        Journey through the diverse landscapes of India with our red chilli
                                        collection — each variety rated by its Scoville Heat Unit (SHU), so you
                                        can choose the spice level that suits your culinary adventures.
                                    </PanelIntro>
                                    <RevealGroup className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
                                        {redChilliSpecs.map((c) => {
                                            const [lo, hi] = parseRange(c.Pungency);
                                            return (
                                                <ProductCard
                                                    key={c.id}
                                                    title={c.Name}
                                                    intro={c.Intro}
                                                    description={c.Description}
                                                    image1={c.Image1}
                                                    image2={c.Image2}
                                                    badge={c.Flavour}
                                                    details={[
                                                        { label: 'Origin', value: c.Origin },
                                                        { label: 'Color', value: c.Color },
                                                        { label: 'Flavour', value: c.Flavour },
                                                        { label: 'Pungency', value: c.Pungency },
                                                        { label: 'Styles', value: c.Styles },
                                                    ]}
                                                    meter={{
                                                        label: 'Heat',
                                                        value: `${fmt(lo)}–${fmt(hi)} SHU`,
                                                        min: 0,
                                                        max: 50000,
                                                        from: lo,
                                                        to: hi,
                                                        tone: 'chilli',
                                                    }}
                                                />
                                            );
                                        })}
                                    </RevealGroup>
                                </div>

                                {/* Ginger / Cardamom / Black Pepper / Cumin — each its own always-mounted panel */}
                                {[
                                    { id: 'ginger', spice: singleSpices.Ginger },
                                    { id: 'cardamom', spice: singleSpices.Cardamom },
                                    { id: 'pepper', spice: singleSpices['Black Pepper'] },
                                    { id: 'cumin', spice: singleSpices.Cumin },
                                ].map(({ id, spice }) => (
                                    <div key={id} className={panelClass(spiceTab === id)}>
                                        <RevealGroup>
                                            <ProductCard
                                                layout="wide"
                                                title={spice.Name}
                                                intro={spice.Copy}
                                                description={spice.Description}
                                                image1={spice.Image1}
                                                image2={spice.Image2}
                                            />
                                        </RevealGroup>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Agro Products */}
                    <div className={panelClass(mainTab === 'agro')}>
                        <h3 className="text-3xl font-light tracking-[-0.03em] text-ink">Agro Products</h3>
                        <PanelIntro className="mt-3">
                            At SkyHarbour, our commitment to quality transcends spices. Our Agro Products
                            section presents a versatile range of nature's bounty — cereals and millets,
                            vegetables, edible oils, and protein-packed pulses, alongside herbal treasures
                            like Moringa leaves. Our Toor Dal proudly carries a GI tag.
                        </PanelIntro>
                        <RevealGroup className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 md:grid-cols-4" stagger={0.07}>
                            {agroItems.map((item) => (
                                <Tile key={item.name} {...item} />
                            ))}
                        </RevealGroup>
                    </div>

                    {/* Biodegradable Products */}
                    <div className={panelClass(mainTab === 'bio')}>
                        <h3 className="text-3xl font-light tracking-[-0.03em] text-ink">Bio-Degradable Cutlery</h3>
                        <PanelIntro className="mt-3">
                            SkyHarbour's biodegradable cutlery collection is a response to an urgent global
                            need — crafted from areca leaves, sugarcane bagasse, coconut, and kraft paper. It
                            breaks down naturally, releasing no harmful toxins or microplastics.
                        </PanelIntro>
                        <RevealGroup className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 lg:grid-cols-6" stagger={0.08}>
                            {bioItems.map((item) => (
                                <Tile
                                    key={item.name}
                                    name={item.name}
                                    images={[item.src]}
                                    alt={item.alt}
                                    aspect={item.aspect}
                                    className={item.span}
                                />
                            ))}
                        </RevealGroup>
                        <Reveal className="mt-12">
                            <PanelIntro>
                                From spoons and forks to plates, salad bowls, coffee cups, and straws — our
                                range enhances your dining experience while contributing to a greener, more
                                sustainable world.
                            </PanelIntro>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
