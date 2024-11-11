import './style/landingPage.css';
import React, { useState } from 'react';

export default function LandingPage() { // Changed to "LandingPage"
    const [size, setSize] = useState('');
    const [placeType, setPlaceType] = useState('Office');
    const [cleaningStrength, setCleaningStrength] = useState('Easy');
    const [price, setPrice] = useState(null);

    // Price calculation logic
    const calculatePrice = () => {
        let basePrice = 0;

        // Base price based on type of place
        if (placeType === 'Office') basePrice = 0.5;
        if (placeType === 'Home') basePrice = 0.3;
        if (placeType === 'Special') basePrice = 0.8;

        // Adjust based on cleaning strength
        if (cleaningStrength === 'Middle') basePrice *= 1.5;
        if (cleaningStrength === 'Hard') basePrice *= 2;

        // Calculate final price
        const calculatedPrice = basePrice * parseFloat(size || 0);
        setPrice(calculatedPrice.toFixed(2));
    };

    return (
        <>
            <div className="slider" src="women.jpg">
                <div className="blur_filter">
                    <div className="column">
                        <h4 className="title">Welcome to the cleaning company site!</h4>
                        <div className="inf_text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                            natoque penatibus et magnis dis <br />parturient montes, nascetur ridiculus mus. 
                            Donec quam felis, ultricies nec, pellentesque <br />
                            eu, pretium quis, sem. Nulla consequat massa quis enim. 
                        </div>
                        <button>Go to Contacts!</button>
                    </div>
                    <div className="column"></div>
                </div>
            </div>
            
            <div className="frame">
                <div className="block">
                    <div className="inf_block">
                        <h2>We are providing cleaning at:</h2>
                        <div className="row">
                            <div className="column">
                                <div className="img">
                                    {/* Image or content goes here */}
                                </div>
                                <div className="card_inf">
                                    <div className="text">Offices</div>
                                    <button>From 50 EUR!</button> 
                                </div>
                            </div>
                            <div className="column">
                                <div className="img">
                                    {/* Image or content goes here */}
                                </div>
                                <div className="card_inf">
                                    <div className="text">Homes</div>
                                    <button>From 30 EUR!</button> 
                                </div> 
                            </div>
                            <div className="column">
                                <div className="img">
                                    {/* Image or content goes here */}
                                </div>
                                <div className="card_inf">
                                    <div className="text">Windows cleaning</div>
                                    <button>From 20 EUR!</button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="block">
                    <div className="inf_block">
                        <h2>Process of ordering cleaning</h2>
                        <div className="row">
                            <div className="column">
                                <h3>Contact us!</h3>
                                <div className="text">
                                    You can contact us, and within several days, you will receive an answer!
                                </div>
                            </div>
                            <div className="column">
                                <h3>Choose price!</h3>
                                <div className="text">
                                    After the initial communication, you can choose cleaning options and get a quote!
                                </div>
                            </div>
                            <div className="column">
                                <h3>Deadlines and other information!</h3>
                                <div className="text">
                                    We will determine cleaning timelines!
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <button className="contact_btn">Contact us</button>
                        </div>
                    </div>
                </div>

                <div className="block">
                    <div className="inf_block">
                        <h2>Stay Updated with Our Latest News!</h2>
                        <div className="newsletter">
                            <div className="input-row">
                                <input placeholder="Your email address" className="email_input" />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block">
                    <div className="inf_block">
                        <h2 className="calc_title">Calculate your cleaning cost</h2>
                        <div className="calculator">
                            <p>Enter size of place to clean (m²): </p>
                            <input 
                                placeholder="Enter space in square meters" 
                                value={size} 
                                onChange={(e) => setSize(e.target.value)} 
                            />

                            <p>Enter type of your place: </p>
                            <select value={placeType} onChange={(e) => setPlaceType(e.target.value)}>
                                <option>Office</option>
                                <option>Home</option>
                                <option>Special</option>
                            </select>

                            <p>Enter strength of cleaning:</p>
                            <select value={cleaningStrength} onChange={(e) => setCleaningStrength(e.target.value)}>
                                <option>Easy</option>
                                <option>Middle</option>
                                <option>Hard</option>
                            </select>

                            <button onClick={calculatePrice}>Calculate Price</button>

                            {/* Display price result */}
                            {price !== null && (
                                <div className="price-display">
                                    <h3>Total Price: €{price}</h3>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
