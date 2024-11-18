import './style/landingPage.css';
import Calculator from './Calculator';
import { Link } from 'react-router-dom';


export default function LandingPage() {
    return (
        <div className='landingPage'>
            <div className="slider">
                <div className="blur_filter">
                    <div className="column">
                        <h4 className="title">Welcome to the Cleaning Masters</h4>
                        <div className="inf_text">
                            We are dedicated to providing top-quality cleaning services that bring comfort and freshness to your space. Our team of skilled professionals is here to handle all your cleaning needs, whether it’s for your home, office, or any other location. With a commitment to excellence and attention to detail, we make sure every job is completed to the highest standards.
                            Experience the ease of a clean, welcoming environment without the hassle—let us do the work for you!

                        </div>
                        <Link to="/contact"><button>Go to Contacts!</button></Link>
                    </div>
                    <div className="column"></div>
                </div>
                <div className='woman'></div>
            </div>
            
            <div className="frame"> 

                <section class="services-section">
                <div class="flip-card">
                    <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h3>ROMANTICKÁ ATMOSFÉRA</h3>
                        <p>Upratanie a romantika pre Vašu polovičku</p>
                        <p className='readmore_link'>read more >>></p>

                    </div>
                    {/* <div class="flip-card-back">
                        <p>We create a romantic atmosphere while providing cleaning services to make it extra special for your partner.</p>
                    </div> */}
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h3>TEPOVANIE</h3>
                        <p>Všetkých povrchov, vrátane kože</p>
                        <p className='readmore_link'>read more >>></p>

                    </div>
                    {/* <div class="flip-card-back">
                        <p>Our service covers cleaning all types of surfaces, including delicate leather.</p>
                    </div> */}
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h3>UPRATOVANIE</h3>
                        <p>Bytov a domov s dezinfekciou ZDARMA</p>
                        <p className='readmore_link'>read more >>></p>

                    </div>
                    {/* <div class="flip-card-back">
                        <p>Home cleaning services with free disinfection for a safer, fresher environment.</p>
                    </div> */}
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h3>UPRATOVANIE</h3>
                        <p>Kancelárskych a spoločenských priestorov</p>
                        <p className='readmore_link'>read more >>></p>
                   
                    </div>
                    {/* <div class="flip-card-back">
                        <p>Cleaning services for offices and social spaces to maintain a professional appearance.</p>
                    
                    </div> */}
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h3>UPRATOVANIE</h3>
                        <p>Obchodných priestorov a showroomov</p>
                        <p className='readmore_link'>read more >>></p>

                    </div>
                    {/* <div class="flip-card-back">
                        <p>Comprehensive cleaning for retail spaces and showrooms to enhance customer experience.</p>
                    </div> */}
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h3>ПРИБИРАННЯ КІМНАТ</h3>
                        <p>Obchodných priestorov a showroomov</p>
                        <p className='readmore_link'>read more >>></p>
                    </div>
                    {/* <div class="flip-card-back">
                        <p>Comprehensive cleaning for retail spaces and showrooms to enhance customer experience.</p>
                    </div> */}
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h3>МИЙКА ВІКОН</h3>
                        <p>Obchodných priestorov a showroomov</p>
                        <p className='readmore_link'>read more >>></p>
                    </div>
                    {/* <div class="flip-card-back">
                        <p>Comprehensive cleaning for retail spaces and showrooms to enhance customer experience.</p>
                    </div> */}
                    </div>
                </div>
                </section>


                <div className="block">
                    <div className="inf_block">
                        <h2>How to Order Cleaning Services</h2>

                        <div className="row">
                            <div className="column">
                                <div>
                                <h3>1. Choose Your Cleaning Type</h3>
                                <p className="text">
                                Decide what kind of cleaning service you need. We offer three main types:
                            
                                    <ul style={{marginLeft: "2rem"}}>
                                        <li>Office Cleaning: Perfect for workspaces, ensuring a clean and productive environment. </li>
                                        <li>Home Cleaning: Ideal for keeping your living space spotless and welcoming.</li>
                                        <li>Special Cleaning: Tailored for specific needs like deep cleaning or post-renovation cleanup.</li>
                                    </ul>
                                </p>
                                </div>

                                <div className='calc_img img'/>
                            </div>
                            <div className="column">
                                <div>
                                    <h3>2. Calculate Your Price</h3>
                                    <p className="text">
                                    Use our easy-to-use Cleaning Price Calculator
                                    </p>
                                </div>
                                <div className='price_img img'/>
                            </div>
                            <div className="column">
                                <div>
                                    <h3>3. Send Your Request</h3>
                                    <p className="text">
                                        Once you've calculated the price:

                                        <ul style={{marginLeft: "2rem"}}>
                                            <li>Click the "Send to Contact Us" button to transfer your cleaning details to our form automatically.</li>
                                            <li>Go to the Contact Us page, where your request will appear in the message box.</li>
                                            <li>Add any additional details (optional) and submit the form.</li>
                                        </ul>                                
                                    </p>
                                </div>
                            </div>
                            <div className="column">
                                <div>
                                    <h3>4. Confirm Your Booking</h3>
                                    <p className="text">
                                        After submitting the form, our team will review your request and get in touch with you
                                    </p>
                                </div>
                                <div className='form_img img'/>
                            </div>
                        </div>
                        <div className="row">
                            <a href="#calculator"><button className="contact_btn">Calculate price!</button></a>
                        </div>
                    </div>
                </div>

                </div>

                <div className="block" id="calculator">
                    <div className="inf_block calculator_block">
                        <h2 style={{color: 'white'}} className="calc_title">Calculate your cleaning cost</h2>
                        <Calculator />
                    </div>
                </div>

                <div className='frame'>

                <div className="block">
                    <div className='inf_block'>
                        <div className="column">
                            <h2>Stay Updated with Our Latest News!</h2>
                            <div className="newsletter">
                                <div className="input-row">
                                    <input placeholder="Your email address" className="email_input" type='email'/>
                                    <button>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
}
