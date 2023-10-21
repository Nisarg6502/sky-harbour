import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Logo from "../images/Logo.png"
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css"

function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted footer-whole'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom footer-top text-light'>
                <div className='me-5 d-none d-md-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div className='social-icons px-3'>
                    <a href='' className='me-5 text-reset '>
                        <MDBIcon fab icon="facebook-f" className='icon' size="xl" />
                    </a>
                    {/* <a href='' className='me-5 text-reset'>
                        <MDBIcon fab icon="twitter" className='icon' size="xl" />
                    </a> */}
                    <a href='' className='me-5 text-reset'>
                        <MDBIcon fab icon="instagram" className='icon' size="xl" />
                    </a>
                    <a href='' className='me-5 text-reset'>
                        <MDBIcon fab icon="linkedin" className='icon' size="xl" />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <img src={Logo} class="img-fluid" alt='Logo of SkyHarbour' />
                            <p>
                                At SkyHarbour Impex, we are passionate about delivering the freshest and finest selection of spices, agro, and biodegradable products to global markets, cultivating flavors that transcend borders.
                            </p>
                            <br />
                            <p><b>CIN NO:</b> U47990KA2023PTC175888<br /><b>GSTIN NO:</b> 29ABLCS2303K1Z4</p>
                        </MDBCol>

                        {/*Products*/}
                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                            <p className='my-2'>
                                <a href='#productsection' className='text-reset link'>
                                    Spices
                                </a>
                            </p>
                            <p className='my-2'>
                                <a href='#productsection' className='text-reset link'>
                                    Agro Products
                                </a>
                            </p>
                            <p className='my-2'>
                                <a href='#productsection' className='text-reset link'>
                                    Biodegradable Products
                                </a>
                            </p>
                        </MDBCol>

                        {/*Useful Links */}
                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6>
                            <p className='my-2'>
                                <a href='' className='text-reset link'>
                                    Home
                                </a>
                            </p>
                            <p className='my-2'>
                                <a href='#about' className='text-reset link'>
                                    About Us
                                </a>
                            </p>
                            <p className='my-2'>
                                <a href='#productsection' className='text-reset link'>
                                    Products
                                </a>
                            </p>
                            <p className='my-2'>
                                <a href='https://wa.me/+917899933077' className='text-reset link'>
                                    Contact Us
                                </a>
                            </p>
                        </MDBCol>

                        {/*Contact Details*/}
                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p className='my-2'>
                                <MDBIcon icon="map-marker-alt" size='lg' className="me-3" />
                                No.1-1165/1, Aiwan-E-Shahi, GB court, Gulbarga pincode - 585102 <br />State: Karnataka
                                <br />Country: India
                            </p>
                            <p className='my-2'>
                                <MDBIcon icon="envelope" className="me-3" />
                                <a href="mailto:skyharbour.impex@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>
                                    skyharbour.impex@gmail.com
                                </a>
                            </p>
                            <p className='my-2'>
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
                © 2023 Copyright: <a className='text-reset fw-bold' href=''>
                    SkyHarbour Impex Private Limited
                </a>
            </div>
        </MDBFooter >
    );

}

export default Footer;