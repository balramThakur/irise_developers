import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import img1 from '../Images/cam-01- final.jpg';
import '../CSS/Vijaydurg.css';

function VijayDurg() {
    return (
        <div className='vijaydurg'>
            <Navbar />
            <div className="para-title">
                <h2>
                    VIJAYDURG CHS. LTD.
                </h2>
                <h3>
                    OLD SURVEY NO.131/10 NEW SURVEY 53/10 MAHAJANWADI MIRA ROAD (E)
                </h3>
            </div>
            <div className="main-photo">
                <img src={img1} alt="" />
            </div>

            <div className="para">
                The project Residential apartment is situated on OLD SURVEY NO.131/10 NEW SURVEY 53/10 MAHAJANWADI MIRA ROAD (E).
                <p>
                    Step into a world where modern luxury meets serene living at Vijaydurg. Nestled in the heart of Mumbai's bustling Mira Road East, this residential haven by Irise Developers promises an unparalleled lifestyle experience. Imagine coming home to a place where every detail is meticulously crafted to provide comfort, privacy, and exclusivity.

                    Vijaydurg offers more than just a concrete structure; it offers a sanctuary where tiredness fades away amidst resort-like surroundings. With 56 luxurious, environmentally friendly 1 BHK and 2 BHK homes, this project sets the benchmark for contemporary living.

                    Designed with utmost care and attention, each apartment boasts world-class amenities and top-of-the-line specifications. From 24-hour water supply and backup electricity to CCTV surveillance and security personnel, every aspect is tailored to enhance your quality of life.

                    Experience the difference between a house and a home at Vijaydurg, where every moment is filled with warmth, comfort, and bliss. Welcome to your new abode, where luxury meets tranquility, and urban living takes on a whole new meaning.
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403.7606637961515!2d72.8737607896135!3d19.268398786872318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0f55e0e04cf%3A0x1585398e1acc847a!2sVijaydurg%20CHS!5e0!3m2!1sen!2sin!4v1712644128993!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
            </div>


            <Footer />
        </div>
    )
}

export default VijayDurg
