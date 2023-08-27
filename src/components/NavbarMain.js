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

function NavbarMain() {
    const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

    return (

        <MDBNavbar className="main-navbar mt-2" expand='lg' light>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'><img src={Logo} class="img-fluid logo" /></MDBNavbarBrand>
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
                            <MDBNavbarLink className="link" href='#'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink className="link" href='#'>About</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink className="link" href='#'>
                                Products
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink className="link" href='#'>
                                Gallery
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink className="link" href='#'>
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