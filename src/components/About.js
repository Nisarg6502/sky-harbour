import React from 'react';
import './About.css';
import Farm from '../images/farm.png';
import Quality from '../images/quality.png';
import Handshake from '../images/handshake1.png';
import Efficiency from '../images/efficiency.png';

export default function About() {
    return (
        <div id='about'>
            <section class="text-gray-600 body-font ab">
                <div class="container py-24">
                    <div class="text-center mb-5">
                        <h2 data-aos="zoom-in-up" data-aos-duration="1000" className='title px-5'>SkyHarbour</h2>
                        <p data-aos="zoom-in-up" data-aos-duration="1000" class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s mt-3 para">At SkyHarbour, we are the epitome of quality and authenticity in the realm of spices, agro products, and biodegradable products. With a steadfast dedication to excellence, our expertise lies in sourcing and delivering premium spices that elevate culinary experiences. Based in India, SkyHarbour is on a mission to unite global palates with the most exquisite flavors from our farms. While our roots are deeply grounded in spices, we also export a delightful array of agro products and biodegradable products, ensuring your table is adorned with the finest nature has to offer.</p>
                    </div>
                    <hr className='mb-5 w-50 mx-auto horiline' />
                    <center>
                        <div id='abcontainer' class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 abcard">
                            <div data-aos="zoom-in-up" data-aos-duration="1000" class="p-4 md:w-1/2 flex flex-col text-center items-center">
                                <div className='abitem'>
                                    <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-3 flex-shrink-0">
                                        <img src={Farm} alt='farm' />
                                    </div>
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Direct Farm Sourcing</h2>
                                        <p class="leading-relaxed text-base">We take pride in sourcing our spices and agro products directly from farmers. This not only ensures the freshest produce but also empowers local communities.</p>

                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in-up" data-aos-duration="1000" class="p-4 md:w-1/2 flex flex-col text-center items-center">
                                <div className='abitem'>
                                    <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-3 flex-shrink-0">
                                        <img src={Quality} alt='Quality' />
                                    </div>
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Quality Assurance</h2>
                                        <p class="leading-relaxed text-base">Our commitment to quality surpasses industry standards. Rigorous quality control measures guarantee that every product we offer meets the highest international benchmarks.</p>

                                    </div>
                                </div>
                            </div>

                            <div data-aos="zoom-in-up" data-aos-duration="1000" class="p-4 md:w-1/2 flex flex-col text-center items-center">
                                <div className='abitem'>
                                    <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-3 flex-shrink-0">
                                        <img src={Handshake} alt='Handshake' />

                                    </div>
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Reliability and Transparency</h2>
                                        <p class="leading-relaxed text-base">Trust is paramount in international trade. Our commitment to reliability ensures a seamless export experience, allowing you to focus on your core business.</p>

                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in-up" data-aos-duration="1000" class="p-4 md:w-1/2 flex flex-col text-center items-center">
                                <div className='abitem'>
                                    <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-3 flex-shrink-0">
                                        <img src={Efficiency} alt='Efficiency' />
                                    </div>
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Unlocking Efficiency</h2>
                                        <p class="leading-relaxed text-base">Navigating the complexities of international markets can be both time-consuming and costly. By choosing SkyHarbour, you are tapping into our expertise, saving valuable resources.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </center>
                </div>
            </section>
        </div>
    )
}