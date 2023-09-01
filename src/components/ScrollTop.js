import React from 'react';
import { MDBBtn, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';

function ScrollTop() {
    let mybutton;

    window.onscroll = function () {
        mybutton = document.getElementById("btn-back-to-top");
        scrollFunction(mybutton);
    };

    function scrollFunction(mybutton) {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <MDBContainer fluid>

            <MDBBtn
                onClick={backToTop}
                id='btn-back-to-top'
                style={{
                    position: "fixed",
                    bottom: "40px",
                    left: "40px",
                    display: "none",
                }}
                className='btn-floating'
                color='dark'
                size='lg'>
                <MDBIcon fas icon="arrow-up" />
            </MDBBtn>
        </MDBContainer>
    );
}

export default ScrollTop;