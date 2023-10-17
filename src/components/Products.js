import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBCollapse,
    MDBIcon,

} from 'mdb-react-ui-kit';
import './Products.css';
// import { color } from 'framer-motion';
// import Table from './Table.js'
import ProdCard from './ProdCard.js';
import TurmericCard from './TurmericCard';
import Turmeric from '../images/turmeric-powder.jpg';
import RedChillies from '../images/red-chili-peppers.jpg';
import RedChilliCard from './RedChilliCard';
import Ginger from '../images/ginger.jpg';
import Oranges from '../images/oranges.jpg';
import Pomegranate from '../images/pomegranate.jpg';
import Grapes from '../images/grapes.jpg';
import Apples from '../images/apples.jpg';
import Broccoli from '../images/broccoli.jpg';
import Mushroom from '../images/mushroom.jpg';
import Capsicum from '../images/ColourCapsicum.jpg';
import BabyCorn from '../images/babycorn.jpg';

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
    const [optSmModalTurmeric5, setOptSmModalTurmeric5] = useState(false);
    const [optSmModalTurmeric6, setOptSmModalTurmeric6] = useState(false);

    //redchillies modal
    const [optSmModalRedChilli1, setOptSmModalRedChilli1] = useState(false);
    const [optSmModalRedChilli2, setOptSmModalRedChilli2] = useState(false);
    const [optSmModalRedChilli3, setOptSmModalRedChilli3] = useState(false);

    //ginger modal
    const [optSmModalGinger1, setOptSmModalGinger1] = useState(false);
    const [optSmModalGinger2, setOptSmModalGinger2] = useState(false);


    //fruits modal
    const [optSmModalFruit1, setOptSmModalFruit1] = useState(false);
    const [optSmModalFruit2, setOptSmModalFruit2] = useState(false);
    const [optSmModalFruit3, setOptSmModalFruit3] = useState(false);
    const [optSmModalFruit4, setOptSmModalFruit4] = useState(false);

    //vegetable modal
    const [optSmModalVegetable1, setOptSmModalVegetable1] = useState(false);
    const [optSmModalVegetable2, setOptSmModalVegetable2] = useState(false);
    const [optSmModalVegetable3, setOptSmModalVegetable3] = useState(false);
    const [optSmModalVegetable4, setOptSmModalVegetable4] = useState(false);



    //turmeric toggle
    const toggleShowTurmeric1 = () => setOptSmModalTurmeric1(!optSmModalTurmeric1);
    const toggleShowTurmeric2 = () => setOptSmModalTurmeric2(!optSmModalTurmeric2);
    const toggleShowTurmeric3 = () => setOptSmModalTurmeric3(!optSmModalTurmeric3);
    const toggleShowTurmeric4 = () => setOptSmModalTurmeric4(!optSmModalTurmeric4);
    const toggleShowTurmeric5 = () => setOptSmModalTurmeric5(!optSmModalTurmeric5);
    const toggleShowTurmeric6 = () => setOptSmModalTurmeric6(!optSmModalTurmeric6);


    //redchillies toggle
    const toggleShowRedChilli1 = () => setOptSmModalRedChilli1(!optSmModalRedChilli1);
    const toggleShowRedChilli2 = () => setOptSmModalRedChilli2(!optSmModalRedChilli2);
    const toggleShowRedChilli3 = () => setOptSmModalRedChilli3(!optSmModalRedChilli3);

    //ginger toggle
    const toggleShowGinger1 = () => setOptSmModalGinger1(!optSmModalGinger1);
    const toggleShowGinger2 = () => setOptSmModalGinger2(!optSmModalGinger2);

    //fruits toggle
    const toggleShowFruit1 = () => setOptSmModalFruit1(!optSmModalFruit1);
    const toggleShowFruit2 = () => setOptSmModalFruit2(!optSmModalFruit2);
    const toggleShowFruit3 = () => setOptSmModalFruit3(!optSmModalFruit3);
    const toggleShowFruit4 = () => setOptSmModalFruit4(!optSmModalFruit4);

    //vegetables toggle
    const toggleShowVegetable1 = () => setOptSmModalVegetable1(!optSmModalVegetable1);
    const toggleShowVegetable2 = () => setOptSmModalVegetable2(!optSmModalVegetable2);
    const toggleShowVegetable3 = () => setOptSmModalVegetable3(!optSmModalVegetable3);
    const toggleShowVegetable4 = () => setOptSmModalVegetable4(!optSmModalVegetable4);




    const [showShow, setShowShow] = useState(false);
    const [showShow2, setShowShow2] = useState(false);
    const [showShow3, setShowShow3] = useState(false);

    const toggleShowCollapse = () => setShowShow(!showShow);
    const toggleShowCollapse2 = () => setShowShow2(!showShow2);
    const toggleShowCollapse3 = () => setShowShow3(!showShow3);

    const FruitSpecifications = [
        {
            "id": 1,
            "Name": "Apple",
            "Nutrients": {
                "Calories": 159,
                "Carbs": 6,
                "Fiber": 2,
            },
            "Vitamins": "Vitamin A, Vitamin C",
            "Proteins": "0.3g/100g",
            "Fats": "0.4g/100g",
            "Description": "Crisp and refreshing, our apples are a quintessential fruit experience. Bursting with natural sweetness and a touch of tartness, each bite is a delightful journey through orchards kissed by the sun. Perfect for snacking or adding a crisp crunch to your favorite recipes, our apples are not only delicious but also packed with fiber and vitamins, making them a wholesome choice for your health.",
            "Image": Apples,

        },
        {
            "id": 2,
            "Name": "Orange",
            "Nutrients": {
                "Calories": 47,
                "Carbs": 12,
                "Fiber": 2,
            },
            "Vitamins": "Vitamin A, Vitamin C",
            "Proteins": "0.9g/100g",
            "Fats": "0.1g/100g",
            "Description": "Our oranges are a burst of sunshine in every bite that you take. Juicy, tangy, and packed with vitamin C, they invigorate your taste buds and boost your immune system. Whether you're savoring them as a healthy snack or transforming them into freshly squeezed juice, our oranges are a zesty delight that supports your well-being in the long run.",
            "Image": Oranges,
        },
        {
            "id": 3,
            "Name": "Pomegranate",
            "Nutrients": {
                "Calories": 83,
                "Carbs": 18,
                "Fiber": 4,
            },
            "Vitamins": "Vitamin A, Vitamin C",
            "Proteins": "1.7g/100g",
            "Fats": "1.2g/100g",
            "Description": "Experience the exotic allure of our pomegranates. Each jewel-like aril is a burst of sweet and tart flavor, loaded with antioxidants and nutrients. Whether you sprinkle them on salads, blend them into smoothies, or enjoy them on their own, our pomegranates not only tantalize your palate but also promote heart health and provide a wealth of essential nutrients.",
            "Image": Pomegranate,
        },
        {
            "id": 4,
            "Name": "Grapes",
            "Nutrients": {
                "Calories": 69,
                "Carbs": 18,
                "Fiber": 1,
            },
            "Vitamins": "Vitamin A, Vitamin C",
            "Proteins": "0.7g/100g",
            "Fats": "0.4g/100g",
            "Description": " Plump, juicy, and irresistible, our grapes are a timeless classic. Bursting with natural sugars and a hint of earthiness, they're the perfect snack for all occasions. Whether you're enjoying them fresh, or incorporating them into your culinary creations, our grapes are a celebration of vineyard perfection. Plus, they're rich in antioxidants, supporting your overall health and well-being.",
            "Image": Grapes,
        },

    ];

    //generate specification for spices
    const SpiceSpecifications = [
        {
            "id": 1,
            "Name": "Lakadong Turmeric",
            "Circumin": "6% - 9%",
            "Nutrients": {
                "Calories": 354,
                "Carbs": 65,
                "Fiber": 21,
            },
            "Vitamins": "Vitamin A, Vitamin C",
            "Proteins": "7.8g/100g",
            "Fats": "9.9g/100g",
            "Description": "Our premium turmeric comes in three varieties, varying in curcumin content, sourced from Meghalaya, Arunachal, Manipur, and Nagaland. Available in sliced, dried, and powdered forms, it's 100% naturally grown without any chemical traces. Beyond its rich earthy flavor and vibrant color, turmeric is known for its potential health benefits. Rich in curcumin, an antioxidant and anti-inflammatory compound, it supports joint health, aids digestion, and may have positive effects on brain function. Enhance your dishes and well-being with our pure turmeric.",
            "Image": Turmeric
        },
        {
            "id": 2,
            "Name": "Red Chillies",
            "Nutrients": {
                "Calories": 40,
                "Carbs": 9,
                "Fiber": 2,
            },
            "Vitamins": "Vitamin A, Vitamin C",
            "Proteins": "1.9g/100g",
            "Fats": "0.4g/100g",
            "Description": "Spice up your culinary adventures with our red chillies. Their fiery heat adds excitement to dishes from around the world. But there's more to them than just their spicy kick. Red chillies are a source of capsaicin, a compound known for its metabolism-boosting properties and potential pain relief. Discover the thrill of flavor and health with our red chillies.",
            "Image": RedChillies

        },
        {
            "id": 3,
            "Name": "Ginger",
            "Nutrients": {
                "Calories": 80,
                "Carbs": 18,
                "Fiber": 2,
            },
            "Vitamins": "Vitamin A, Vitamin C",
            "Proteins": "1.8g/100g",
            "Fats": "0.8g/100g",
            "Description": "Our ginger is a zesty wonder, known for its distinctive aroma and bold taste. In addition to its culinary versatility, ginger is renowned for its potential health benefits. It's been used for centuries to ease digestive discomfort, reduce inflammation, and boost the immune system. Whether you're crafting a spicy stir-fry or soothing tea, our ginger adds depth to your dishes and supports your well-being.",
            "Image": Ginger

        }
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
            "Image": Turmeric
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
            "Image": Turmeric
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
            "Image": Turmeric
        },
        {
            "id": 4,
            "Name": "Alleppey Finger Turmeric",
            "Curcumin": "5%",
            "Origin": "Kerala",
            "Intro": "Renowned for its vibrant yellow hue and strong anti-inflammatory properties, it's your culinary and wellness companion.",
            "Description": "From Kerala, this vibrant variety is celebrated for its high curcumin content, which grants it a bright yellow hue and strong anti-inflammatory properties. With about 5% curcumin, it surpasses most other varieties, offering both culinary and wellness potential.",
            "Benefits": {
                "first": "Anticancer: Curcumin has been shown to have anticancer properties. It can help to kill cancer cells and prevent the growth of new tumors.",
                "second": "Cardioprotective: Curcumin c3n help to protect the heart from disease. It can lower cholesterol levels, improve blood circulation, and reduce inflammation.",
                "third": "Neuroprotective: It can improve cognitive function and reduce the risk of developing Alzheimer's disease and other neurodegenerative disorders.",
                "fourth": "Anti-inflammatory:  It can help to reduce inflammation throughout the body, which can be beneficial for a variety of conditions, including arthritis, asthma, and inflammatory bowel disease.",
            },
        },
        {
            "id": 5,
            "Name": "Erode and Salem Turmeric",
            "Curcumin": "3% - 4%",
            "Origin": "Tamil Nadu",
            "Intro": " Erode, one of India's most exported turmeric varieties, and Salem, with a prestigious Geographical Indication (GI) tag in 2019, promising unique quality and reputation.",
            "Description": "These varieties come from Tamil Nadu and are widely used in cooking and medicine. They have a lighter yellow colour and a mild flavour. Erode turmeric is one of the most exported varieties of turmeric in India. Salem turmeric received a Geographical Indication (GI) tag in 2019, which means that it has a unique quality and reputation due to its origin.",
            "Benefits": {
                "first": "Anti-Inflammatory: Aids in reducing inflammation in the body, potentially easing conditions like arthritis.",
                "second": "Powerful Antioxidant: Acts as a strong antioxidant, protecting cells from damage and supporting overall well-being.",
                "third": "Joint Health: Supports joint health and may alleviate joint pain and stiffness.",
                "fourth": "Digestive Aid: Helps with digestion and soothes digestive issues.",
            },
        },
        {
            "id": 6,
            "Name": "Rajapore and Sangli Turmeric",
            "Curcumin": "3% - 4.5%",
            "Origin": "Maharashtra",
            "Intro": "Hailing from Maharashtra, these varieties are renowned for their deep-orange hue and robust aroma, are favored for exports.",
            "Description": "These varieties come from Maharashtra and are also popular for export. They have a deep-orange colour and a strong aroma. Rajapore turmeric is preferred for making curry powder, while Sangli turmeric is often used for medicinal purposes. Sangli turmeric also received a GI tag in 2018",
            "Benefits": {
                "first": "Geographical Indication (GI): Sangli Turmeric received a prestigious GI tag in 2018, signifying its unique quality and reputation due to its origin.",
                "second": "Deep-Orange Color: Adds a rich and vibrant hue to dishes, enhancing their visual appeal.",
                "third": "Culinary Excellence: Rajapore is preferred for making curry powder, elevating the taste of various dishes.",
                "fourth": "Digestive Aid: Helps with digestion and soothes digestive issues.",
            },

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
            "Description": "Named after the town of Byadgi in Karnataka, this variety boasts a deep red color and a mild flavor, making it a less spicy alternative compared to other varieties. Its Scoville Heat Unit (SHU) ranges from 50,000 to 100,000, akin to the heat level of a Thai pepper. This mild yet flavorful chili is a versatile addition to your culinary adventures. It is used in making various spice blends and masalas.",
            "Intro": "A vibrant chili variety with a deep red hue and mild flavor, perfect for a touch of spice without the heat. Discover its versatility in various spice blends and masalas for a flavorful culinary journey.",
            "Image": RedChillies

        },
        {
            "id": 2,
            "Name": "Guntur Chilli",
            "Origin": "Andhra Pradesh",
            "Color": "Bright Red",
            "Flavour": "Spicy",
            "Pungency": "8000 - 12000 SHU",
            "Styles": "Whole, Powder",
            "Description": "Hailing from the spice-rich Guntur district of Andhra Pradesh, this fiery variety, known as Sannam S4 or Capsicum annuum var. longum, boasts a dark red color and a pungent flavor, delivering a fiery and hot spice profile. With a Scoville Heat Unit (SHU) ranging from 35,000 to 40,000, it surpasses the heat level of cayenne pepper. Guntur Chilli is synonymous with the bold, spicy flavors that define the cuisine of Andhra Pradesh.",
            "Intro": "Spice up your culinary adventures with Guntur Chilli, known for its fiery heat and bold flavors. Straight from the spice hub of Andhra Pradesh, these dark red chilies pack a punch, elevating your dishes to a whole new level.",
            "Image": RedChillies
        }
    ]

    //generate specification for vegetables
    const VegetableSpecifications = [
        {
            "id": 1,
            "Name": "Colour Capsicum",
            "Nutrients": {
                "Calories": 77,
                "Carbs": 17,
                "Fiber": 2,
            },
            "Vitamins": "Vitamin A, Vitamin C",
            "Proteins": "2g/100g",
            "Fats": "0.1g/100g",
            "Description": "Our capsicums are a colorful addition to your culinary creations. Bursting with flavor and nutrients, they're a versatile ingredient that adds a pop of color to your dishes. Whether you're roasting them to perfection or adding them to your favorite stir-fry, our capsicums are a celebration of freshness and flavor. Plus, they're rich in antioxidants, supporting your overall health and well-being.",
            "Image": Capsicum,

        },
        {
            "id": 2,
            "Name": "Mushroom",
            "Nutrients": {
                "Calories": 40,
                "Carbs": 9,
                "Fiber": 2,
            },
            "Vitamins": "Vitamin A, Vitamin C",
            "Proteins": "1.1g/100g",
            "Fats": "0.1g/100g",
            "Description": "Our mushrooms are a culinary delight, known for their earthy flavor and meaty texture. Whether you're adding them to your favorite pasta or sautéing them with garlic and herbs, our mushrooms are a versatile ingredient that elevates your dishes. Plus, they're rich in antioxidants and nutrients, supporting your overall health and well-being."
            ,
            "Image": Mushroom,
        },
        {
            "id": 3,
            "Name": "Broccoli",
            "Nutrients": {
                "Calories": 34,
                "Carbs": 7,
                "Fiber": 3,
            },
            "Vitamins": "Vitamin A, Vitamin C",
            "Proteins": "2.8g/100g",
            "Fats": "0.4g/100g",
            "Description": "Crisp and vibrant, our broccoli is a nutritional powerhouse. Bursting with vitamins, minerals, and antioxidants, it's a green gem that adds a healthy crunch to your plate. Whether you steam it, roast it, or toss it into your favorite stir-fry, our broccoli supports your immune system and overall well-being, making it a must-have for health-conscious foodies.",
            "Image": Broccoli,
        },
        {
            "id": 4,
            "Name": "Baby Corn",
            "Nutrients": {
                "Calories": 25,
                "Carbs": 5,
                "Fiber": 2,
            },
            "Vitamins": "Vitamin A, Vitamin C",
            "Proteins": "1.9g/100g",
            "Fats": "0.3g/100g",
            "Description": "Our baby corn is a culinary delight, known for its delicate flavor and tender texture. Whether you're adding it to your favorite stir-fry or tossing it into a salad, our baby corn is a versatile ingredient that adds a healthy crunch to your dishes. Plus, it's rich in antioxidants and nutrients, supporting your overall health and well-being.",
            "Image": BabyCorn,
        }

    ];


    return (
        <div id='productsection'>
            <div className='container'>
                <div class="text-center mb-5 mt-5">
                    <h1 data-aos="fade-up" data-aos-duration="1000" className='title px-5'>Explore Our Exquisite Products</h1>
                    <p data-aos="fade-up" data-aos-duration="1000" class="p-4 text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s mt-3 para">Welcome to our product showcase where every flavor, color, and aroma tells a story of quality and authenticity. At SkyHarbour Impex, we take immense pride in offering a diverse range of premium spices, vegetables, and fruits that redefine culinary experiences.</p>
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
                            Vegetables
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem className='proditem'>
                        <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
                            Fruits
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem className='proditem'>
                        <MDBTabsLink onClick={() => handleFillClick('tab4')} active={fillActive === 'tab4'}>
                            Bio-Degradable Cutlery
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent className=' mb-3  mx-3'>
                    <MDBTabsPane show={fillActive === 'tab3'}>
                        <div className='container mb-5 text-center'>
                            <h1 data-aos="fade-up" data-aos-duration="1000" className='title py-2'>Fruits</h1>
                            <p data-aos="fade-up" data-aos-duration="1000" class="text-base leading-relaxed xl:w-2/4 lg:w-3/4  text-gray-500s my-3 para prodpara mx-auto typing-demo">Welcome to SkyHarbour's bountiful Fruits section, where nature's finest offerings await your indulgence. Our commitment to delivering the freshest and most exquisite fruits is unwavering.<br /><br />Sourced directly from sun-kissed farms, our fruits, including juicy oranges bursting with vitamin C, crisp apples that redefine freshness, and exotic pomegranates filled with antioxidants, are a celebration of nature's bounty. <br /><br />Each bite is not only a journey through flavor but also a step towards a healthier you. Join us in savoring these irresistible treasures brought right from the farms to your table.</p>
                        </div>
                        <MDBRow className='row-cols-1 row-cols-md-3 mt g-4 prodrow'>
                            <MDBCol className='prodcol flex'>
                                <ProdCard
                                    Title={FruitSpecifications[0].Name}
                                    Nutrients={FruitSpecifications[0].Nutrients}
                                    Vitamins={FruitSpecifications[0].Vitamins}
                                    Proteins={FruitSpecifications[0].Proteins}
                                    Fats={FruitSpecifications[0].Fats}
                                    Description={FruitSpecifications[0].Description}
                                    Image={FruitSpecifications[0].Image}
                                    toggleShow={toggleShowFruit1}
                                    optSmModal={optSmModalFruit1}
                                    setOptSmModal={setOptSmModalFruit1}
                                ></ProdCard>
                            </MDBCol>
                            <MDBCol className='prodcol flex'>
                                <ProdCard
                                    Title={FruitSpecifications[1].Name}
                                    Nutrients={FruitSpecifications[1].Nutrients}
                                    Vitamins={FruitSpecifications[1].Vitamins}
                                    Proteins={FruitSpecifications[1].Proteins}
                                    Fats={FruitSpecifications[1].Fats}
                                    Description={FruitSpecifications[1].Description}
                                    Image={FruitSpecifications[1].Image}

                                    toggleShow={toggleShowFruit2}
                                    optSmModal={optSmModalFruit2}
                                    setOptSmModal={setOptSmModalFruit2}
                                ></ProdCard>
                            </MDBCol>
                            <MDBCol className='prodcol flex'>
                                <ProdCard
                                    Title={FruitSpecifications[2].Name}
                                    Nutrients={FruitSpecifications[2].Nutrients}
                                    Vitamins={FruitSpecifications[2].Vitamins}
                                    Proteins={FruitSpecifications[2].Proteins}
                                    Fats={FruitSpecifications[2].Fats}
                                    Description={FruitSpecifications[2].Description}
                                    Image={FruitSpecifications[2].Image}

                                    toggleShow={toggleShowFruit3}
                                    optSmModal={optSmModalFruit3}
                                    setOptSmModal={setOptSmModalFruit3}
                                ></ProdCard>
                            </MDBCol>

                        </MDBRow>
                        <center>
                            <MDBBtn className='my-5 togBut p-3' tag='a' onClick={toggleShowCollapse}>
                                More

                                <MDBIcon icon={showShow ? 'angle-up' : 'angle-down'} className='ms-2 arrow-icon' />
                            </MDBBtn>
                        </center>
                        <MDBRow className='row-cols-1 row-cols-md-3 mt g-4'>

                            <MDBCol>
                                <MDBCollapse show={showShow}>
                                    <ProdCard
                                        Title={FruitSpecifications[3].Name}
                                        Nutrients={FruitSpecifications[3].Nutrients}
                                        Vitamins={FruitSpecifications[3].Vitamins}
                                        Proteins={FruitSpecifications[3].Proteins}
                                        Fats={FruitSpecifications[3].Fats}
                                        Description={FruitSpecifications[3].Description}
                                        Image={FruitSpecifications[3].Image}

                                        toggleShow={toggleShowFruit4}
                                        optSmModal={optSmModalFruit4}
                                        setOptSmModal={setOptSmModalFruit4}
                                    ></ProdCard>
                                </MDBCollapse>
                            </MDBCol>

                        </MDBRow>
                    </MDBTabsPane>

                    {/*Vegetables */}
                    <MDBTabsPane show={fillActive === 'tab2'}>
                        <div className='container mb-5 text-center'>
                            <h1 data-aos="fade-up" data-aos-duration="1000" className='title py-2'>Vegetables</h1>
                            <p data-aos="fade-up" data-aos-duration="1000" class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s my-3 para prodpara typing-demo">Dive into the world of farm-fresh vegetables at SkyHarbour. Our Vegetable section is a tribute to the earth's richness, offering you an array of goodness grown in pristine farms. <br /><br />From versatile potatoes that promise comfort in every bite to vibrant broccoli, a nutritional powerhouse, our vegetables are a culinary canvas waiting for your creativity. <br /><br />We take pride in sourcing directly from farms to ensure you receive the highest quality. Make every meal a celebration of health and taste with our farm-fresh vegetables.</p>
                        </div>
                        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                            <MDBCol>
                                <ProdCard
                                    Title={VegetableSpecifications[0].Name}
                                    Nutrients={VegetableSpecifications[0].Nutrients}
                                    Vitamins={VegetableSpecifications[0].Vitamins}
                                    Proteins={VegetableSpecifications[0].Proteins}
                                    Fats={VegetableSpecifications[0].Fats}
                                    Description={VegetableSpecifications[0].Description}
                                    Image={VegetableSpecifications[0].Image}

                                    toggleShow={toggleShowVegetable1}
                                    optSmModal={optSmModalVegetable1}
                                    setOptSmModal={setOptSmModalVegetable1}
                                ></ProdCard>
                            </MDBCol>
                            <MDBCol>
                                <ProdCard
                                    Title={VegetableSpecifications[1].Name}
                                    Nutrients={VegetableSpecifications[1].Nutrients}
                                    Vitamins={VegetableSpecifications[1].Vitamins}
                                    Proteins={VegetableSpecifications[1].Proteins}
                                    Fats={VegetableSpecifications[1].Fats}
                                    Description={VegetableSpecifications[1].Description}
                                    Image={VegetableSpecifications[1].Image}

                                    toggleShow={toggleShowVegetable2}
                                    optSmModal={optSmModalVegetable2}
                                    setOptSmModal={setOptSmModalVegetable2}
                                ></ProdCard>
                            </MDBCol>
                            <MDBCol>
                                <ProdCard
                                    Title={VegetableSpecifications[2].Name}
                                    Nutrients={VegetableSpecifications[2].Nutrients}
                                    Vitamins={VegetableSpecifications[2].Vitamins}
                                    Proteins={VegetableSpecifications[2].Proteins}
                                    Fats={VegetableSpecifications[2].Fats}
                                    Description={VegetableSpecifications[2].Description}
                                    Image={VegetableSpecifications[2].Image}

                                    toggleShow={toggleShowVegetable3}
                                    optSmModal={optSmModalVegetable3}
                                    setOptSmModal={setOptSmModalVegetable3}
                                ></ProdCard>
                            </MDBCol>
                        </MDBRow>
                        <center>
                            <MDBBtn className='my-5 togBut p-3' tag='a' onClick={toggleShowCollapse2}>
                                More

                                <MDBIcon icon={showShow2 ? 'angle-up' : 'angle-down'} className='ms-2 arrow-icon' />
                            </MDBBtn>
                        </center>
                        <MDBRow className='row-cols-1 row-cols-md-3 mt g-4'>

                            <MDBCol>
                                <MDBCollapse show={showShow2}>
                                    <ProdCard
                                        Title={VegetableSpecifications[3].Name}
                                        Nutrients={VegetableSpecifications[3].Nutrients}
                                        Vitamins={VegetableSpecifications[3].Vitamins}
                                        Proteins={VegetableSpecifications[3].Proteins}
                                        Fats={VegetableSpecifications[3].Fats}
                                        Description={VegetableSpecifications[3].Description}
                                        Image={VegetableSpecifications[3].Image}

                                        toggleShow={toggleShowVegetable4}
                                        optSmModal={optSmModalVegetable4}
                                        setOptSmModal={setOptSmModalVegetable4}
                                    ></ProdCard>
                                </MDBCollapse>
                            </MDBCol>

                            {/* <MDBCol>
                                <MDBCollapse show={showShow2}>
                                    <ProdCard
                                        Title={VegetableSpecifications[0].Name}
                                        Nutrients={VegetableSpecifications[0].Nutrients}
                                        Vitamins={VegetableSpecifications[0].Vitamins}
                                        Proteins={VegetableSpecifications[0].Proteins}
                                        Fats={VegetableSpecifications[0].Fats}
                                        Description={VegetableSpecifications[0].Description}
                                        Image={VegetableSpecifications[0].Image}

                                        toggleShow={toggleShow10}
                                        optSmModal={optSmModal10}
                                        setOptSmModal={setOptSmModal10}
                                    ></ProdCard>
                                </MDBCollapse>
                            </MDBCol> */}

                        </MDBRow>
                    </MDBTabsPane>


                    {/*Spices*/}
                    <MDBTabsPane show={fillActive === 'tab1'}>
                        <div className='container mb-5 text-center'>
                            <h1 data-aos="fade-up" data-aos-duration="1000" className='title py-2 '>Spices</h1>
                            <p data-aos="fade-up" data-aos-duration="1000" class="text-base leading-relaxed xl:w-3/4 lg:w-3/4  text-gray-500s my-3 para prodpara mx-auto typing-demo">Welcome to our Spices section, where we unlock a world of flavor, color, and health benefits that only the finest spices can provide. At SkyHarbour, we pride ourselves on sourcing our spices directly from India's spice heartland, where age-old tradition seamlessly merges with uncompromised quality.<br /><br />

                                Our treasury of spices includes offerings from the lush <b>North-Eastern</b> corners to the vibrant <b>South of India</b>. Our connection with local farmers from the heart of South India ensures that every spice carries the authentic essence of the land.<br /><br />

                                Step into our Spice section, and you'll find treasures like our renowned turmeric, celebrated for its vibrant color and the potential health benefits it brings to your table. Joining the ensemble are fiery red chillies, adding a touch of excitement to your culinary creations. And let's not forget ginger, a versatile wonder that weaves its zesty charm through both your dishes and your wellness rituals.<br /><br />

                                These spices are not just ingredients; they are the very soul of taste and health. Brought directly from the farms to your spice rack, each spice encapsulates the essence of its origin. Explore our Spice section and elevate your culinary creations to new heights with the authentic flavors of India's spice heartland.<br /><br />
                            </p>
                        </div>
                        <center>
                            <MDBTabs fill className='mb-3 mx-auto w-1/2'>
                                <MDBTabsItem>
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
                            </MDBTabs>
                        </center>


                        {/*Turmeric */}
                        <MDBTabsContent className='mt-4'>
                            <MDBTabsPane show={fillActiveSpices === 'Spicetab1'}>
                                <div className='container mb-5 text-center'>
                                    <h1 data-aos="fade-up" data-aos-duration="1000" className='title py-2'>Turmeric</h1>
                                    <p data-aos="fade-up" data-aos-duration="1000" class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s my-3 para prodpara typing-demo">Our premium turmeric collection features unique varieties, distinguished by their curcumin content. Hailing from the picturesque landscapes of North-East India, these turmeric varieties are joined by the iconic Finger Turmeric from the vibrant South.<br /><br />You can savor these golden treasures in sliced, dried, or powdered forms, each naturally grown without a trace of chemicals. Besides their captivating earthy flavor and vibrant color, turmeric is renowned for its remarkable health benefits. <br /><br />Rich in curcumin, a powerful antioxidant and anti-inflammatory compound, it bolsters joint health, aids digestion, and may even have positive effects on brain function. Elevate your culinary creations and well-being with the pure goodness of our turmeric.</p>
                                </div>
                                <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                                    <MDBCol>
                                        <TurmericCard
                                            Title={TurmericSpecifications[0].Name}
                                            Origin={TurmericSpecifications[0].Origin}
                                            Curcumin={TurmericSpecifications[0].Curcumin}
                                            Intro={TurmericSpecifications[0].Intro}
                                            Description={TurmericSpecifications[0].Description}
                                            Benefits={TurmericSpecifications[0].Benefits}
                                            Image={SpiceSpecifications[0].Image}

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
                                            Image={SpiceSpecifications[0].Image}

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
                                            Image={SpiceSpecifications[0].Image}

                                            toggleShow={toggleShowTurmeric3}
                                            optSmModal={optSmModalTurmeric3}
                                            setOptSmModal={setOptSmModalTurmeric3}
                                        ></TurmericCard>
                                    </MDBCol>

                                </MDBRow>
                                {/*Toggle */}
                                <center>
                                    <MDBBtn className='my-5 togBut p-3' tag='a' onClick={toggleShowCollapse3}>
                                        More

                                        <MDBIcon icon={showShow3 ? 'angle-up' : 'angle-down'} className='ms-2 arrow-icon' />
                                    </MDBBtn>
                                </center>
                                <MDBRow className='row-cols-1 row-cols-md-3 mt g-4'>

                                    <MDBCol>
                                        <MDBCollapse show={showShow3}>
                                            <TurmericCard
                                                Title={TurmericSpecifications[3].Name}
                                                Origin={TurmericSpecifications[3].Origin}
                                                Curcumin={TurmericSpecifications[3].Curcumin}
                                                Intro={TurmericSpecifications[3].Intro}
                                                Description={TurmericSpecifications[3].Description}
                                                Benefits={TurmericSpecifications[3].Benefits}
                                                Image={SpiceSpecifications[0].Image}

                                                toggleShow={toggleShowTurmeric4}
                                                optSmModal={optSmModalTurmeric4}
                                                setOptSmModal={setOptSmModalTurmeric4}
                                            ></TurmericCard>
                                        </MDBCollapse>
                                    </MDBCol>

                                    <MDBCol>
                                        <MDBCollapse show={showShow3}>
                                            <TurmericCard
                                                Title={TurmericSpecifications[4].Name}
                                                Origin={TurmericSpecifications[4].Origin}
                                                Curcumin={TurmericSpecifications[4].Curcumin}
                                                Intro={TurmericSpecifications[4].Intro}
                                                Description={TurmericSpecifications[4].Description}
                                                Benefits={TurmericSpecifications[4].Benefits}
                                                Image={SpiceSpecifications[0].Image}

                                                toggleShow={toggleShowTurmeric5}
                                                optSmModal={optSmModalTurmeric5}
                                                setOptSmModal={setOptSmModalTurmeric5}
                                            ></TurmericCard>
                                        </MDBCollapse>
                                    </MDBCol>

                                    <MDBCol>
                                        <MDBCollapse show={showShow3}>
                                            <TurmericCard
                                                Title={TurmericSpecifications[5].Name}
                                                Origin={TurmericSpecifications[5].Origin}
                                                Curcumin={TurmericSpecifications[5].Curcumin}
                                                Intro={TurmericSpecifications[5].Intro}
                                                Description={TurmericSpecifications[5].Description}
                                                Benefits={TurmericSpecifications[5].Benefits}
                                                Image={SpiceSpecifications[0].Image}

                                                toggleShow={toggleShowTurmeric6}
                                                optSmModal={optSmModalTurmeric6}
                                                setOptSmModal={setOptSmModalTurmeric6}
                                            ></TurmericCard>
                                        </MDBCollapse>
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
                                            Image={SpiceSpecifications[1].Image}

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
                                            Image={SpiceSpecifications[1].Image}

                                            toggleShow={toggleShowRedChilli2}
                                            optSmModal={optSmModalRedChilli2}
                                            setOptSmModal={setOptSmModalRedChilli2}
                                        ></RedChilliCard>
                                    </MDBCol>

                                </MDBRow>
                                {/* <center>
                                    <MDBBtn className='my-5 togBut p-3' tag='a' onClick={toggleShowCollapse3}>
                                        More

                                        <MDBIcon icon={showShow3 ? 'angle-up' : 'angle-down'} className='ms-2 arrow-icon' />
                                    </MDBBtn>
                                </center>
                                <MDBRow className='row-cols-1 row-cols-md-3 mt g-4'>

                                    <MDBCol>
                                        <MDBCollapse show={showShow3}>

                                        </MDBCollapse>
                                    </MDBCol>

                                    <MDBCol>
                                        <MDBCollapse show={showShow3}>

                                        </MDBCollapse>
                                    </MDBCol>
                        </MDBRow>*/}
                            </MDBTabsPane>

                            {/*Ginger  */}
                            <MDBTabsPane show={fillActiveSpices === 'Spicetab3'}>
                                <div className='container mb-5 text-center'>
                                    <h1 data-aos="fade-up" data-aos-duration="1000" className='title py-2'>Ginger</h1>
                                    <p data-aos="fade-up" data-aos-duration="1000" class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s my-3 para prodpara typing-demo">
                                        Our ginger collection is a celebration of the spice's versatility. From the iconic Cochin Ginger, known for its pungent aroma and flavor, to the milder, more delicate varieties, our ginger collection offers a range of options to suit your culinary needs. <br /><br />Whether you're adding a zesty kick to your stir-fry or brewing a cup of ginger tea, our ginger collection is a must-have for every spice lover. <br /><br />Besides its culinary uses, ginger is also renowned for its potential health benefits. Rich in antioxidants, it supports your immune system and overall well-being. So, explore our ginger collection and add a zesty touch to your culinary creations and wellness rituals.</p>
                                </div>
                                <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                                    <MDBCol>
                                        <ProdCard
                                            Title={SpiceSpecifications[2].Name}
                                            Nutrients={SpiceSpecifications[2].Nutrients}
                                            Vitamins={SpiceSpecifications[2].Vitamins}
                                            Proteins={SpiceSpecifications[2].Proteins}
                                            Fats={SpiceSpecifications[2].Fats}
                                            Description={SpiceSpecifications[2].Description}
                                            Image={SpiceSpecifications[2].Image}

                                            toggleShow={toggleShowGinger1}
                                            optSmModal={optSmModalGinger1}
                                            setOptSmModal={setOptSmModalGinger1}
                                        ></ProdCard>
                                    </MDBCol>
                                </MDBRow>

                            </MDBTabsPane>
                        </MDBTabsContent>


                        {/* <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                            <MDBCol>
                                <TurmericCard
                                    Title={SpiceSpecifications[0].Name}
                                    Nutrients={SpiceSpecifications[0].Nutrients}
                                    Vitamins={SpiceSpecifications[0].Vitamins}
                                    Proteins={SpiceSpecifications[0].Proteins}
                                    Fats={SpiceSpecifications[0].Fats}
                                    Description={SpiceSpecifications[0].Description}
                                    Image={SpiceSpecifications[0].Image}

                                    toggleShow={toggleShow11}
                                    optSmModal={optSmModal11}
                                    setOptSmModal={setOptSmModal11}
                                ></TurmericCard>
                            </MDBCol>
                            <MDBCol>
                                <ProdCard
                                    Title={SpiceSpecifications[1].Name}
                                    Nutrients={SpiceSpecifications[1].Nutrients}
                                    Vitamins={SpiceSpecifications[1].Vitamins}
                                    Proteins={SpiceSpecifications[1].Proteins}
                                    Fats={SpiceSpecifications[1].Fats}
                                    Description={SpiceSpecifications[1].Description}
                                    Image={SpiceSpecifications[1].Image}

                                    toggleShow={toggleShow12}
                                    optSmModal={optSmModal12}
                                    setOptSmModal={setOptSmModal12}
                                ></ProdCard>
                            </MDBCol>
                            <MDBCol>
                                <ProdCard
                                    Title={SpiceSpecifications[2].Name}
                                    Nutrients={SpiceSpecifications[2].Nutrients}
                                    Vitamins={SpiceSpecifications[2].Vitamins}
                                    Proteins={SpiceSpecifications[2].Proteins}
                                    Fats={SpiceSpecifications[2].Fats}
                                    Description={SpiceSpecifications[2].Description}
                                    Image={SpiceSpecifications[2].Image}

                                    toggleShow={toggleShow13}
                                    optSmModal={optSmModal13}
                                    setOptSmModal={setOptSmModal13}
                                ></ProdCard>
                            </MDBCol>
                        </MDBRow>
                        <center>
                            <MDBBtn className='my-5 togBut p-3' tag='a' onClick={toggleShowCollapse3}>
                                More

                                <MDBIcon icon={showShow3 ? 'angle-up' : 'angle-down'} className='ms-2 arrow-icon' />
                            </MDBBtn>
                        </center>
                        <MDBRow className='row-cols-1 row-cols-md-3 mt g-4'>

                            <MDBCol>
                                <MDBCollapse show={showShow3}>
                                    <ProdCard
                                        Title={SpiceSpecifications[0].Name}
                                        Nutrients={SpiceSpecifications[0].Nutrients}
                                        Vitamins={SpiceSpecifications[0].Vitamins}
                                        Proteins={SpiceSpecifications[0].Proteins}
                                        Fats={SpiceSpecifications[0].Fats}
                                        Description={SpiceSpecifications[0].Description}
                                        Image={SpiceSpecifications[0].Image}

                                        toggleShow={toggleShow14}
                                        optSmModal={optSmModal14}
                                        setOptSmModal={setOptSmModal14}
                                    ></ProdCard>
                                </MDBCollapse>
                            </MDBCol>

                            <MDBCol>
                                <MDBCollapse show={showShow3}>
                                    <ProdCard
                                        Title={SpiceSpecifications[0].Name}
                                        Nutrients={SpiceSpecifications[0].Nutrients}
                                        Vitamins={SpiceSpecifications[0].Vitamins}
                                        Proteins={SpiceSpecifications[0].Proteins}
                                        Fats={SpiceSpecifications[0].Fats}
                                        Description={SpiceSpecifications[0].Description}
                                        Image={SpiceSpecifications[0].Image}

                                        toggleShow={toggleShow15}
                                        optSmModal={optSmModal15}
                                        setOptSmModal={setOptSmModal15}
                                    ></ProdCard>
                                </MDBCollapse>
                            </MDBCol>
                        </MDBRow> */}
                    </MDBTabsPane>

                    {/*Bio-Degradable Cutlery */}
                    <MDBTabsPane show={fillActive === 'tab4'}>
                        <div className='container mb-5 text-center'>
                            <h1 data-aos="fade-up" data-aos-duration="1000" className='title py-2'>Bio-Degradable Cutlery</h1>
                            <p data-aos="fade-up" data-aos-duration="1000" class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s my-3 para prodpara typing-demo">
                                SkyHarbour's bio-degradable cutlery collection is a tribute to nature's bounty. Made from 100% natural materials, our cutlery is a sustainable alternative to plastic. <br /><br />From the earthy charm of coconut shells to the rustic elegance of bamboo, our cutlery collection is a celebration of nature's diversity. <br /><br />Whether you're hosting a party or enjoying a picnic, our cutlery collection is a must-have for every occasion. Explore our collection and add a touch of nature to your table.</p>
                        </div>
                        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                            <MDBCol>
                                <ProdCard
                                    Title={VegetableSpecifications[0].Name}
                                    Nutrients={VegetableSpecifications[0].Nutrients}
                                    Vitamins={VegetableSpecifications[0].Vitamins}
                                    Proteins={VegetableSpecifications[0].Proteins}
                                    Fats={VegetableSpecifications[0].Fats}
                                    Description={VegetableSpecifications[0].Description}
                                    Image={VegetableSpecifications[0].Image}

                                    toggleShow={toggleShowVegetable1}
                                    optSmModal={optSmModalVegetable1}
                                    setOptSmModal={setOptSmModalVegetable1}
                                ></ProdCard>
                            </MDBCol>
                            <MDBCol>
                                <ProdCard
                                    Title={VegetableSpecifications[1].Name}
                                    Nutrients={VegetableSpecifications[1].Nutrients}
                                    Vitamins={VegetableSpecifications[1].Vitamins}
                                    Proteins={VegetableSpecifications[1].Proteins}
                                    Fats={VegetableSpecifications[1].Fats}
                                    Description={VegetableSpecifications[1].Description}
                                    Image={VegetableSpecifications[1].Image}

                                    toggleShow={toggleShowVegetable2}
                                    optSmModal={optSmModalVegetable2}
                                    setOptSmModal={setOptSmModalVegetable2}
                                ></ProdCard>
                            </MDBCol>
                            <MDBCol>
                                <ProdCard
                                    Title={VegetableSpecifications[2].Name}
                                    Nutrients={VegetableSpecifications[2].Nutrients}
                                    Vitamins={VegetableSpecifications[2].Vitamins}
                                    Proteins={VegetableSpecifications[2].Proteins}
                                    Fats={VegetableSpecifications[2].Fats}
                                    Description={VegetableSpecifications[2].Description}
                                    Image={VegetableSpecifications[2].Image}

                                    toggleShow={toggleShowVegetable3}
                                    optSmModal={optSmModalVegetable3}
                                    setOptSmModal={setOptSmModalVegetable3}
                                ></ProdCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBTabsPane>
                </MDBTabsContent>
            </div>
        </div>
    );
}