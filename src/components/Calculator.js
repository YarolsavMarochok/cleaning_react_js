import { useState, useEffect } from "react";
import './style/calculator.scss';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { MessageContext } from "./MessageContext";

function Calculator({ setContactMessage }) {
    const [size, setSize] = useState(20);
    const [placeType, setPlaceType] = useState('Office');
    const [cleaningStrength, setCleaningStrength] = useState('Easy');
    const [price, setPrice] = useState(0);
    const [priceChanged, setPriceChanged] = useState(false);

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
        if (newPrice !== price) {
            setPriceChanged(true);
            setTimeout(() => setPriceChanged(false), 300);
        }
        setPrice(newPrice);
    }, [size, placeType, cleaningStrength]);

    const { setMessage } = useContext(MessageContext);

    const handleSend = () => {
        const message = `
        Cleaning Request:
        - Size: ${size} m²
        - Type: ${placeType}
        - Strength: ${cleaningStrength}
        - Total Price: €${price}
        `;
        setMessage(message);
        toast.success("Details sent to Contact Us page!");
    };

    return (
        <div className="calculator">
            <p>Enter size of place to clean (m²): </p>
            <input 
                placeholder="Enter space in square meters" 
                value={size} 
                onChange={(e) => setSize(e.target.value)} 
                onBlur={() => {
                    if (parseFloat(size) < 20 || isNaN(parseFloat(size))) {
                        toast.error("Minimal space for cleaning is 20!");
                        setSize(20);
                    }
                }} 
                type="number" 
                min="20" 
            />

            <p>Enter type of your place:</p>
            <select value={placeType} onChange={(e) => setPlaceType(e.target.value)}>
                <option value="Office">Office</option>
                <option value="Home">Home</option>
                <option value="Special">Special</option>
            </select>

            <p>Enter strength of cleaning:</p>
            <select value={cleaningStrength} onChange={(e) => setCleaningStrength(e.target.value)}>
                <option value="Easy">Easy</option>
                <option value="Middle">Middle</option>
                <option value="Hard">Hard</option>
            </select>

            <div className={`price-display ${priceChanged ? 'animated' : ''}`}>
                <h3>Total Price: €{price}</h3>
            </div>

            <button className="info_tocontact" onClick={handleSend}>Send to Contact Us</button>

            <ToastContainer position="top-right" autoClose={3000} theme="colored" />
        </div>
    );
}

export default Calculator;
