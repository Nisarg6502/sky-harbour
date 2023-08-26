import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Logo from "../images/Logo.png"
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css"

function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted footer-whole'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom footer-top'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div className='social-icons'>
                    <a href='' className='me-5 text-reset icon'>
                        <MDBIcon fab icon="facebook-f" size="xl" />
                    </a>
                    <a href='' className='me-5 text-reset icon'>
                        <MDBIcon fab icon="twitter" size="xl" />
                    </a>
                    <a href='' className='me-5 text-reset icon'>
                        <MDBIcon fab icon="instagram" size="xl" />
                    </a>
                    <a href='' className='me-5 text-reset icon'>
                        <MDBIcon fab icon="linkedin" size="xl" />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <img src={Logo} class="img-fluid" />
                            <p>
                                At Sky Harbour Impex, we are passionate about delivering the freshest and finest selection of vegetables, fruits, and spices to global markets, cultivating flavors that transcend borders.
                            </p>
                        </MDBCol>

                        {/*Products*/}
                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                            <p>
                                <a href='#!' className='text-reset link'>
                                    Fruits
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset link'>
                                    Vegetables
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset link'>
                                    Spices
                                </a>
                            </p>
                        </MDBCol>

                        {/*Useful Links */}
                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6>
                            <p>
                                <a href='' className='text-reset link'>
                                    Home
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset link'>
                                    About Us
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset link'>
                                    Orders
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset link'>
                                    Contact Us
                                </a>
                            </p>
                        </MDBCol>

                        {/*Contact Details*/}
                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="map-marker-alt" size='lg' className="me-3" />
                                New York, NY 10012, US
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                info@example.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /><a href="tel:+917899933077" style={{
                                    textDecoration: "none", color: "inherit",
                                }}>+91 7899933077</a>

                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            {/* Copyright */}
            <div className='text-center p-4'>
                © 2023 Copyright: <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    SkyHarbour Impex Pvt. Ltd.
                </a>
            </div>
        </MDBFooter >
    );

}

export default Footer;