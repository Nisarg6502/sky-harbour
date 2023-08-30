import React from 'react'
import Landing from '../components/Landing';
import About from '../components/About';
import Product from '../components/Products';

function Home() {
    return (
        <div>
            <Landing></Landing>
            <About></About>
            <Product></Product>
        </div>
    )
}

export default Home;