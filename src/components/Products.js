import React, { useState } from 'react';
import { Flame, Leaf, Recycle, Sun, Sprout, Gem, CircleDot, Wind } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Tabs from './ui/Tabs';
import UnderlineTabs from './ui/UnderlineTabs';
import Carousel from './ui/Carousel';
import { RevealGroup } from './ui/Reveal';
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

const agroImages = [
    { src: Rice, alt: 'Bowl of rice grains' },
    { src: FoxNut, alt: 'White bowl containing foxnuts' },
    { src: Maize, alt: 'Corn and corn kernels on a wooden table' },
    { src: Soyabean, alt: 'A bag of soyabeans and a spoon on a wooden table' },
    { src: TurDal, alt: 'Turdal in a white bowl' },
    { src: BabyCorn, alt: 'Several white baby corns' },
    { src: Mushroom, alt: 'Two mushrooms' },
    { src: Moringa1, alt: 'A bowl of powdered moringa leaves' },
    { src: Moringa2, alt: 'Moringa leaves and a bowl of powdered moringa leaves' },
    { src: Moringa3, alt: 'Bowl and spoon of powdered moringa leaves' },
];

const bioImages = [
    { src: BioCup, alt: 'Biodegradable cup' },
    { src: Areca, alt: 'Areca leaf plates' },
    { src: KraftPaper, alt: 'Kraft paper products' },
    { src: Coconut, alt: 'Coconut-based products' },
    { src: Disposable, alt: 'Disposable cutlery' },
];

const mainTabs = [
    { id: 'spices', label: 'Spices', icon: Flame },
    { id: 'agro', label: 'Agro Products', icon: Leaf },
    { id: 'bio', label: 'Biodegradable Products', icon: Recycle },
];

const spiceTabs = [
    { id: 'turmeric', label: 'Turmeric', icon: Sun },
    { id: 'redchilli', label: 'Red Chillies', icon: Flame },
    { id: 'ginger', label: 'Ginger', icon: Sprout },
    { id: 'cardamom', label: 'Cardamom', icon: Gem },
    { id: 'pepper', label: 'Black Pepper', icon: CircleDot },
    { id: 'cumin', label: 'Cumin', icon: Wind },
];

// Every panel below is always present in the DOM (toggled with the `hidden`
// utility, not conditionally rendered) so the full catalog stays crawlable
// even though only one tab is visually active at a time.
function panelClass(isActive) {
    return isActive ? '' : 'hidden';
}

export default function Product() {
    const [mainTab, setMainTab] = useState('spices');
    const [spiceTab, setSpiceTab] = useState('turmeric');

    return (
        <section id="productsection" className="bg-olive-50/60 py-24 sm:py-28">
            <div className="container-page">
                <SectionHeading
                    eyebrow="Our Catalog"
                    title="Explore our exquisite products"
                    description="Explore our product showcase, where each flavor, color, and aroma narrates a tale of quality and authenticity. At SkyHarbour Impex, we're dedicated to presenting an extensive array of premium spices, agro products, and biodegradable goods."
                />

                <div className="mt-12 flex justify-center">
                    <Tabs tabs={mainTabs} active={mainTab} onChange={setMainTab} layoutId="main-tab-pill" />
                </div>

                <div className="mt-14">
                    {/* Spices */}
                    <div className={panelClass(mainTab === 'spices')}>
                        <div className="mx-auto max-w-3xl text-center">
                            <h3 className="font-display text-2xl text-ink sm:text-3xl">Spices</h3>
                            <p className="mt-4 text-base leading-relaxed text-ink-muted">
                                Welcome to our Spices section, where we unlock a world of flavor, color, and
                                health benefits that only the finest spices can provide. Our treasury of
                                spices includes offerings from the lush North-Eastern corners to the vibrant
                                South of India.
                            </p>
                        </div>

                        <div className="relative mt-10 overflow-hidden rounded-2xl border border-ink/10 bg-cream-50 p-6 shadow-soft sm:p-10">
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-clay-400 via-olive-500 to-clay-400" />

                            <div className="flex flex-col items-center gap-1 text-center">
                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-500">
                                    Spice Varieties
                                </span>
                                <h4 className="font-display text-lg text-ink">Pick a variety to explore</h4>
                            </div>

                            <UnderlineTabs
                                tabs={spiceTabs}
                                active={spiceTab}
                                onChange={setSpiceTab}
                                layoutId="spice-tab-underline"
                                className="mx-auto mt-6 max-w-2xl"
                            />

                            <div className="mt-10">
                                {/* Turmeric */}
                                <div className={panelClass(spiceTab === 'turmeric')}>
                                    <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-ink-muted">
                                        Our premium turmeric collection features unique varieties,
                                        distinguished by their curcumin content — from the picturesque
                                        landscapes of North-East India to the iconic Finger Turmeric from
                                        the vibrant South.
                                    </p>
                                    <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                        {turmericSpecs.map((t) => (
                                            <ProductCard
                                                key={t.id}
                                                title={t.Name}
                                                intro={t.Intro}
                                                description={t.Description}
                                                benefits={t.Benefits}
                                                image1={t.Image1}
                                                image2={t.Image2}
                                                badge={`${t.Curcumin} Curcumin`}
                                                details={[
                                                    { label: 'Origin', value: t.Origin },
                                                    { label: 'Curcumin', value: t.Curcumin },
                                                ]}
                                            />
                                        ))}
                                    </RevealGroup>
                                </div>

                                {/* Red Chillies */}
                                <div className={panelClass(spiceTab === 'redchilli')}>
                                    <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-ink-muted">
                                        Journey through the diverse landscapes of India with our red
                                        chilli collection — each variety rated by its Scoville Heat Unit
                                        (SHU), so you can choose the spice level that suits your
                                        culinary adventures.
                                    </p>
                                    <RevealGroup className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
                                        {redChilliSpecs.map((c) => (
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
                                            />
                                        ))}
                                    </RevealGroup>
                                </div>

                                {/* Ginger / Cardamom / Black Pepper / Cumin — each its own always-mounted panel */}
                                {[
                                    { id: 'ginger', spice: singleSpices.Ginger },
                                    { id: 'cardamom', spice: singleSpices.Cardamom },
                                    { id: 'pepper', spice: singleSpices['Black Pepper'] },
                                    { id: 'cumin', spice: singleSpices.Cumin },
                                ].map(({ id, spice }) => (
                                    <div key={id} className={`mx-auto max-w-2xl ${panelClass(spiceTab === id)}`}>
                                        <p className="mb-8 text-center text-sm leading-relaxed text-ink-muted">
                                            {spice.Copy}
                                        </p>
                                        <ProductCard
                                            title={spice.Name}
                                            description={spice.Description}
                                            image1={spice.Image1}
                                            image2={spice.Image2}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Agro Products */}
                    <div className={`mx-auto max-w-3xl text-center ${panelClass(mainTab === 'agro')}`}>
                        <h3 className="font-display text-2xl text-ink sm:text-3xl">Agro Products</h3>
                        <p className="mt-4 text-base leading-relaxed text-ink-muted">
                            At SkyHarbour, our commitment to quality transcends spices. Our Agro Products
                            section presents a versatile range of nature's bounty — cereals and millets,
                            vegetables, edible oils, and protein-packed pulses, alongside herbal treasures
                            like Moringa leaves. Our Toor Dal proudly carries a GI tag.
                        </p>
                        <div className="mt-8 mx-auto max-w-xl">
                            <Carousel items={agroImages} />
                        </div>
                    </div>

                    {/* Biodegradable Products */}
                    <div className={`mx-auto max-w-3xl text-center ${panelClass(mainTab === 'bio')}`}>
                        <h3 className="font-display text-2xl text-ink sm:text-3xl">Bio-Degradable Cutlery</h3>
                        <p className="mt-4 text-base leading-relaxed text-ink-muted">
                            SkyHarbour's biodegradable cutlery collection is a response to an urgent global
                            need — crafted from areca leaves, sugarcane bagasse, coconut, and kraft paper.
                            It breaks down naturally, releasing no harmful toxins or microplastics.
                        </p>
                        <div className="mt-8 mx-auto max-w-xl">
                            <Carousel items={bioImages} />
                        </div>
                        <p className="mt-8 text-sm leading-relaxed text-ink-muted">
                            From spoons and forks to plates, salad bowls, coffee cups, and straws — our
                            range enhances your dining experience while contributing to a greener, more
                            sustainable world.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
