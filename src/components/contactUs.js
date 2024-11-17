import './style/contactus.scss';

function ContactUs(){
    return (
        <section className='contact_section'>
            <div className='title'>
                <p>Contact Us</p>
            </div>

            <p className='p_title'>Let`s Start a Conversation</p>
            <div className='row'>
                <div className='column'>
                    <p>Contact us with: </p>
                    <p>Business Name: [Your Company]</p>

                    <p>Phone Number: <a href='tel:+421 123 456 789'>+421 123 456 789</a></p>

                    <p>Email: <a href="mailto: info@sparklecleaners.sk">info@sparklecleaners.sk</a></p>

                    <p>Business Hours:</p>

                    <ul>
                        <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                        <li>Saturday: 9:00 AM - 3:00 PM</li>
                        <li>Sunday: Closed</li>
                    </ul>

                    <p>Social Media:</p>

                    <ul style={{padding: '0px'}}>
                        <li><i class="fab fa-facebook-square" style={{ color: '#4267B2', fontSize: '24px' }}></i> Facebook: <a href='#'>facebook.com/SparkleCleaners</a></li>
                        <li><i class="fab fa-instagram-square" style={{ color: 'red', fontSize: '24px' }}></i> Instagram: <a href='#'>instagram.com/SparkleCleaners</a></li>
                        <li><i class="fab fa-twitter-square" style={{ color: '#1DA1F2', fontSize: '24px' }}></i> Twitter: <a href='#'>twitter.com/SparkleCleaners</a></li>
                    </ul>
                    
                    
                </div>
                <form className='column'>
                    <p>Or leave a message for us:</p>
                    <label>Name: </label>
                    <input placeholder='Enter your name: '/>

                    <label>Enter your mail: </label>
                    <input placeholder='Enter your email: ' type='email'/>

                    <label>Text of a message: </label>
                    <textarea placeholder='Enter your message: '/>

                    <button>Send a message!</button>
                </form>
            </div>
        </section>
    )
}

export default ContactUs;