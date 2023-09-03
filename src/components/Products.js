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
        },
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
        },
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
                        <div className='container'>
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
                                    toggleShow={toggleShow1}
                                    optSmModal={optSmModal1}
                                    setOptSmModal={setOptSmModal1}
                                ></ProdCard>
                            </MDBCol>
                            <MDBCol>
                                <ProdCard
                                    Title={FruitSpecifications[0].Name}
                                    Nutrients={FruitSpecifications[0].Nutrients}
                                    Vitamins={FruitSpecifications[0].Vitamins}
                                    Proteins={FruitSpecifications[0].Proteins}
                                    Fats={FruitSpecifications[0].Fats}
                                    Description={FruitSpecifications[0].Description}
                                    toggleShow={toggleShow2}
                                    optSmModal={optSmModal2}
                                    setOptSmModal={setOptSmModal2}
                                ></ProdCard>
                            </MDBCol>
                            <MDBCol>
                                <ProdCard
                                    Title={FruitSpecifications[0].Name}
                                    Nutrients={FruitSpecifications[0].Nutrients}
                                    Vitamins={FruitSpecifications[0].Vitamins}
                                    Proteins={FruitSpecifications[0].Proteins}
                                    Fats={FruitSpecifications[0].Fats}
                                    Description={FruitSpecifications[0].Description}
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
                                        Title={FruitSpecifications[0].Name}
                                        Nutrients={FruitSpecifications[0].Nutrients}
                                        Vitamins={FruitSpecifications[0].Vitamins}
                                        Proteins={FruitSpecifications[0].Proteins}
                                        Fats={FruitSpecifications[0].Fats}
                                        Description={FruitSpecifications[0].Description}
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
                                        toggleShow={toggleShow5}
                                        optSmModal={optSmModal5}
                                        setOptSmModal={setOptSmModal5}
                                    ></ProdCard>
                                </MDBCollapse>
                            </MDBCol>

                        </MDBRow>
                    </MDBTabsPane>


                    <MDBTabsPane show={fillActive === 'tab2'}>
                        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                            <MDBCol>
                                <ProdCard
                                    Title={VegetableSpecifications[0].Name}
                                    Nutrients={VegetableSpecifications[0].Nutrients}
                                    Vitamins={VegetableSpecifications[0].Vitamins}
                                    Proteins={VegetableSpecifications[0].Proteins}
                                    Fats={VegetableSpecifications[0].Fats}
                                    Description={VegetableSpecifications[0].Description}
                                    toggleShow={toggleShow6}
                                    optSmModal={optSmModal6}
                                    setOptSmModal={setOptSmModal6}
                                ></ProdCard>
                            </MDBCol>
                            <MDBCol>
                                <ProdCard
                                    Title={VegetableSpecifications[0].Name}
                                    Nutrients={VegetableSpecifications[0].Nutrients}
                                    Vitamins={VegetableSpecifications[0].Vitamins}
                                    Proteins={VegetableSpecifications[0].Proteins}
                                    Fats={VegetableSpecifications[0].Fats}
                                    Description={VegetableSpecifications[0].Description}
                                    toggleShow={toggleShow7}
                                    optSmModal={optSmModal7}
                                    setOptSmModal={setOptSmModal7}
                                ></ProdCard>
                            </MDBCol>
                            <MDBCol>
                                <ProdCard
                                    Title={VegetableSpecifications[0].Name}
                                    Nutrients={VegetableSpecifications[0].Nutrients}
                                    Vitamins={VegetableSpecifications[0].Vitamins}
                                    Proteins={VegetableSpecifications[0].Proteins}
                                    Fats={VegetableSpecifications[0].Fats}
                                    Description={VegetableSpecifications[0].Description}
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
                                        Title={VegetableSpecifications[0].Name}
                                        Nutrients={VegetableSpecifications[0].Nutrients}
                                        Vitamins={VegetableSpecifications[0].Vitamins}
                                        Proteins={VegetableSpecifications[0].Proteins}
                                        Fats={VegetableSpecifications[0].Fats}
                                        Description={VegetableSpecifications[0].Description}
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
                                        toggleShow={toggleShow10}
                                        optSmModal={optSmModal10}
                                        setOptSmModal={setOptSmModal10}
                                    ></ProdCard>
                                </MDBCollapse>
                            </MDBCol>

                        </MDBRow>
                    </MDBTabsPane>



                    <MDBTabsPane show={fillActive === 'tab3'}>
                        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                            <MDBCol>
                                <ProdCard
                                    Title={SpiceSpecifications[0].Name}
                                    Nutrients={SpiceSpecifications[0].Nutrients}
                                    Vitamins={SpiceSpecifications[0].Vitamins}
                                    Proteins={SpiceSpecifications[0].Proteins}
                                    Fats={SpiceSpecifications[0].Fats}
                                    Description={SpiceSpecifications[0].Description}
                                    toggleShow={toggleShow11}
                                    optSmModal={optSmModal11}
                                    setOptSmModal={setOptSmModal11}
                                ></ProdCard>
                            </MDBCol>
                            <MDBCol>
                                <ProdCard
                                    Title={SpiceSpecifications[0].Name}
                                    Nutrients={SpiceSpecifications[0].Nutrients}
                                    Vitamins={SpiceSpecifications[0].Vitamins}
                                    Proteins={SpiceSpecifications[0].Proteins}
                                    Fats={SpiceSpecifications[0].Fats}
                                    Description={SpiceSpecifications[0].Description}
                                    toggleShow={toggleShow12}
                                    optSmModal={optSmModal12}
                                    setOptSmModal={setOptSmModal12}
                                ></ProdCard>
                            </MDBCol>
                            <MDBCol>
                                <ProdCard
                                    Title={SpiceSpecifications[0].Name}
                                    Nutrients={SpiceSpecifications[0].Nutrients}
                                    Vitamins={SpiceSpecifications[0].Vitamins}
                                    Proteins={SpiceSpecifications[0].Proteins}
                                    Fats={SpiceSpecifications[0].Fats}
                                    Description={SpiceSpecifications[0].Description}
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
        </div >
    );
}