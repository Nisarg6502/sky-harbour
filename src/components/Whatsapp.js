import React, { useState } from 'react';
import WhatsappLogo from '../images/whatsapp.png';

import "./Whatsapp.css";

export default function Whatsapp() {
    return (
        <div>
            <a href="https://wa.me/+919421556115" class="float bounce" target="_blank">
                <img className='img-fluid' src={WhatsappLogo} alt='Whatsapp Logo' />
            </a>
        </div>
    );
}