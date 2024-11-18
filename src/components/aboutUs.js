// AboutUs.js
import React from 'react';
import './style/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className='title_block'>
          <p>ABOUT US</p>
      </div>

      <section className="about-us-section">
        <p className='title'>Welcome!</p>
        <p>
          We are a dedicated team of professionals passionate about delivering high-quality cleaning services to our clients. Our mission is to make your space a clean, comfortable, and refreshing environment that promotes well-being and productivity.
        </p>
        {/* <p>
          With a strong foundation in the industry, we focus on building long-lasting relationships with our clients, partners, and community. Your satisfaction is our priority, and we are always looking for new ways to improve and grow.
        </p> */}
      </section>

      <div className='image'>

        <p>Our Values: </p>
            <row>
                <div className='column'>
                  <p>Integrity</p>
                  <p className='text'>At Clean Masters, integrity is at the heart of everything we do. We take pride in being a company you can trust, delivering services that align with our commitment to honesty and transparency. From the moment you reach out to us, you’ll experience our dedication to upholding the highest ethical standards in every interaction.</p>
                </div>

                <div className='column'>
                  <p>Quality</p>
                  <p className='text'>Quality is not just a promise—it's our guarantee. We use premium products, cutting-edge equipment, and meticulous techniques to provide a spotless and hygienic environment. Every detail is carefully addressed, so you can enjoy a clean space that reflects the excellence we stand for.</p>
                </div>

                <div className='column'>
                  <p>Reliability</p>
                  <p className='text'>When it comes to cleaning, consistency matters. We understand the importance of being dependable and delivering top-notch results every time. With a team of highly trained professionals and a streamlined process, we ensure that your space is cleaned to perfection, on time, and to your satisfaction.</p>
                </div>
                
            </row>
          
      </div>

      <section className="about-us-section">
        
          
          <p>
          At Cleaning Masters, we understand that a clean space is not just about appearance—it’s about creating an environment that fosters comfort, health, and peace of mind.
        </p>
      </section>

    </div>
  );
};

export default AboutUs;