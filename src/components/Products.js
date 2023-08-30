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


} from 'mdb-react-ui-kit';
import './Products.css';

export default function Product() {
    const [fillActive, setFillActive] = useState('tab1');

    const handleFillClick = (value) => {
        if (value === fillActive) {
            return;
        }

        setFillActive(value);
    };

    return (
        <div id='productsection'>
            <div className='container p-5'>
                <div class="text-center mb-5 mt-5">
                    <h1 className='title px-5'>Explore Our Exquisite Products</h1>
                    <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s mt-3 para">Welcome to our product showcase where every flavor, color, and aroma tells a story of quality and authenticity. At SkyHarbour Impex, we take immense pride in offering a diverse range of premium fruits, vegetables, and spices that redefine culinary experiences.</p>
                </div>

                <MDBTabs fill className='mt-5 tab mx-3 success mb-5'>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                            Fruits
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
                            Vegetables
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
                            Spices
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent className=' mb-3  mx-3'>
                    <MDBTabsPane show={fillActive === 'tab1'}>
                        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                            <MDBCol>
                                <MDBCard className='h-100'>
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
                                <MDBCard className='h-100'>
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
                                <MDBCard className='h-100'>
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
                            <MDBCol>
                                <MDBCard className='h-100'>
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
                            </MDBCol>
                        </MDBRow>
                    </MDBTabsPane>


                    <MDBTabsPane show={fillActive === 'tab2'}>
                        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                            <MDBCol>
                                <MDBCard className='h-100'>
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
                                <MDBCard className='h-100'>
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
                                <MDBCard className='h-100'>
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
                            <MDBCol>
                                <MDBCard className='h-100'>
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
                            </MDBCol>
                        </MDBRow>
                    </MDBTabsPane>



                    <MDBTabsPane show={fillActive === 'tab3'}>
                        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                            <MDBCol>
                                <MDBCard className='h-100'>
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
                                <MDBCard className='h-100'>
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
                                <MDBCard className='h-100'>
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
                            <MDBCol>
                                <MDBCard className='h-100'>
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
                            </MDBCol>
                        </MDBRow>
                    </MDBTabsPane>
                </MDBTabsContent>
            </div>
        </div>
    );
}