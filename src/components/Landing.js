import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import bg1 from '../images/fruits-vegetables-floating.jpg'
import FiveSpice from '../images/five-spice-ingredients.jpg'
import HotSpice from '../images/hot-spices-wooden-spoon.jpg'

import './Landing.css';

export default function Landing() {
    return (
        <div>
            <MDBContainer fluid className='landing'>
                <MDBRow className='mt-5'>
                    <MDBCol lg='6' md='6' className='bg1cont' data-aos="fade-up" data-aos-duration="1000">
                        {/* <img className='img-fluid bg1' src={bg1} alt='Fruits and Vegetables floating' /> */}
                        <MDBCarousel fade className='img-fluid bg1' data-bs-interval="1000">
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
                    <MDBCol lg='6' md='6' sm="12" className='text' id='landtext'>
                        <MDBRow className='w-90 mr-4' data-aos="fade-up" data-aos-duration="1000">
                            <h1 className='title' >YOUR GATEWAY TO FRESH HORIZONS</h1>
                            {/* <h4 className='subtitle'>Exporting the Finest Selection of Fruits, Vegetables, and Spices Worldwide.</h4> */}
                            <h4 className='subtitle' id='subtitle'>Exporting
                                <span> the finest Selection of Spices, Fruits, and Vegetables Worldwide. From Our Farms to Your Table, Excellence is our Trademark.</span>
                            </h4>
                        </MDBRow>
                        <br />
                        <a href='#productsection' ><MDBBtn outline color='success' data-aos="fade-up" data-aos-duration="1000" className='mt-2 rounded-xl' id='exp-button'>Explore Products</MDBBtn></a>

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