import { Component } from 'react';
import './style/navMenu.css';

export default function navMenu(){
    return(
        <div class="nav_menu">
            <p>LOGO / TITLE</p>

            <ul>
                <li>Home</li>
                <li>Our team</li>
                <li>Contact Us</li>
                <li>Price list</li>
            </ul>
        </div>
    )
}