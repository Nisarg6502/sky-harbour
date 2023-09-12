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
            "Description": "An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today.",
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
            "Description": "The orange is the fruit of various citrus species in the family Rutaceae; it primarily refers to Citrus × sinensis, which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange.",
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
            "Description": "The pomegranate, botanical name Punica granatum, is a fruit-bearing deciduous shrub or small tree in the family Lythraceae that grows between 5 and 10 m tall. The fruit is typically in season in the Northern Hemisphere from September to February, and in the Southern Hemisphere from March to May.",
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
            "Description": "A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes can be eaten fresh as table grapes or they can be used for making wine, jam, grape juice, jelly, grape seed extract, raisins, vinegar, and grape seed oil.",
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
            "Description": "Turmeric is a flowering plant, Curcuma longa of the ginger family, Zingiberaceae, the roots of which are used in cooking. The plant is a perennial, rhizomatous, herbaceous plant native to the Indian subcontinent and Southeast Asia, that requires temperatures between 20 and 30 °C and a considerable amount of annual rainfall to thrive.",
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
            "Description": "The chili pepper, from Nahuatl chīlli, is the fruit of plants from the genus Capsicum which are members of the nightshade family, Solanaceae. Chili peppers are widely used in many cuisines as a spice to add heat to dishes.",
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
            "Description": "Ginger is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice and a folk medicine. It is a herbaceous perennial which grows annual pseudostems about one meter tall bearing narrow leaf blades.",
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
            "Description": "The potato is a root vegetable native to the Americas, a starchy tuber of the plant Solanum tuberosum, and the plant itself, a perennial in the family Solanaceae.",
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
            "Description": "The onion, also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium. Its close relatives include the garlic, scallion, shallot, leek, chive, and Chinese onion.",
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
            "Description": "Broccoli is an edible green plant in the cabbage family whose large flowering head, stalk and small associated leaves are eaten as a vegetable. Broccoli is classified in the Italica cultivar group of the species Brassica oleracea.",
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
            "Description": "Cauliflower is one of several vegetables in the species Brassica oleracea in the genus Brassica, which is in the Brassicaceae family. It is an annual plant that reproduces by seed. Typically, only the head is eaten – the edible white flesh sometimes called curd.",
            "Image": Cauliflower,
        }

    ];


    return (
        <div id='productsection'>
            <div className='container p-5'>
                <div class="text-center mb-5 mt-5">
                    <h1 className='title px-5'>Explore Our Exquisite Products</h1>
                    <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s mt-3 para">Welcome to our product showcase where every flavor, color, and aroma tells a story of quality and authenticity. At SkyHarbour Impex, we take immense pride in offering a diverse range of premium fruits, vegetables, and spices that redefine culinary experiences.</p>
                </div>

                <hr className='mb-5 w-50 mx-auto horiline' id='prodhr' />

                <MDBTabs fill className='mt-5 tab mx-3 mb-5'>
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
                        <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
                            Spices
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent className=' mb-3  mx-3'>
                    <MDBTabsPane show={fillActive === 'tab1'}>
                        <div className='container mb-5'>
                            <h1 className='title py-2 w-fit'>Fruits</h1>
                            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4  text-gray-500s my-3 para prodpara typing-demo">Indulge in the vibrant sweetness of our handpicked fruits, a harmonious blend of nature's finest flavors. Our fruits bring the essence of sun-soaked orchards to your table.</p>
                        </div>
                        <MDBRow className='row-cols-1 row-cols-md-3 mt g-4'>
                            <MDBCol>
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
                            <MDBCol>
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
                            <MDBCol>
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
                        <div className='container mb-5'>
                            <h1 className='title py-2 w-fit'>Vegetables</h1>
                            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4  text-gray-500s my-3 para prodpara typing-demo">Our vegetables are a celebration of the earth's bounty, a testament to the richness of the soil. From the humble potato to the exotic broccoli, our vegetables are a feast for the senses.</p>
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
                        <div className='container mb-5'>
                            <h1 className='title py-2 w-fit'>Spices</h1>
                            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4  text-gray-500s my-3 para prodpara typing-demo">Spices are the soul of every dish, and ours are a symphony of flavors, carefully selected from the heart of India's spice lands.</p>
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