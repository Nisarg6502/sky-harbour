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

} from 'mdb-react-ui-kit';
import './ProdCard.css';

function ProdCard(props) {

    return (
        <div className='flex-grow-1'>
            <MDBCard className='prodcard'>
                <MDBCardImage
                    src={props.Image}
                    alt={props.Title + '-Image'}
                    position='top'
                />
                <MDBCardBody>
                    <MDBCardTitle className='prodcardtitle fs-3 fw-bold'>{props.Title}</MDBCardTitle>
                    <MDBCardText>
                        {props.Description}
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
                                                <th className='fw-bold' scope='row'>Nutrients</th>
                                                <td>
                                                    <ul>
                                                        <li>Calories: {props.Nutrients.Calories}</li>
                                                        <li>Carbs: {props.Nutrients.Carbs}</li>
                                                        <li>Fiber: {props.Nutrients.Fiber}</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold' scope='row'>Vitamins</th>
                                                <td>{props.Vitamins}</td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold' scope='row'>Proteins</th>
                                                <td>{props.Proteins}</td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold' scope='row'>Fats</th>
                                                <td>{props.Fats}</td>
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
    )
}

export default ProdCard;