import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBCollapse,
    MDBIcon,
    MDBTable,
    MDBTableHead,
    MDBTableBody,

} from 'mdb-react-ui-kit';
import './Products.css';
import { color } from 'framer-motion';

export default function Product() {
    const [fillActive, setFillActive] = useState('tab1');

    const handleFillClick = (value) => {
        if (value === fillActive) {
            return;
        }

        setFillActive(value);
    };
    const [optSmModal, setOptSmModal] = useState(false);

    const toggleShow = () => setOptSmModal(!optSmModal);

    const [showShow, setShowShow] = useState(false);

    const toggleShowCollapse = () => setShowShow(!showShow);

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
                                <MDBCard className='h-100 prodcard'>
                                    <MDBCardImage
                                        src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                                        alt='...'
                                        position='top'
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle>Card title</MDBCardTitle>
                                        <MDBCardText>
                                            This is a longer card with supporting text below as a natural lead-in to additional content.
                                            This content is a little bit longer.
                                        </MDBCardText>
                                        <div className='text-center'>
                                            <MDBBtn className='mt-3 togBut modBut text-capitalize' color='dark' onClick={toggleShow}>Learn More</MDBBtn>
                                        </div>
                                        <MDBModal show={optSmModal} tabIndex='-1' setShow={setOptSmModal}>
                                            <MDBModalDialog size='lg' centered>
                                                <MDBModalContent>
                                                    <MDBModalHeader>
                                                        <MDBModalTitle>Specifications</MDBModalTitle>
                                                        <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                                    </MDBModalHeader>
                                                    <MDBModalBody>
                                                        <MDBTable striped>
                                                            <MDBTableHead>
                                                                <tr>
                                                                    <th scope='col'>#</th>
                                                                    <th scope='col'>First</th>
                                                                    <th scope='col'>Last</th>
                                                                    <th scope='col'>Handle</th>
                                                                </tr>
                                                            </MDBTableHead>
                                                            <MDBTableBody>
                                                                <tr>
                                                                    <th scope='row'>1</th>
                                                                    <td>Mark</td>
                                                                    <td>Otto</td>
                                                                    <td>@mdo</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope='row'>2</th>
                                                                    <td>Jacob</td>
                                                                    <td>Thornton</td>
                                                                    <td>@fat</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope='row'>3</th>
                                                                    <td colSpan={2}>Larry the Bird</td>
                                                                    <td>@twitter</td>
                                                                </tr>
                                                            </MDBTableBody>
                                                        </MDBTable>
                                                    </MDBModalBody>
                                                </MDBModalContent>
                                            </MDBModalDialog>
                                        </MDBModal>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard className='h-100 prodcard'>
                                    <MDBCardImage
                                        src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                                        alt='...'
                                        position='top'
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle>Card title</MDBCardTitle>
                                        <MDBCardText>This is a short card.</MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard className='h-100 prodcard'>
                                    <MDBCardImage
                                        src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                                        alt='...'
                                        position='top'
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle>Card title</MDBCardTitle>
                                        <MDBCardText>
                                            This is a longer card with supporting text below as a natural lead-in to additional content.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
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
                                    <MDBCard className='h-100 prodcard'>
                                        <MDBCardImage
                                            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle>Card title</MDBCardTitle>
                                            <MDBCardText>
                                                This is a longer card with supporting text below as a natural lead-in to additional content.
                                                This content is a little bit longer.
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCollapse>
                            </MDBCol>

                            <MDBCol>
                                <MDBCollapse show={showShow}>
                                    <MDBCard className='h-100 prodcard'>
                                        <MDBCardImage
                                            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle>Card title</MDBCardTitle>
                                            <MDBCardText>
                                                This is a longer card with supporting text below as a natural lead-in to additional content.
                                                This content is a little bit longer.
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCollapse>
                            </MDBCol>

                        </MDBRow>
                    </MDBTabsPane>


                    <MDBTabsPane show={fillActive === 'tab2'}>
                        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                            <MDBCol>
                                <MDBCard className='h-100 prodcard'>
                                    <MDBCardImage
                                        src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                                        alt='...'
                                        position='top'
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle>Card title</MDBCardTitle>
                                        <MDBCardText>
                                            This is a longer card with supporting text below as a natural lead-in to additional content.
                                            This content is a little bit longer.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard className='h-100 prodcard'>
                                    <MDBCardImage
                                        src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                                        alt='...'
                                        position='top'
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle>Card title</MDBCardTitle>
                                        <MDBCardText>This is a short card.</MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard className='h-100 prodcard'>
                                    <MDBCardImage
                                        src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                                        alt='...'
                                        position='top'
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle>Card title</MDBCardTitle>
                                        <MDBCardText>
                                            This is a longer card with supporting text below as a natural lead-in to additional content.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
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
                                    <MDBCard className='h-100 prodcard'>
                                        <MDBCardImage
                                            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle>Card title</MDBCardTitle>
                                            <MDBCardText>
                                                This is a longer card with supporting text below as a natural lead-in to additional content.
                                                This content is a little bit longer.
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCollapse>
                            </MDBCol>

                            <MDBCol>
                                <MDBCollapse show={showShow}>
                                    <MDBCard className='h-100 prodcard'>
                                        <MDBCardImage
                                            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle>Card title</MDBCardTitle>
                                            <MDBCardText>
                                                This is a longer card with supporting text below as a natural lead-in to additional content.
                                                This content is a little bit longer.
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCollapse>
                            </MDBCol>

                        </MDBRow>
                    </MDBTabsPane>



                    <MDBTabsPane show={fillActive === 'tab3'}>
                        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                            <MDBCol>
                                <MDBCard className='h-100 prodcard'>
                                    <MDBCardImage
                                        src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                                        alt='...'
                                        position='top'
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle>Card title</MDBCardTitle>
                                        <MDBCardText>
                                            This is a longer card with supporting text below as a natural lead-in to additional content.
                                            This content is a little bit longer.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard className='h-100 prodcard'>
                                    <MDBCardImage
                                        src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                                        alt='...'
                                        position='top'
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle>Card title</MDBCardTitle>
                                        <MDBCardText>This is a short card.</MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard className='h-100 prodcard'>
                                    <MDBCardImage
                                        src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                                        alt='...'
                                        position='top'
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle>Card title</MDBCardTitle>
                                        <MDBCardText>
                                            This is a longer card with supporting text below as a natural lead-in to additional content.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
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
                                    <MDBCard className='h-100 prodcard'>
                                        <MDBCardImage
                                            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle>Card title</MDBCardTitle>
                                            <MDBCardText>
                                                This is a longer card with supporting text below as a natural lead-in to additional content.
                                                This content is a little bit longer.
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCollapse>
                            </MDBCol>

                            <MDBCol>
                                <MDBCollapse show={showShow}>
                                    <MDBCard className='h-100 prodcard'>
                                        <MDBCardImage
                                            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle>Card title</MDBCardTitle>
                                            <MDBCardText>
                                                This is a longer card with supporting text below as a natural lead-in to additional content.
                                                This content is a little bit longer.
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCollapse>
                            </MDBCol>

                        </MDBRow>
                    </MDBTabsPane>
                </MDBTabsContent>
            </div>
        </div >
    );
}