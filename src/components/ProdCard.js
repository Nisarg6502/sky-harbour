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
    MDBTableHead,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,

} from 'mdb-react-ui-kit';

function ProdCard(props) {

    return (
        <div>
            <MDBCard className='h-100 prodcard'>
                <MDBCardImage
                    src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                    alt='...'
                    position='top'
                />
                <MDBCardBody>
                    <MDBCardTitle>{props.Title}</MDBCardTitle>
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
                                    <MDBModalTitle>Specifications</MDBModalTitle>
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
                                                <th scope='row'>Name</th>
                                                <td>{props.Title}</td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>Nutrients</th>
                                                <td>
                                                    <ul>
                                                        <li>Calories: {props.Nutrients.Calories}</li>
                                                        <li>Carbs: {props.Nutrients.Carbs}</li>
                                                        <li>Fiber: {props.Nutrients.Fiber}</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>Vitamins</th>
                                                <td>{props.Vitamins}</td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>Proteins</th>
                                                <td>{props.Proteins}</td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>Fats</th>
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