import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBRow,
    MDBCol,
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import './Products.css';
// import { color } from 'framer-motion';
// import Table from './Table.js'
import ProdCard from './ProdCard.js';
import TurmericCard from './TurmericCard';
import LakadongPowder from '../images/lakadong-powder.jpg';
import LakadongDried from '../images/lakadong-dried.jpg';
import YaingangPowder from '../images/yaingang-powder.jpg';
import YaingangDried from '../images/yaingang-dried.jpg';
import TangianPowder from '../images/ta-ngian-powder.jpg';
import TangianDried from '../images/ta-ngian-dried.jpg';
import SalemTurmeric from '../images/salem-turmeric.jpg';
import RedChilliCard from './RedChilliCard';
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

export default function Product() {
    const [fillActive, setFillActive] = useState('tab1');
    const [fillActiveSpices, setFillActiveSpices] = useState('Spicetab1');

    const handleFillClick = (value) => {
        if (value === fillActive) {
            return;
        }

        setFillActive(value);
    };


    const handleFillClickSpices = (value) => {
        if (value === fillActiveSpices) {
            return;
        }

        setFillActiveSpices(value);
    };
    //turmeric modal
    const [optSmModalTurmeric1, setOptSmModalTurmeric1] = useState(false);
    const [optSmModalTurmeric2, setOptSmModalTurmeric2] = useState(false);
    const [optSmModalTurmeric3, setOptSmModalTurmeric3] = useState(false);
    const [optSmModalTurmeric4, setOptSmModalTurmeric4] = useState(false);


    //redchillies modal
    const [optSmModalRedChilli1, setOptSmModalRedChilli1] = useState(false);
    const [optSmModalRedChilli2, setOptSmModalRedChilli2] = useState(false);
    const [optSmModalRedChilli3, setOptSmModalRedChilli3] = useState(false);


    //turmeric toggle
    const toggleShowTurmeric1 = () => setOptSmModalTurmeric1(!optSmModalTurmeric1);
    const toggleShowTurmeric2 = () => setOptSmModalTurmeric2(!optSmModalTurmeric2);
    const toggleShowTurmeric3 = () => setOptSmModalTurmeric3(!optSmModalTurmeric3);
    const toggleShowTurmeric4 = () => setOptSmModalTurmeric4(!optSmModalTurmeric4);


    //redchillies toggle
    const toggleShowRedChilli1 = () => setOptSmModalRedChilli1(!optSmModalRedChilli1);
    const toggleShowRedChilli2 = () => setOptSmModalRedChilli2(!optSmModalRedChilli2);
    const toggleShowRedChilli3 = () => setOptSmModalRedChilli3(!optSmModalRedChilli3);



    // const [showShow, setShowShow] = useState(false);
    // const [showShow2, setShowShow2] = useState(false);
    // const [showShow3, setShowShow3] = useState(false);

    // const toggleShowCollapse = () => setShowShow(!showShow);
    // const toggleShowCollapse2 = () => setShowShow2(!showShow2);
    // const toggleShowCollapse3 = () => setShowShow3(!showShow3);

    //generate specification for spices
    const SpiceSpecifications = [
        {
            "id": 1,
            "Name": "Ginger",
            "Description": "Our ginger is a zesty wonder, known for its distinctive aroma and bold taste. In addition to its culinary versatility, ginger is renowned for its potential health benefits. It's been used for centuries to ease digestive discomfort, reduce inflammation, and boost the immune system. Whether you're crafting a spicy stir-fry or soothing tea, our ginger adds depth to your dishes and supports your well-being.",
            "Image1": Ginger,
            "Image2": Ginger2,

        },
        {
            "id": 2,
            "Name": "Cardamom",
            "Description": "Our cardamom is a culinary delight, known for its bold flavor and aroma. Whether you're adding it to your favorite curry or brewing a cup of tea, our cardamom is a versatile ingredient that elevates your dishes. Plus, it's rich in antioxidants and nutrients, supporting your overall health and well-being.",
            "Image1": Cardamom1,
            "Image2": Cardamom2,
        },
        {
            "id": 3,
            "Name": "Black Pepper",
            "Description": "Our black pepper is a culinary delight, known for its bold flavor and aroma. Whether you're adding it to your favorite curry or brewing a cup of tea, our black pepper is a versatile ingredient that elevates your dishes. Plus, it's rich in antioxidants and nutrients, supporting your overall health and well-being.",
            "Image1": BlackPepper1,
            "Image2": BlackPepper2,
        },
        {
            "id": 4,
            "Name": "Cumin",
            "Description": "Our cumin is a culinary delight, known for its bold flavor and aroma. Whether you're adding it to your favorite curry or brewing a cup of tea, our cumin is a versatile ingredient that elevates your dishes. Plus, it's rich in antioxidants and nutrients, supporting your overall health and well-being.",
            "Image1": Cumin1,
            "Image2": Cumin2,
        },
    ];

    //generate specification for turmeric
    const TurmericSpecifications = [
        {
            "id": 1,
            "Name": "Lakadong Turmeric",
            "Curcumin": "6% - 9%",
            "Origin": "Meghalaya",
            "Intro": "The world's best with high curcumin content, perfect for home remedies and Ayurvedic marvels.",
            "Description": "This variety comes from Meghalaya and is considered to be the world’s best turmeric variety due to its very high curcumin content, which can range from 7-12%. It has a dark yellow colour and a pungent taste. It is used for making various home remedies and Ayurvedic medicines.",
            "Benefits": {
                "first": "Anti-Inflammatory: Aids in reducing inflammation in the body, potentially easing conditions like arthritis.",
                "second": "Powerful Antioxidant: Acts as a strong antioxidant, protecting cells from damage and supporting overall well-being.",
                "third": "Joint Health: Supports joint health and may alleviate joint pain and stiffness.",
                "fourth": "Digestive Aid: Helps with digestion and soothes digestive issues.",
            },
            "Image1": LakadongPowder,
            "Image2": LakadongDried,

        },
        {
            "id": 2,
            "Name": "Yaingang Turmeric",
            "Curcumin": "4% - 6%",
            "Origin": "Manipur",
            "Intro": "A golden treasure with gentle curcumin content, ideal for traditional remedies and culinary delights.",
            "Description": " From the picturesque landscapes of Manipur, Yaingang Turmeric is a cherished gem. This exceptional variety boasts a curcumin content ranging from 4 to 6%, making it a valuable addition to your pantry. With its warm, golden color and a gentle, earthy taste, Yaingang Turmeric has been a traditional choice for crafting home remedies and Ayurvedic medicines for generations. Embrace the potential of this golden treasure for both your wellness and culinary creations.",
            "Benefits": {
                "first": "Mild Flavor: With a gentle, earthy taste, it enhances a variety of dishes.",
                "second": "Antioxidant Power: Acts as an antioxidant, protecting against cell damage and supporting well-being.",
                "third": "Traditional Remedies: A popular choice for crafting traditional home remedies and Ayurvedic medicines.",
                "fourth": "Anti-Inflammatory: Aids in reducing inflammation and promoting joint health.",
            },
            "Image1": YaingangPowder,
            "Image2": YaingangDried,
        },
        {
            "id": 3,
            "Name": "Ta-ngian Turmeric",
            "Curcumin": "2% - 4%",
            "Origin": "Arunachal Pradesh",
            "Intro": "A unique spice from Arunachal Pradesh, offering mild yet distinctive flavors and potential health benefits.",
            "Description": "Grown in the lush valleys of Arunachal Pradesh, Tangian Turmeric is a unique treasure. With a curcumin content ranging from 2 to 4%, it offers a mild yet distinct flavor profile. Tangian Turmeric has been a culinary and medicinal staple in the region for generations. Its subtle, earthy taste complements a wide range of dishes, and it is prized for its potential health benefits, making it a delightful addition to traditional remedies and Ayurvedic practices.",
            "Benefits": {
                "first": "Wellness Potential: May provide various health benefits, making it a valuable addition to your diet.",
                "second": "Culinary Versatility: Enhances a wide range of dishes with its subtle, earthy taste.",
                "third": "Traditional Remedy: Used for generations in traditional remedies and Ayurvedic practices.",
                "fourth": "Distinct Flavor: Offers a mild and unique flavor profile.",
            },
            "Image1": TangianPowder,
            "Image2": TangianDried,
        },
        {
            "id": 4,
            "Name": "Salem Turmeric",
            "Curcumin": "2% - 5%",
            "Origin": "Salem - Tamil Nadu; Erode - Tamil Nadu; Sangli - Maharashtra; Rajapore - Maharashtra",
            "Intro": " Discover the mild and flavorful charm of this beloved spice from Tamil Nadu. This prestigious variety earned a Geographical Indication (GI) tag in 2019, highlighting its exceptional quality and heritage.",
            "Description": "These varieties come from Tamil Nadu and are widely used in cooking and medicine. They have a lighter yellow colour and a mild flavour. Erode turmeric is one of the most exported varieties of turmeric in India. Salem turmeric received a Geographical Indication (GI) tag in 2019, which means that it has a unique quality and reputation due to its origin. Rajapore and Sangli varieties come from Maharashtra and are also popular for export. They have a deep-orange colour and a strong aroma. Rajapore turmeric is preferred for making curry powder, while Sangli turmeric is often used for medicinal purposes. Sangli turmeric also received a GI tag in 2018",
            "Benefits": {
                "first": "Anti-Inflammatory: Aids in reducing inflammation in the body, potentially easing conditions like arthritis.",
                "second": "Powerful Antioxidant: Acts as a strong antioxidant, protecting cells from damage and supporting overall well-being.",
                "third": "Joint Health: Supports joint health and may alleviate joint pain and stiffness.",
                "fourth": "Digestive Aid: Helps with digestion and soothes digestive issues.",
            },
            "Image1": SalemTurmeric,
            "Image2": SalemTurmeric,
        },

    ]

    const RedChilliesSpecifications = [
        {
            "id": 1,
            "Name": "Byadgi Chilli",
            "Origin": "Karnataka",
            "Color": "Dark Red",
            "Flavour": "Mildly Spicy",
            "Pungency": "8000 - 12000 SHU",
            "Styles": "Whole, Powder",
            "Description": "Named after the town of Byadgi in Karnataka, this variety boasts a deep red color and a mild flavor, making it a less spicy alternative compared to other varieties. Its Scoville Heat Unit (SHU) ranges from 8,000 - 12,000, akin to the heat level of a Thai pepper. This mild yet flavorful chili is a versatile addition to your culinary adventures. It is used in making various spice blends and masalas.",
            "Intro": "A vibrant chili variety with a deep red hue and mild flavor, perfect for a touch of spice without the heat. Discover its versatility in various spice blends and masalas for a flavorful culinary journey.",
            "Image1": ByadgiDried1,
            "Image2": ByadgiDried2,

        },
        {
            "id": 2,
            "Name": "Guntur Chilli",
            "Origin": "Andhra Pradesh",
            "Color": "Bright Red",
            "Flavour": "Spicy",
            "Pungency": "35,000–40,000 SHU",
            "Styles": "Whole, Powder",
            "Description": "Hailing from the spice-rich Guntur district of Andhra Pradesh, this fiery variety, known as Sannam S4 or Capsicum annuum var. longum, boasts a dark red color and a pungent flavor, delivering a fiery and hot spice profile. With a Scoville Heat Unit (SHU) ranging from 35,000 to 40,000, it surpasses the heat level of cayenne pepper. Guntur Chilli is synonymous with the bold, spicy flavors that define the cuisine of Andhra Pradesh.",
            "Intro": "Spice up your culinary adventures with Guntur Chilli, known for its fiery heat and bold flavors. Straight from the spice hub of Andhra Pradesh, these dark red chilies pack a punch, elevating your dishes to a whole new level.",
            "Image1": GunturDried1,
            "Image2": GunturDried2,
        }
    ]
        ;


    return (
        <div id='productsection'>
            <div className='container'>
                <div class="text-center mb-5 mt-5">
                    <h1 data-aos="fade-up" data-aos-duration="1000" className='title px-5'>Explore Our Exquisite Products</h1>
                    <p data-aos="fade-up" data-aos-duration="1000" class="p-4 text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s mt-3 para">Explore our product showcase, where each flavor, color, and aroma narrates a tale of quality and authenticity. At SkyHarbour Impex, we're dedicated to presenting an extensive array of premium spices, agro products, and biodegradable goods. These selections redefine culinary experiences and promote sustainable living.</p>
                </div>

                <hr className='mb-5 w-50 mx-auto horiline' id='prodhr' />

                <MDBTabs data-aos="zoom-in" data-aos-duration="1000" fill className='mt-5 tab mx-3 mb-5'>
                    <MDBTabsItem className='proditem'>
                        <MDBTabsLink onClick={() => { handleFillClick('tab1'); }} active={fillActive === 'tab1'}>
                            Spices
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem className='proditem'>
                        <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
                            Agro Products
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem className='proditem'>
                        <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
                            Biodegradable Products
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent className=' mb-3  mx-3'>


                    {/*Spices*/}
                    <MDBTabsPane show={fillActive === 'tab1'}>
                        <div className='container mb-5 text-center'>
                            <h1 data-aos="fade-up" data-aos-duration="1000" className='title py-2 '>Spices</h1>
                            <p data-aos="fade-up" data-aos-duration="1000" class="text-base leading-relaxed xl:w-3/4 lg:w-3/4  text-gray-500s my-3 para prodpara mx-auto typing-demo">Welcome to our Spices section, where we unlock a world of flavor, color, and health benefits that only the finest spices can provide. At SkyHarbour, we pride ourselves on sourcing our spices directly from India's spice heartland, where age-old tradition seamlessly merges with uncompromised quality.<br /><br />

                                Our treasury of spices includes offerings from the lush <b>North-Eastern</b> corners to the vibrant <b>South of India</b>. Our connection with local farmers from the heart of South India ensures that every spice carries the authentic essence of the land.<br /><br />

                                Step into our Spice section, and you'll find treasures like our renowned turmeric, celebrated for its vibrant color and the potential health benefits it brings to your table. Joining the ensemble are fiery red chillies, adding a touch of excitement to your culinary creations. And let's not forget ginger, a versatile wonder that weaves its zesty charm through both your dishes and your wellness rituals.<br /><br />

                                We can provide lab test reports if required or on request, tailored to the specific guidelines and standards of your country, ensuring the quality and purity of our products. SkyHarbour is dedicated to offering comprehensive support for all your culinary endeavors, no matter where you are.<br /><br />

                                These spices are not just ingredients; they are the very soul of taste and health. Brought directly from the farms to your spice rack, each spice encapsulates the essence of its origin. Explore our Spice section and elevate your culinary creations to new heights with the authentic flavors of India's spice heartland.<br /><br />
                            </p>
                        </div>
                        <center>
                            <MDBTabs fill className='mb-3 mx-auto w-3/4'>
                                <MDBTabsItem fill>
                                    <MDBTabsLink onClick={() => handleFillClickSpices('Spicetab1')} active={fillActiveSpices === 'Spicetab1'}>
                                        Turmeric
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleFillClickSpices('Spicetab2')} active={fillActiveSpices === 'Spicetab2'}>
                                        Red Chillies
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleFillClickSpices('Spicetab3')} active={fillActiveSpices === 'Spicetab3'}>
                                        Ginger
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleFillClickSpices('Spicetab4')} active={fillActiveSpices === 'Spicetab4'}>
                                        Cardamom
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleFillClickSpices('Spicetab5')} active={fillActiveSpices === 'Spicetab5'}>
                                        Black Pepper
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleFillClickSpices('Spicetab6')} active={fillActiveSpices === 'Spicetab6'}>
                                        Cumin
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>
                        </center>


                        {/*Turmeric */}
                        <MDBTabsContent className='mt-4'>
                            <MDBTabsPane show={fillActiveSpices === 'Spicetab1'}>
                                <div className='container mb-5 text-center'>
                                    <h1 data-aos="fade-up" data-aos-duration="1000" className='title py-2'>Turmeric</h1>
                                    <p data-aos="fade-up" data-aos-duration="1000" class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s my-3 para prodpara typing-demo">Our premium turmeric collection features unique varieties, distinguished by their curcumin content. Hailing from the picturesque landscapes of North-East India, these turmeric varieties are joined by the iconic Finger Turmeric from the vibrant South.<br /><br />You can savor these golden treasures in sliced, dried, or powdered forms, each naturally grown without a trace of chemicals. Besides their captivating earthy flavor and vibrant color, turmeric is renowned for its remarkable health benefits. <br /><br />Rich in curcumin, a powerful antioxidant and anti-inflammatory compound, it bolsters joint health, aids digestion, and may even have positive effects on brain function. Elevate your culinary creations and well-being with the pure goodness of our turmeric.</p>
                                </div>
                                <hr className='mb-5 w-50 mx-auto horiline' id='prodhr' />

                                <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                                    <div className='container mb-4 text-center'>
                                        <h1 data-aos="fade-up" data-aos-duration="1000" className='title py-2 '>Northeast Turmeric Variety:</h1>
                                        <p data-aos="fade-up" data-aos-duration="1000" class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s my-3 para prodpara typing-demo">Discover the rich diversity of Northeast Indian turmeric with our carefully curated collection. This selection includes renowned varieties like Lakadong Turmeric, Yaingang Turmeric, and Ta-ngian Turmeric. Each of these turmeric varieties reflects the unique terroir of the Northeast, characterized by vibrant flavors and remarkable curcumin content.</p>
                                    </div>
                                    <MDBCol>
                                        <TurmericCard
                                            Title={TurmericSpecifications[0].Name}
                                            Origin={TurmericSpecifications[0].Origin}
                                            Curcumin={TurmericSpecifications[0].Curcumin}
                                            Intro={TurmericSpecifications[0].Intro}
                                            Description={TurmericSpecifications[0].Description}
                                            Benefits={TurmericSpecifications[0].Benefits}
                                            Image1={TurmericSpecifications[0].Image1}
                                            Image2={TurmericSpecifications[0].Image2}

                                            toggleShow={toggleShowTurmeric1}
                                            optSmModal={optSmModalTurmeric1}
                                            setOptSmModal={setOptSmModalTurmeric1}
                                        ></TurmericCard>
                                    </MDBCol>
                                    <MDBCol>
                                        <TurmericCard
                                            Title={TurmericSpecifications[1].Name}
                                            Origin={TurmericSpecifications[1].Origin}
                                            Curcumin={TurmericSpecifications[1].Curcumin}
                                            Intro={TurmericSpecifications[1].Intro}
                                            Description={TurmericSpecifications[1].Description}
                                            Benefits={TurmericSpecifications[1].Benefits}
                                            Image1={TurmericSpecifications[1].Image1}
                                            Image2={TurmericSpecifications[1].Image2}

                                            toggleShow={toggleShowTurmeric2}
                                            optSmModal={optSmModalTurmeric2}
                                            setOptSmModal={setOptSmModalTurmeric2}
                                        ></TurmericCard>
                                    </MDBCol>
                                    <MDBCol>
                                        <TurmericCard
                                            Title={TurmericSpecifications[2].Name}
                                            Origin={TurmericSpecifications[2].Origin}
                                            Curcumin={TurmericSpecifications[2].Curcumin}
                                            Intro={TurmericSpecifications[2].Intro}
                                            Description={TurmericSpecifications[2].Description}
                                            Benefits={TurmericSpecifications[2].Benefits}
                                            Image1={TurmericSpecifications[2].Image1}
                                            Image2={TurmericSpecifications[2].Image2}

                                            toggleShow={toggleShowTurmeric3}
                                            optSmModal={optSmModalTurmeric3}
                                            setOptSmModal={setOptSmModalTurmeric3}
                                        ></TurmericCard>
                                    </MDBCol>

                                    {/* </MDBRow> */}
                                    {/*Toggle */}
                                    {/* <center>
                                    <MDBBtn className='my-5 togBut p-3' tag='a' onClick={toggleShowCollapse3}>
                                        More

                                        <MDBIcon icon={showShow3 ? 'angle-up' : 'angle-down'} className='ms-2 arrow-icon' />
                                    </MDBBtn>
                                </center> */}
                                    {/* <MDBRow className='row-cols-1 row-cols-md-3 mt g-4'> */}


                                    <div className='container my-4 mt-5 text-center'>
                                        <h1 data-aos="fade-up" data-aos-duration="1000" className='title py-2 '>Salem Variety Turmeric:</h1>
                                        <p data-aos="fade-up" data-aos-duration="1000" class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s my-3 para prodpara typing-demo">Indulge in the unmistakable charm of Salem Variety Turmeric, originating from the heart of South India. This selection includes turmeric sourced from Erode, Rajapore, and Sangli. Notably, Salem Turmeric has been awarded the prestigious Geographical Indication (GI) tag in 2019, underlining its exceptional quality and regional distinctiveness. Whether you prefer the Northeast's vibrant curcumin-rich varieties or the time-honored flavors of Salem, our turmeric collection is a treasure trove waiting to elevate your culinary creations.</p>
                                    </div>
                                    <MDBCol>
                                        {/* <MDBCollapse show={showShow3}> */}
                                        <TurmericCard
                                            Title={TurmericSpecifications[3].Name}
                                            Origin={TurmericSpecifications[3].Origin}
                                            Curcumin={TurmericSpecifications[3].Curcumin}
                                            Intro={TurmericSpecifications[3].Intro}
                                            Description={TurmericSpecifications[3].Description}
                                            Benefits={TurmericSpecifications[3].Benefits}
                                            // Image={TurmericSpecifications[3].Image}
                                            Image1={TurmericSpecifications[3].Image1}
                                            Image2={TurmericSpecifications[3].Image2}

                                            toggleShow={toggleShowTurmeric4}
                                            optSmModal={optSmModalTurmeric4}
                                            setOptSmModal={setOptSmModalTurmeric4}
                                        ></TurmericCard>
                                        {/* </MDBCollapse> */}
                                    </MDBCol>


                                </MDBRow>
                            </MDBTabsPane>


                            {/*Red Chillies */}
                            <MDBTabsPane show={fillActiveSpices === 'Spicetab2'}>
                                <div className='container mb-5 text-center'>
                                    <h1 data-aos="fade-up" data-aos-duration="1000" className='title py-2'>Red Chillies</h1>
                                    <p data-aos="fade-up" data-aos-duration="1000" class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s my-3 para prodpara typing-demo">Journey through the diverse landscapes of India with our red chilli collection. From the spicy dishes of Andhra Pradesh, we bring you Guntur Chilli, known for its fiery heat and exported worldwide. Byadgi chilli, from the charming town of Byadgi in Karnataka, offers a milder, more flavorful experience.  <br /><br /> But what's unique is that each of these red chillies comes with a Scoville Heat Unit (SHU) rating, which measures their spiciness. Our range spans from the milder Byadgi chilli with an SHU of 50,000 to 100,000, similar to a Thai pepper, to the fiery Guntur Chilli with an SHU of 35,000 to 40,000, hotter than cayenne pepper. <br /><br /> So, explore the regions, experience the flavors, and choose the spice level that suits your culinary adventures.</p>
                                </div>
                                <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                                    <MDBCol>
                                        <RedChilliCard
                                            Title={RedChilliesSpecifications[0].Name}
                                            Origin={RedChilliesSpecifications[0].Origin}
                                            Color={RedChilliesSpecifications[0].Color}
                                            Intro={RedChilliesSpecifications[0].Intro}
                                            Description={RedChilliesSpecifications[0].Description}
                                            Flavour={RedChilliesSpecifications[0].Flavour}
                                            Pungency={RedChilliesSpecifications[0].Pungency}
                                            Styles={RedChilliesSpecifications[0].Styles}
                                            Image1={RedChilliesSpecifications[0].Image1}
                                            Image2={RedChilliesSpecifications[0].Image2}

                                            toggleShow={toggleShowRedChilli1}
                                            optSmModal={optSmModalRedChilli1}
                                            setOptSmModal={setOptSmModalRedChilli1}
                                        ></RedChilliCard>
                                    </MDBCol>
                                    <MDBCol>
                                        <RedChilliCard
                                            Title={RedChilliesSpecifications[1].Name}
                                            Origin={RedChilliesSpecifications[1].Origin}
                                            Color={RedChilliesSpecifications[1].Color}
                                            Intro={RedChilliesSpecifications[1].Intro}
                                            Description={RedChilliesSpecifications[1].Description}
                                            Flavour={RedChilliesSpecifications[1].Flavour}
                                            Pungency={RedChilliesSpecifications[1].Pungency}
                                            Styles={RedChilliesSpecifications[1].Styles}
                                            Image1={RedChilliesSpecifications[1].Image1}
                                            Image2={RedChilliesSpecifications[1].Image2}

                                            toggleShow={toggleShowRedChilli2}
                                            optSmModal={optSmModalRedChilli2}
                                            setOptSmModal={setOptSmModalRedChilli2}
                                        ></RedChilliCard>
                                    </MDBCol>

                                </MDBRow>

                            </MDBTabsPane>

                            {/*Ginger  */}
                            <MDBTabsPane show={fillActiveSpices === 'Spicetab3'}>
                                <div className='container mb-5 text-center'>
                                    <h1 data-aos="fade-up" data-aos-duration="1000" className='title py-2'>Ginger</h1>
                                    <p data-aos="fade-up" data-aos-duration="1000" class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s my-3 para prodpara typing-demo">
                                        Our ginger collection is a celebration of the spice's versatility. From the iconic Cochin Ginger, known for its pungent aroma and flavor, to the milder, more delicate varieties, our ginger collection offers a range of options to suit your culinary needs. <br /><br />Whether you're adding a zesty kick to your stir-fry or brewing a cup of ginger tea, our ginger collection is a must-have for every spice lover. <br /><br />Besides its culinary uses, ginger is also renowned for its potential health benefits. Rich in antioxidants, it supports your immune system and overall well-being. So, explore our ginger collection and add a zesty touch to your culinary creations and wellness rituals.</p>
                                </div>
                                {/* <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                                    <MDBCol> */}
                                <div className='xl:w-2/4 lg:w-3/4 mx-auto mb-5'>
                                    <ProdCard
                                        Title={SpiceSpecifications[0].Name}
                                        Description={SpiceSpecifications[0].Description}
                                        Image1={SpiceSpecifications[0].Image1}
                                        Image2={SpiceSpecifications[0].Image2}

                                    ></ProdCard>
                                </div>
                                {/* </MDBCol>
                                </MDBRow> */}

                            </MDBTabsPane>

                            {/*Cardamom  */}
                            <MDBTabsPane show={fillActiveSpices === 'Spicetab4'}>
                                <div className='container mb-5 text-center'>
                                    <h1 data-aos="fade-up" data-aos-duration="1000" className='title py-2'>Cardamom</h1>
                                    <p data-aos="fade-up" data-aos-duration="1000" class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s my-3 para prodpara typing-demo">
                                        Our Cardamom Collection brings the exquisite fragrance and flavor of this spice right to your kitchen. With a range of varieties to choose from, you can experience the distinct profiles of cardamom, from the bold and aromatic to the subtly sweet Cardamom. <br /><br /> Whether you're spicing up your desserts or curries, our collection has the perfect cardamom for your culinary creations. Beyond its culinary charm, cardamom is also known for its potential health benefits.  <br /><br />Packed with antioxidants, it supports digestion and adds a delightful touch to your well-being. Explore our Cardamom Collection and elevate your dishes and wellness routines.</p>
                                </div>
                                <div className='xl:w-2/4 lg:w-3/4 mx-auto mb-5'>
                                    <ProdCard
                                        Title={SpiceSpecifications[1].Name}
                                        Description={SpiceSpecifications[1].Description}
                                        Image1={SpiceSpecifications[1].Image1}
                                        Image2={SpiceSpecifications[1].Image2}

                                    ></ProdCard>
                                </div>

                            </MDBTabsPane>

                            {/*Black Pepper  */}
                            <MDBTabsPane show={fillActiveSpices === 'Spicetab5'}>
                                <div className='container mb-5 text-center'>
                                    <h1 data-aos="fade-up" data-aos-duration="1000" className='title py-2'>Black Pepper</h1>
                                    <p data-aos="fade-up" data-aos-duration="1000" class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s my-3 para prodpara typing-demo">
                                        Dive into the bold world of pepper with our Black Pepper Collection. Known for its strong and pungent flavor, black pepper is a staple in kitchens worldwide. Our collection boasts a diverse range of black pepper varieties. Whether you're seasoning your steaks or soups, this collection has you covered. <br /><br />Aside from its culinary uses, black pepper is celebrated for potential health benefits, including its role as a digestion aid and antioxidant-rich properties. So, enhance your culinary experiences and well-being with our Black Pepper Collection.</p>
                                </div>
                                <div className='xl:w-2/4 lg:w-3/4 mx-auto mb-5'>
                                    <ProdCard
                                        Title={SpiceSpecifications[2].Name}
                                        Description={SpiceSpecifications[2].Description}
                                        Image1={SpiceSpecifications[2].Image1}
                                        Image2={SpiceSpecifications[2].Image2}

                                    ></ProdCard>
                                </div>

                            </MDBTabsPane>

                            {/*Cumin  */}
                            <MDBTabsPane show={fillActiveSpices === 'Spicetab6'}>
                                <div className='container mb-5 text-center'>
                                    <h1 data-aos="fade-up" data-aos-duration="1000" className='title py-2'>Cumin</h1>
                                    <p data-aos="fade-up" data-aos-duration="1000" class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s my-3 para prodpara typing-demo">
                                        Our Cumin Collection is a testament to the warm and earthy aroma that cumin brings to your dishes. With vibrant varieties, you can explore a spectrum of flavors. Whether you're seasoning your curries or soups, our collection has the perfect cumin variety for your culinary adventures. <br /><br />Additionally, cumin is well-regarded for its potential health benefits. Rich in antioxidants, it supports digestion and overall wellness. Dive into our Cumin Collection and infuse the authentic essence of cumin into your culinary creations and wellness rituals.</p>
                                </div>
                                <div className='xl:w-2/4 lg:w-3/4 mx-auto mb-5'>
                                    <ProdCard
                                        Title={SpiceSpecifications[3].Name}
                                        Description={SpiceSpecifications[3].Description}
                                        Image1={SpiceSpecifications[3].Image1}
                                        Image2={SpiceSpecifications[3].Image2}

                                    ></ProdCard>
                                </div>

                            </MDBTabsPane>
                        </MDBTabsContent>
                    </MDBTabsPane>

                    {/*Agro Products */}
                    <MDBTabsPane show={fillActive === 'tab2'}>
                        <div className='container mb-5 text-center'>
                            <h1 data-aos="fade-up" data-aos-duration="1000" className='title py-2'>Agro Products</h1>
                            <p data-aos="fade-up" data-aos-duration="1000" class="text-base leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto text-gray-500s my-3 para prodpara typing-demo">
                                At SkyHarbour, our commitment to quality transcends spices. Our Agro Products section presents a versatile range of nature's bounty. From hearty cereals and nourishing millets like Foxnut, Rice, and Maize to an array of vibrant vegetables including Onions, Babycorn, Mushrooms, and Broccoli, we've curated a selection that reflects the richness of the soil.<br /><br />

                                To complete your culinary journey, we offer a selection of Edible Oils including Soybean, Sunflower, and Palm oil. Our range extends to include protein-packed Pulses such as Toor Dal, Bengal Gram, and many more, ensuring that your pantry is stocked with only the finest. Additionally, our Toor Dal boasts a prestigious GI tag, signifying its unique quality and heritage.<br /><br />

                                Every product in this section is a testament to our unwavering dedication to quality and authenticity. Sourced directly from the heartland of agriculture, each item embodies the essence of our commitment to your dining experience.<br /><br />

                                Coming to health products, we take pride in introducing our herbal treasures, including the illustrious Moringa leaves. Grown naturally, these vibrant leaves are brimming with an array of nutritional benefits. Harvested at their nutritional peak, our Moringa leaves are meticulously processed to bring you their purest essence. Unleash the potential of nature's bounty with our Moringa leaves and elevate your journey to well-being.<br /><br />

                                From cereals to oils, vegetables to pulses, our Agro Products section is your gateway to the freshest and finest in every category. Discover the true taste of nature with SkyHarbour Impex.</p>
                        </div>
                        <MDBCarousel showControls showIndicators dark className='xl:w-1/2 md:w-3/4 mx-auto'>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={1}
                                src={Rice}
                                alt='bowl of rice grains'
                            >

                            </MDBCarouselItem>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={2}
                                src={FoxNut}
                                alt='white bowl containing foxnuts'
                            >

                            </MDBCarouselItem>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={3}
                                src={Maize}
                                alt='corn and corn kernels on a wooden table'
                            >
                            </MDBCarouselItem>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={4}
                                src={Soyabean}
                                alt='sa bag of soyabeans and a spoon on a wooden table'
                            >
                            </MDBCarouselItem>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={5}
                                src={TurDal}
                                alt='turdal in a white bowl'
                            >
                            </MDBCarouselItem>

                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={6}
                                src={BabyCorn}
                                alt='several white baby corns'
                            >
                            </MDBCarouselItem>

                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={7}
                                src={Mushroom}
                                alt='two mushrooms'
                            >
                            </MDBCarouselItem>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={7}
                                src={Moringa1}
                                alt='a bowl of powdered moringa leaves'
                            >
                            </MDBCarouselItem>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={7}
                                src={Moringa2}
                                alt='moringa leaves and a bowl of powdered moringa leaves'
                            >
                            </MDBCarouselItem>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={7}
                                src={Moringa3}
                                alt='bowl and spoon of powdered moringa leaves'
                            >
                            </MDBCarouselItem>
                        </MDBCarousel>
                    </MDBTabsPane>


                    {/*Bio-Degradable Cutlery */}
                    <MDBTabsPane show={fillActive === 'tab3'}>
                        <div className='container mb-5 text-center'>
                            <h1 data-aos="fade-up" data-aos-duration="1000" className='title py-2'>Bio-Degradable Cutlery</h1>
                            <p data-aos="fade-up" data-aos-duration="1000" class="text-base leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto text-gray-500s my-3 para prodpara typing-demo">
                                SkyHarbour's biodegradable cutlery collection stands as a testament to our profound connection with the environment. This collection is not just about the elegance of design or the practicality of its use; it's a response to an urgent global need.<br /><br />

                                In a world straining under the weight of plastic waste, our biodegradable cutlery offers a lifeline to the environment. It's vital for reducing the pollution that has marred our landscapes, waterways, and oceans. With every bite you take or every meal you serve, you become an active participant in environmental preservation.<br /><br />

                                The importance of this biodegradable collection lies in its ability to break down naturally, unlike plastics which persist for centuries. As it decomposes, it releases no harmful toxins or microplastics, leaving behind nothing but organic matter. By choosing this eco-friendly option, you're making a statement, saying no to a future littered with plastic waste.<br /><br />

                                Our edible cutlery further exemplifies our commitment to a sustainable, eco-friendly future. These unique products not only reduce plastic pollution but also introduce the concept of an entirely edible alternative that serves both human and animal needs. It's a remarkable intersection of sustainability and innovation, giving you the power to make a positive impact with every meal.<br /><br />

                                Explore our biodegradable collection, and with each piece you choose, you're not just setting your table; you're setting the stage for a cleaner, healthier planet.</p>
                        </div>
                        <MDBCarousel showControls showIndicators dark className='w-1/2 mx-auto'>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={1}
                                src={BioCup}
                                alt='...'
                            >

                            </MDBCarouselItem>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={2}
                                src={Areca}
                                alt='...'
                            >

                            </MDBCarouselItem>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={3}
                                src={KraftPaper}
                                alt='...'
                            >
                            </MDBCarouselItem>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={4}
                                src={Coconut}
                                alt='...'
                            >
                            </MDBCarouselItem>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={5}
                                src={Disposable}
                                alt='...'
                            >
                            </MDBCarouselItem>
                        </MDBCarousel>
                        <div className='container my-5 text-center'>
                            <p data-aos="fade-up" data-aos-duration="1000" class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s my-3 para prodpara typing-demo">
                                At SkyHarbour, we take pride in presenting a diverse and eco-friendly product line that transcends traditional cutlery. Our assortment includes a wide array of items crafted from nature's finest materials such as areca leaves, sugarcane bagasse, coconut-based, and kraft paper-based products.<br /><br />

                                These sustainable solutions go far beyond the basics. Our collection spans from spoons and forks to robust plates and salad bowls, catering to all your dining requirements. Whether you're enjoying a meal on the move or hosting small parties, catering events, weddings, or special occasions, our biodegradable options seamlessly blend convenience and environmental responsibility.<br /><br />

                                For those coffee enthusiasts, our eco-conscious coffee cups and straws are the perfect companions. Our product range extends further to offer you a vast selection of sustainable choices that not only enhance your dining experience but also contribute to a greener, more sustainable world.
                            </p>
                        </div>
                    </MDBTabsPane>
                </MDBTabsContent>
            </div>
        </div>
    );
}