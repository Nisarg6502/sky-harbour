import React from 'react'
import Landing from '../components/Landing';
import About from '../components/About';
import Product from '../components/Products';
import Certificates from '../components/Certificates';


function Home() {
    return (
        <div>
            <Landing></Landing>
            <About></About>
            <Product></Product>
            <Certificates></Certificates>
        </div>
    )
}

export default Home;