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
import Turmeric from '../images/turmeric-powder.jpg';
import RedChillies from '../images/red-chili-peppers.jpg';
import Ginger from '../images/ginger.jpg';
import Oranges from '../images/oranges.jpg';
import Pomegranate from '../images/pomegranate.jpg';
import Grapes from '../images/grapes.jpg';
import Apples from '../images/apples.jpg';
import Broccoli from '../images/broccoli.jpg';
import Onion from '../images/onion.jpg';
import Cauliflower from '../images/cauliflower.jpg';
import Potatoes from '../images/potatoes.jpg';

export default function Product() {
    const [fillActive, setFillActive] = useState('tab1');

    const handleFillClick = (value) => {
        if (value === fillActive) {
            return;
        }

        setFillActive(value);
    };
    const [optSmModal1, setOptSmModal1] = useState(false);
    const [optSmModal2, setOptSmModal2] = useState(false);
    const [optSmModal3, setOptSmModal3] = useState(false);
    const [optSmModal4, setOptSmModal4] = useState(false);
    const [optSmModal5, setOptSmModal5] = useState(false);
    const [optSmModal6, setOptSmModal6] = useState(false);
    const [optSmModal7, setOptSmModal7] = useState(false);
    const [optSmModal8, setOptSmModal8] = useState(false);
    const [optSmModal9, setOptSmModal9] = useState(false);
    const [optSmModal10, setOptSmModal10] = useState(false);
    const [optSmModal11, setOptSmModal11] = useState(false);
    const [optSmModal12, setOptSmModal12] = useState(false);
    const [optSmModal13, setOptSmModal13] = useState(false);
    const [optSmModal14, setOptSmModal14] = useState(false);
    const [optSmModal15, setOptSmModal15] = useState(false);

    const toggleShow1 = () => setOptSmModal1(!optSmModal1);
    const toggleShow2 = () => setOptSmModal2(!optSmModal2);
    const toggleShow3 = () => setOptSmModal3(!optSmModal3);
    const toggleShow4 = () => setOptSmModal4(!optSmModal4);
    const toggleShow5 = () => setOptSmModal5(!optSmModal5);
    const toggleShow6 = () => setOptSmModal6(!optSmModal6);
    const toggleShow7 = () => setOptSmModal7(!optSmModal7);
    const toggleShow8 = () => setOptSmModal8(!optSmModal8);
    const toggleShow9 = () => setOptSmModal9(!optSmModal9);
    const toggleShow10 = () => setOptSmModal10(!optSmModal10);
    const toggleShow11 = () => setOptSmModal11(!optSmModal11);
    const toggleShow12 = () => setOptSmModal12(!optSmModal12);
    const toggleShow13 = () => setOptSmModal13(!optSmModal13);
    const toggleShow14 = () => setOptSmModal14(!optSmModal14);
    const toggleShow15 = () => setOptSmModal15(!optSmModal15);

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
            "Name": "Turmeric",
            "Nutrients": {
                "Calories": 354,
                "Carbs": 65,
                "Fiber": 21,
            },
            "Vitamins": "Vitamin A, Vitamin C",
            "Proteins": "7.8g/100g",
            "Fats": "9.9g/100g",
            "Description": "Our turmeric is a golden treasure, known for its earthy flavor and vibrant color. Beyond its culinary charm, turmeric boasts remarkable health benefits. Rich in curcumin, a potent antioxidant and anti-inflammatory compound, it supports joint health, aids digestion, and may even have positive effects on brain function. Enhance both your dishes and well-being with our premium turmeric.",
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

    //generate specification for vegetables
    const VegetableSpecifications = [
        {
            "id": 1,
            "Name": "Potato",
            "Nutrients": {
                "Calories": 77,
                "Carbs": 17,
                "Fiber": 2,
            },
            "Vitamins": "Vitamin A, Vitamin C",
            "Proteins": "2g/100g",
            "Fats": "0.1g/100g",
            "Description": "Versatile and comforting, our potatoes are a kitchen staple that never goes out of style. With a creamy texture and a hearty flavor, they're perfect for mashing, roasting, or frying to crispy perfection. Beyond their delicious taste, potatoes provide a healthy dose of carbohydrates and fiber, offering sustained energy and digestive benefits for a well-rounded diet.",
            "Image": Potatoes,

        },
        {
            "id": 2,
            "Name": "Onion",
            "Nutrients": {
                "Calories": 40,
                "Carbs": 9,
                "Fiber": 2,
            },
            "Vitamins": "Vitamin A, Vitamin C",
            "Proteins": "1.1g/100g",
            "Fats": "0.1g/100g",
            "Description": "Our onions are the aromatic foundation of countless dishes across the world. Their sweet and pungent flavor enhances everything from soups to salads. Beyond their culinary magic, onions are known for their potential health benefits, including anti-inflammatory and antioxidant properties. Add depth and goodness to your recipes with our premium onions.",
            "Image": Onion,
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
            "Name": "Cauliflower",
            "Nutrients": {
                "Calories": 25,
                "Carbs": 5,
                "Fiber": 2,
            },
            "Vitamins": "Vitamin A, Vitamin C",
            "Proteins": "1.9g/100g",
            "Fats": "0.3g/100g",
            "Description": "Versatile and nutritious, our cauliflower is a low-carb superstar. Its mild, slightly nutty flavor makes it a versatile ingredient for everything from cauliflower rice to pizza crust. Packed with vitamins, fiber, and antioxidants, our cauliflower not only elevates your meals but also supports your health and well-being. Enjoy the goodness of this cruciferous gem in every bite.",
            "Image": Cauliflower,
        }

    ];


    return (
        <div id='productsection'>
            <div className='container'>
                <div class="text-center mb-5 mt-5">
                    <h1 data-aos="fade-up" data-aos-duration="1000" className='title px-5'>Explore Our Exquisite Products</h1>
                    <p data-aos="fade-up" data-aos-duration="1000" class="p-4 text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s mt-3 para">Welcome to our product showcase where every flavor, color, and aroma tells a story of quality and authenticity. At SkyHarbour Impex, we take immense pride in offering a diverse range of premium fruits, vegetables, and spices that redefine culinary experiences.</p>
                </div>

                <hr className='mb-5 w-50 mx-auto horiline' id='prodhr' />

                <MDBTabs data-aos="zoom-in" data-aos-duration="1000" fill className='mt-5 tab mx-3 mb-5'>
                    <MDBTabsItem className='proditem'>
                        <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                            Fruits
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem className='proditem'>
                        <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
                            Vegetables
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem className='proditem'>
                        <MDBTabsLink onClick={() => { handleFillClick('tab3'); }} active={fillActive === 'tab3'}>
                            Spices
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent className=' mb-3  mx-3'>
                    <MDBTabsPane show={fillActive === 'tab1'}>
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
                                    toggleShow={toggleShow1}
                                    optSmModal={optSmModal1}
                                    setOptSmModal={setOptSmModal1}
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

                                    toggleShow={toggleShow2}
                                    optSmModal={optSmModal2}
                                    setOptSmModal={setOptSmModal2}
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

                                    toggleShow={toggleShow3}
                                    optSmModal={optSmModal3}
                                    setOptSmModal={setOptSmModal3}
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

                                        toggleShow={toggleShow4}
                                        optSmModal={optSmModal4}
                                        setOptSmModal={setOptSmModal4}
                                    ></ProdCard>
                                </MDBCollapse>
                            </MDBCol>

                            <MDBCol>
                                <MDBCollapse show={showShow}>
                                    <ProdCard
                                        Title={FruitSpecifications[0].Name}
                                        Nutrients={FruitSpecifications[0].Nutrients}
                                        Vitamins={FruitSpecifications[0].Vitamins}
                                        Proteins={FruitSpecifications[0].Proteins}
                                        Fats={FruitSpecifications[0].Fats}
                                        Description={FruitSpecifications[0].Description}
                                        Image={FruitSpecifications[0].Image}

                                        toggleShow={toggleShow5}
                                        optSmModal={optSmModal5}
                                        setOptSmModal={setOptSmModal5}
                                    ></ProdCard>
                                </MDBCollapse>
                            </MDBCol>

                        </MDBRow>
                    </MDBTabsPane>


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

                                    toggleShow={toggleShow6}
                                    optSmModal={optSmModal6}
                                    setOptSmModal={setOptSmModal6}
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

                                    toggleShow={toggleShow7}
                                    optSmModal={optSmModal7}
                                    setOptSmModal={setOptSmModal7}
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

                                    toggleShow={toggleShow8}
                                    optSmModal={optSmModal8}
                                    setOptSmModal={setOptSmModal8}
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

                                        toggleShow={toggleShow9}
                                        optSmModal={optSmModal9}
                                        setOptSmModal={setOptSmModal9}
                                    ></ProdCard>
                                </MDBCollapse>
                            </MDBCol>

                            <MDBCol>
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
                            </MDBCol>

                        </MDBRow>
                    </MDBTabsPane>



                    <MDBTabsPane show={fillActive === 'tab3'}>
                        <div className='container mb-5 text-center'>
                            <h1 data-aos="fade-up" data-aos-duration="1000" className='title py-2 '>Spices</h1>
                            <p data-aos="fade-up" data-aos-duration="1000" class="text-base leading-relaxed xl:w-2/4 lg:w-3/4  text-gray-500s my-3 para prodpara mx-auto typing-demo">In our Spices section, we unveil a world of flavor, color, and health benefits that only the finest spices can provide. At SkyHarbour, we source our spices directly from India's spice heartland, where tradition meets quality. <br /><br />Our turmeric, renowned for its vibrant color and potential health benefits, joins fiery red chillies that add excitement to your dishes. And let's not forget ginger, a zesty wonder with numerous culinary and wellness uses. <br /><br />These spices are more than ingredients; they are the essence of taste and health, brought directly from the farms to your spice rack. Explore our Spice section and elevate your culinary creations to new heights.</p>
                        </div>
                        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                            <MDBCol>
                                <ProdCard
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
                                ></ProdCard>
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
                        </MDBRow>
                    </MDBTabsPane>
                </MDBTabsContent>
            </div>
        </div>
    );
}