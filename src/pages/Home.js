import React from 'react'
import Landing from '../components/Landing';
import About from '../components/About';
import Journey from '../components/Journey';
import Product from '../components/Products';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';


function Home() {
    return (
        <main>
            <Landing />
            <About />
            <Journey />
            <Product />
            <Certificates />
            <Contact />
        </main>
    )
}

export default Home;
