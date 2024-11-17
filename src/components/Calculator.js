import { useState, useEffect } from "react";
import './style/calculator.scss';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
    toast.error("Minimal space for cleaning is 20!");
};


function Calculator() {
    const [size, setSize] = useState(20); // Default to the minimum value of 20
    const [placeType, setPlaceType] = useState('Office');
    const [cleaningStrength, setCleaningStrength] = useState('Easy');
    const [price, setPrice] = useState(0);
    const [priceChanged, setPriceChanged] = useState(false); // Tracks price change for animation

    const calculatePrice = (type, strength, currentSize) => {
        let basePrice = 0;

        if (type === 'Office') basePrice = 0.5;
        if (type === 'Home') basePrice = 0.3;
        if (type === 'Special') basePrice = 0.8;

        if (strength === 'Middle') basePrice *= 1.5;
        if (strength === 'Hard') basePrice *= 2;

        return (basePrice * parseFloat(currentSize || 0)).toFixed(2);
    };

    useEffect(() => {
        const newPrice = calculatePrice(placeType, cleaningStrength, size);

        // Trigger animation by toggling `priceChanged`
        if (newPrice !== price) {
            setPriceChanged(true);
            setTimeout(() => setPriceChanged(false), 300); // Animation duration matches SCSS transition
        }

        setPrice(newPrice);
    }, [size, placeType, cleaningStrength]);

    const handleSizeChange = (e) => {
        setSize(e.target.value); // Allow free typing
    };

    const handleBlur = () => {
        // Enforce minimum value of 20 when the input loses focus
        if (parseFloat(size) < 20 || isNaN(parseFloat(size))) {
            notify();
            setSize(20);
        }
    };

    return (
        <div className="calculator">
            <p>Enter size of place to clean (m²): </p>
            <input 
                placeholder="Enter space in square meters" 
                value={size} 
                onChange={handleSizeChange} 
                onBlur={handleBlur} // Enforce minimum value when leaving the field
                type="number" 
                min="20" 
            />

            <p>Enter type of your place (with rough estimates):</p>
            <select value={placeType} onChange={(e) => setPlaceType(e.target.value)}>
                <option value="Office">Office (Easy: €{calculatePrice('Office', 'Easy', size)}, Middle: €{calculatePrice('Office', 'Middle', size)}, Hard: €{calculatePrice('Office', 'Hard', size)})</option>
                <option value="Home">Home (Easy: €{calculatePrice('Home', 'Easy', size)}, Middle: €{calculatePrice('Home', 'Middle', size)}, Hard: €{calculatePrice('Home', 'Hard', size)})</option>
                <option value="Special">Special (Easy: €{calculatePrice('Special', 'Easy', size)}, Middle: €{calculatePrice('Special', 'Middle', size)}, Hard: €{calculatePrice('Special', 'Hard', size)})</option>
            </select>

            <p>Enter strength of cleaning (with rough estimates):</p>
            <select value={cleaningStrength} onChange={(e) => setCleaningStrength(e.target.value)}>
                <option value="Easy">Easy (€{calculatePrice(placeType, 'Easy', size)})</option>
                <option value="Middle">Middle (€{calculatePrice(placeType, 'Middle', size)})</option>
                <option value="Hard">Hard (€{calculatePrice(placeType, 'Hard', size)})</option>
            </select>

            {/* Price display with animation */}
            <div className={`price-display ${priceChanged ? 'animated' : ''}`}>
                <h3>Total Price: €{price}</h3>
            </div>

            <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
}

export default Calculator;
