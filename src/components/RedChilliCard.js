import React from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBTable,
    MDBTableBody,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCarousel,
    MDBCarouselItem


} from 'mdb-react-ui-kit';

function RedChilliCard(props) {
    return (
        <div className='flex-grow-1'>
            <MDBCard className='prodcard'>
                {/* <MDBCardImage
                    src={props.Image}
                    alt={props.Title + '-Image'}
                    position='top'
                /> */}
                <MDBCarousel>
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={1}
                        src={props.Image1}
                        alt={props.Title + '-Image'}
                        position='top'

                    />
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={2}
                        src={props.Image2}
                        alt={props.Title + '-Image'}
                        position='top'

                    />
                </MDBCarousel>
                <MDBCardBody>
                    <MDBCardTitle className='prodcardtitle fs-3 fw-bold'>{props.Title}</MDBCardTitle>
                    <MDBCardText>
                        {props.Intro}
                    </MDBCardText>
                    <div className='text-center'>
                        <MDBBtn className='mt-3 togBut modBut text-capitalize' color='dark' onClick={props.toggleShow}>Learn More</MDBBtn>
                    </div>
                    <MDBModal show={props.optSmModal} tabIndex='-1' setShow={props.setOptSmModal}>
                        <MDBModalDialog size='lg' centered>
                            <MDBModalContent>
                                <MDBModalHeader>
                                    <MDBModalTitle className='mx-auto text-center w-full fw-bold fs-4'>Specifications</MDBModalTitle>
                                    <MDBBtn className='btn-close' color='none' onClick={props.toggleShow}></MDBBtn>
                                </MDBModalHeader>
                                <MDBModalBody>
                                    <MDBTable striped>
                                        <MDBTableBody>
                                            <tr>
                                                <th className='fw-bold' scope='row'>Name</th>
                                                <td>{props.Title}</td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold' scope='row'>Description</th>
                                                <td>{props.Description}</td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold' scope='row'>Origin</th>
                                                <td>{props.Origin}</td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold' scope='row'>Color</th>
                                                <td>{props.Color}</td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold' scope='row'>Flavour</th>
                                                <td>{props.Flavour}</td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold' scope='row'>Pungency in SHU</th>
                                                <td>{props.Pungency}</td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold' scope='row'>Style</th>
                                                <td>{props.Styles}</td>
                                            </tr>

                                        </MDBTableBody>
                                    </MDBTable>
                                </MDBModalBody>
                            </MDBModalContent>
                        </MDBModalDialog>
                    </MDBModal>
                </MDBCardBody>
            </MDBCard>

        </div>
    );
}

export default RedChilliCard;