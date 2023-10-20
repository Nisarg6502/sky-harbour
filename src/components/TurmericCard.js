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
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBListGroup,
    MDBListGroupItem,
    MDBCarousel,
    MDBCarouselItems,
    MDBCarouselItem


} from 'mdb-react-ui-kit';

function TurmericCard(props) {
    return (
        <div className='flex-grow-1'>
            <MDBCard className='prodcard'>
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
                {/* <MDBCardImage
                    src={props.Image}
                    alt={props.Title + '-Image'}
                    position='top'
                /> */}
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
                                        {/* <MDBTableHead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>First</th>
                    </tr>
                </MDBTableHead> */}
                                        <MDBTableBody>
                                            <tr>
                                                <th className='fw-bold' scope='row'>Name</th>
                                                <td>{props.Title}</td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold' scope='row'>Origin</th>
                                                <td>
                                                    {props.Origin}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold' scope='row'>Curcumin</th>
                                                <td>{props.Curcumin}</td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold' scope='row'>Description</th>
                                                <td>{props.Description}</td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold' scope='row'>Benefits</th>
                                                <td>

                                                    <MDBListGroup light small>
                                                        <MDBListGroupItem className='bg-transparent px-3 p-1'>{props.Benefits.first}</MDBListGroupItem>
                                                        <MDBListGroupItem className='bg-transparent px-3 p-1'>{props.Benefits.second}</MDBListGroupItem>
                                                        <MDBListGroupItem className='bg-transparent px-3 p-1'>{props.Benefits.third}</MDBListGroupItem>
                                                        <MDBListGroupItem className='bg-transparent px-3 p-1'>{props.Benefits.fourth}</MDBListGroupItem>
                                                    </MDBListGroup>
                                                </td>
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

export default TurmericCard;