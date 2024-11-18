import React from 'react';
import './style/CallUsButton.scss'; // Styles for the button

const CallUsButton = () => {
    const handleCall = () => {
        window.location.href = "tel:+421123456789"; // Replace with your company's phone number
    };

    return (
        <button className="call-us-button" onClick={handleCall}>
            <i class="fa-solid fa-phone"></i>  Call Us
        </button>
    );
};

export default CallUsButton;
