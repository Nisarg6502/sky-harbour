import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import bg1 from '../images/fruits-vegetables-floating.png'
import FiveSpice from '../images/five-spice-ingredients.png'
import HotSpice from '../images/hot-spices-wooden-spoon.png'

import './Landing.css';

export default function Landing() {
    return (
        <div>
            <MDBContainer fluid className='landing'>
                <MDBRow className='mt-5'>
                    <MDBCol lg='6' md='6' className='bg1cont'>
                        {/* <img className='img-fluid bg1' src={bg1} alt='Fruits and Vegetables floating' /> */}
                        <MDBCarousel className='img-fluid bg1'>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={1}
                                src={bg1}
                                alt='fruits-vegetables-floating'
                            />
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={2}
                                src={FiveSpice}
                                alt='five-spice-ingredients'
                            />
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={3}
                                src={HotSpice}
                                alt='hot-spices-wooden-spoon'
                            />
                        </MDBCarousel>
                    </MDBCol>
                    <MDBCol lg='6' md='6' sm="12" className='text'>
                        <h1 className='title'>YOUR GATEWAY TO FRESH HORIZONS</h1>
                        {/* <h4 className='subtitle'>Exporting the Finest Selection of Fruits, Vegetables, and Spices Worldwide.</h4> */}
                        <h4 className='subtitle' id='subtitle'>Exporting
                            <span> the finest Selection of Fruits, Vegetables, and Spices Worldwide. From Our Farms to Your Table, Excellence is our Trademark.</span>
                        </h4>
                        <br />
                        <MDBBtn className='mt-2 bg-success'>Explore Products</MDBBtn>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>


            {/* <MDBContainer fluid className='about'>
                <MDBContainer fluid className='abouttitle'>
                    <h1 className='title px-5'>SKY HARBOUR</h1>
                    <p className='px-5 aboutpara pt-3'>At SkyHarbour, we stand as a beacon of quality and authenticity in the world of spices, fruits, and vegetables. With an unwavering commitment to excellence, we meticulously source and deliver premium products that enrich culinary experiences. Based in India, Sky Harbour's journey is rooted in connecting global tables with the finest flavors from our farms.</p>
                </MDBContainer>
            </MDBContainer> */}



        </div>
    );
}