// AboutUs.js
import React from 'react';
import './style/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className='title_block'>
          <p>ABOUT US</p>
          <p>Welcome to [Your Company Name]</p>
      </div>

      <section className="about-us-section">
        <p className='title'>Welcome!</p>
        <p>
          We are a dedicated team of professionals passionate about delivering high-quality cleaning services to our clients. Our mission is to make your space a clean, comfortable, and refreshing environment that promotes well-being and productivity.

          With years of experience in the industry, we pride ourselves on our attention to detail, reliability, and commitment to excellence. From homes to businesses, we tailor our cleaning solutions to meet each client’s specific needs, ensuring exceptional results every time.

        </p>
        <p>
          With a strong foundation in the industry, we focus on building long-lasting relationships with our clients, partners, and community. Your satisfaction is our priority, and we are always looking for new ways to improve and grow.
        </p>
      </section>

      <div className='image'></div>

      <section className="about-us-section">
        
        <p>Our Values: </p>
          <ul>
              <li>Integrity</li>
              <li>Quality</li>
              <li>Reliability</li>
          </ul>
          
          <p>
          At [Your Company Name], we understand that a clean space is not just about appearance—it’s about creating an environment that fosters comfort, health, and peace of mind. Our friendly, professional team uses eco-friendly products and the latest cleaning techniques to bring a spotless shine to every corner.

          Thank you for choosing us! We look forward to serving you and helping you enjoy a cleaner, brighter space.

        </p>
      </section>

    </div>
  );
};

export default AboutUs;