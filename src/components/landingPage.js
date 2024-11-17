import './style/landingPage.css';
import Calculator from './Calculator';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <>
            <div className="slider">
                <div className="blur_filter">
                    <div className="column">
                        <h4 className="title">Welcome to the [Your Company]</h4>
                        <div className="inf_text">
                            We are dedicated to providing top-quality cleaning services that bring comfort and freshness to your space. Our team of skilled professionals is here to handle all your cleaning needs, whether it’s for your home, office, or any other location. With a commitment to excellence and attention to detail, we make sure every job is completed to the highest standards.
                            Experience the ease of a clean, welcoming environment without the hassle—let us do the work for you!

                        </div>
                        <Link to="/contact"><button>Go to Contacts!</button></Link>
                    </div>
                    <div className="column"></div>
                </div>
            </div>
            
            <div className="frame"> 

                <section class="services-section">
                <div class="flip-card">
                    <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h3>ROMANTICKÁ ATMOSFÉRA</h3>
                        <p>Upratanie a romantika pre Vašu polovičku</p>
                    </div>
                    <div class="flip-card-back">
                        <p>We create a romantic atmosphere while providing cleaning services to make it extra special for your partner.</p>
                    </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h3>TEPOVANIE</h3>
                        <p>Všetkých povrchov, vrátane kože</p>
                    </div>
                    <div class="flip-card-back">
                        <p>Our service covers cleaning all types of surfaces, including delicate leather.</p>
                    </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h3>UPRATOVANIE</h3>
                        <p>Bytov a domov s dezinfekciou ZDARMA</p>
                    </div>
                    <div class="flip-card-back">
                        <p>Home cleaning services with free disinfection for a safer, fresher environment.</p>
                    </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h3>UPRATOVANIE</h3>
                        <p>Kancelárskych a spoločenských priestorov</p>
                    </div>
                    <div class="flip-card-back">
                        <p>Cleaning services for offices and social spaces to maintain a professional appearance.</p>
                    </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h3>UPRATOVANIE</h3>
                        <p>Obchodných priestorov a showroomov</p>
                    </div>
                    <div class="flip-card-back">
                        <p>Comprehensive cleaning for retail spaces and showrooms to enhance customer experience.</p>
                    </div>
                    </div>
                </div>
                </section>


                <div className="block">
                    <div className="inf_block">
                        <h2>How to Order Cleaning Services</h2>
                        <div className="row">
                            <div className="column">
                                <h3>1. Reach Out!</h3>
                                <p className="text">
                                    Getting started is easy. Simply contact us through our website, email, or phone, and our friendly team will get back to you within a few days to discuss your specific cleaning needs. We’re here to answer any initial questions and provide guidance on the services that might work best for you.
                                </p>
                            </div>
                            <div className="column">
                                <h3>2. Choose Your Options and Get a Quote</h3>
                                <p className="text">
                                After the initial contact, you’ll receive a list of cleaning packages and options tailored to your needs. We offer flexible pricing based on the type and frequency of cleaning you need. Once you've reviewed your options, we’ll provide a clear, transparent quote with no hidden fees, so you know exactly what to expect.
                                </p>
                            </div>
                            <div className="column">
                                <h3>3. Contact us and set Plan the Details</h3>
                                <p className="text">
                                    We understand that timing is important. After choosing your preferred service, we’ll work together to finalize the timeline, ensuring that cleaning fits seamlessly into your schedule. We’ll also confirm any specific details, like areas of focus, special instructions, or requests, to make sure everything is done just the way you want.
                                </p>
                            </div>
                            <div className="column">
                                <h3>4. Confirm and Relax</h3>
                                <p className="text">
                                    Once everything is arranged, we’ll confirm the schedule and all details with you one last time. From here, you can relax and look forward to a spotless, refreshed space. We take pride in handling every step with care and efficiency to ensure a top-quality experience for our clients.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <Link to="/contact"><button className="contact_btn">Contact Us!</button></Link>
                        </div>
                    </div>
                </div>

                </div>

                <div className="block">
                    <div className="inf_block calculator_block">
                        <h2 style={{color: 'white'}} className="calc_title">Calculate your cleaning cost</h2>
                        <Calculator/>
                    </div>
                </div>

                <div className='frame'>

                <div className="block">
                    <div className='inf_block'>
                        <div className="column">
                            <h2>Stay Updated with Our Latest News!</h2>
                            <div className="newsletter">
                                <div className="input-row">
                                    <input placeholder="Your email address" className="email_input" />
                                    <button>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </>
    );
}
