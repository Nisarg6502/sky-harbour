import React from 'react'
import "./Certificates.css"
import Apeda from "../images/apeda-logo.png"
import Spices from "../images/spices-board-logo.png"
import FedExInd from "../images/federation-of-indian-export-organisations-seeklogo.com.png"
import FSSAI from "../images/fssai.png"

import {
    MDBCol,
    MDBRow,
} from 'mdb-react-ui-kit';

function Certificates() {
    return (
        <div id='certificates'>
            <div className='container p-5'>
                <div class="text-center mb-5 mt-5">
                    <h1 className='title px-5'>Certificates</h1>
                    <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s mt-3 cert-para para">Our commitment to excellence extends beyond the products we offer. We understand the importance of adhering to international standards and regulations to ensure that every shipment meets the highest quality and safety benchmarks.
                        <br />
                        <br />
                        Our dedication to transparency and integrity is reflected in the certificates we hold, each a testament to our unwavering commitment to providing you with the best.</p>
                </div>

                <hr className='mb-5 w-50 mx-auto horiline' />

                <MDBRow>
                    <MDBCol lg='3' md='6' className='mb-4'>
                        <img src={Apeda} className='img-fluid rounded zoom cert-logo' alt='Apeda Logo' />
                    </MDBCol>

                    <MDBCol lg='3' md='6' className='mb-4'>
                        <img
                            src={Spices}
                            className='img-fluid rounded zoom cert-logo'
                            alt='Spices Board India Logo'
                        />
                    </MDBCol>

                    <MDBCol lg='3' md='6' className='mb-4'>
                        <img
                            src={FedExInd}
                            className='img-fluid rounded zoom cert-logo'
                            alt='FIEO Logo'
                        />
                    </MDBCol>
                    <MDBCol lg='3' md='6' className='mb-4'>
                        <img
                            src={FSSAI}
                            className='img-fluid rounded zoom cert-logo'
                            alt='FSSAI Logo'
                        />
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
    );
}

export default Certificates;