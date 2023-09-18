import "./NavbarMain.css"
import Logo from "../images/Logo.png"

import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon,
    MDBNavbarNav,
} from 'mdb-react-ui-kit';

// import { Link } from 'react-router-dom';


function NavbarMain() {
    const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);
    return (

        <MDBNavbar className="main-navbar shadow" expand='lg' light>
            <MDBContainer fluid>
                <MDBNavbarBrand>
                    {/* <Link to="/"> */}
                    <img src={Logo} class="img-fluid logo" />
                    {/* </Link> */}
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarTogglerDemo02'
                    aria-controls='navbarTogglerDemo02'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNavNoTogglerSecond}>
                    <MDBNavbarNav className='ml-auto mb-2 mb-lg-0 navbar-items'>
                        <MDBNavbarItem>
                            <MDBNavbarLink className="link" href="">
                                {/* <Link to="/">Home</Link> */}
                                <a href="/">Home</a>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink className="link" href='#about'>About</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink className="link" href='#productsection'>
                                Products
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        {/* <MDBNavbarItem>
                            <MDBNavbarLink className="link" href='#'>
                                Gallery
                            </MDBNavbarLink>
                        </MDBNavbarItem> */}
                        <MDBNavbarItem>
                            <MDBNavbarLink className="link" href="https://wa.me/+917899933077">
                                Contact Us
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}

export default NavbarMain;