// AboutPage.js
import React from 'react';
import '../CSS/About.css'; // Import the CSS file for styling
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CallIcon from '../Components/CallIcon';
import about from '../Images/About.png';
import volunteering from '../Images/volunteering.png';
import fairtrade from '../Images/fair-trade.png';
import star from '../Images/star.png';
import speed from '../Images/speed.png';
import owner1 from '../Images/Owner1.jpeg';
import owner2 from '../Images/Owner2.jpeg';
import owner3 from '../Images/Owner3.jpeg';
import logo from '../Images/I_Rise_Logo-removebg.png';

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <div className="about-content">
        <div className="about-image">
          {/* <img src={about} alt="About Us" /> */}
          <h1>
            OUR DEVELOPMENT YOUR'S ACKNOWELDGEMENT
          </h1>
        </div>
        <h1>About Us</h1>
        {/* <div className="logos">
          <img src={logo} alt="" />
        </div> */}
        <p>
        At Irise Developer, we are dedicated to transforming the urban landscape by redeveloping residential and commercial properties across Mumbai. With a focus on sustainability, modern design, and community well-being, we specialize in revitalizing old structures into innovative, eco-friendly spaces that align with the needs of today’s city dwellers.
        </p>
        <p>
        Our mission is to breathe new life into Mumbai’s aging buildings, creating spaces that are not only functional but also aesthetically inspiring and environmentally responsible. We collaborate closely with architects, engineers, and the local community to ensure that every project we undertake enhances the quality of life for residents while contributing to the city's ever-evolving skyline.
        </p>

        <p>
        As a team of passionate developers, we are committed to preserving Mumbai’s rich heritage while embracing cutting-edge technologies and sustainable practices to create a better tomorrow. At Irise Developer, we don't just rebuild; we reimagine possibilities, fostering growth and innovation in every project we undertake.
        </p>
        <div className="features">
          <div>
            <img src={volunteering} alt="" />
            <h4>
              UNITY
            </h4>
            <p>
              In the realm of teamwork, success often eludes even the most talented groups when unity of purpose is lacking. Here at Vanguard Realty, we are bound together by a common vision: to establish Vanguard as the epitome of reliability and excellence in the real estate industry, not only domestically but on a global scale. Our journey thus far has been marked by triumphs we collectively cherish, fueled by our commitment to fostering a culture defined by trust and transparency. We stand resolute, unified in our pursuit of excellence, both within our organization and in our interactions with the world beyond.
            </p>
          </div>

          <div>
            <img src={fairtrade} alt="" />
            <h4>
              RESPONSIBILITY
            </h4>
            <p>
              At Irise Developers, we hold a steadfast belief that setting goals is merely the first step. What truly matters is assuming the responsibility for achieving those goals with unwavering commitment, perseverance, and dedicated effort, all orchestrated in a meticulously planned, goal-oriented manner. We understand that success is not merely a destination but a journey, one that demands our continual dedication and focus to navigate with precision and purpose.
            </p>
          </div>
          <div>
            <img src={star} alt="" />
            <h4>
              AMBITION
            </h4>
            <p>
              We've internalized a fundamental truth: big goals are the catalysts for significant successes. At Irise Developers, we prioritize meticulous planning and unwavering stability to set exceptionally high standards, propelling us toward the realization of our time-bound objectives. By consistently challenging ourselves to reach new heights, we not only meet but surpass our aspirations, embodying a commitment to excellence that defines our ethos at every turn.
            </p>
          </div>
          <div>
            <img src={speed} alt="" />
            <h4>
              SPEED
            </h4>
            <p>
              In the dynamic landscape of the realty industry, technological advancement is not just an option but a necessity. At Irise Developers, we embrace this imperative with fervor, recognizing that agility and innovation are paramount to our success. With a proactive approach, we adeptly acquire new skills and swiftly realign our operational processes to harness the power of emerging technologies. Prepared to confront challenges head-on, we stand at the forefront of progress, ensuring that we remain at the vanguard of innovation in the ever-evolving realm of real estate.
            </p>
          </div>

        </div>
      </div>
      <div className='ownerInfo'>
        <div>
          <img src={owner1} alt="owner1" />
          <p>
              Mr. Brijesh R Tiwari
          </p>
        </div>

        <div>
          <img src={owner2} alt="owner1" />
          <p>
            Mr. Rahul B Routray
          </p>
        </div>

        <div>
          <img src={owner3} alt="owner1" />
          <p>
            Mr. Kasturchand Ratilal Ramina
          </p>
        </div>
      </div>
      <CallIcon />
      <Footer />
    </div>
  );
};

export default About;
