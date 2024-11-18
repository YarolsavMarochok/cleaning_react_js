import './style/contactus.scss';
import { useContext } from "react";
import { MessageContext } from "./MessageContext";


function ContactUs(){
    const { message } = useContext(MessageContext);

    return (
        <section className='contact_section'>
            <div className='title'>
                <p>Contact Us</p>
            </div>

            <div className='row'>
                <form className='column'>
                    <p className='p_title'>Leave a message for us:</p>

                    <label>Name: </label>
                    <input placeholder='Enter your name: ' required/>

                    <label>Enter your mail: </label>
                    <input placeholder='Enter your email: ' type='email' required/>

                    <label>Text of a message: </label>
                    <textarea placeholder='Enter your message: ' value={message}  required
                // readOnly 
                // placeholder="Message from Calculator will appear here..." 
                rows={10} 
                cols={50}/>

                    <button>Confirm booking!</button>
                </form>
            </div>
        </section>
    )
}

export default ContactUs;