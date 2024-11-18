import './style/pricelist.css';

import Calculator from './Calculator';

function PriceList() {
    return(
        <>
            <p className='price_title'>
                Price List 
            </p>
            <section className='price_block'>
                <div className='column'>

                    <p className='title'>Welcome to our Price List page!</p>

                    We know that each space is unique, and so are your cleaning needs. That’s why we offer a customizable pricing calculator to help you quickly estimate the cost of our services. Simply enter the details of your space, select the type of cleaning you need, and let our calculator do the rest.


                    <ul>
                        <li>Enter space in square meters </li>
                        <li>Choose type of your place</li>
                        <li>Enter strength of cleaning</li>
                        <li>Done!</li>
                    </ul>
                </div>
                <div className="column">
                    <Calculator/>
                </div>
            </section>
        </>
    )
}

export default PriceList;