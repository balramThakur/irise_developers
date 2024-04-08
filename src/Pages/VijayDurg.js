import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import img1 from '../Images/img1.jpeg';
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

                    Vijaydurg offers more than just a concrete structure; it offers a sanctuary where tiredness fades away amidst resort-like surroundings. With 43 luxurious, environmentally friendly 1 BHK and 2 BHK homes, this project sets the benchmark for contemporary living.

                    Designed with utmost care and attention, each apartment boasts world-class amenities and top-of-the-line specifications. From 24-hour water supply and backup electricity to CCTV surveillance and security personnel, every aspect is tailored to enhance your quality of life.

                    Experience the difference between a house and a home at Vijaydurg, where every moment is filled with warmth, comfort, and bliss. Welcome to your new abode, where luxury meets tranquility, and urban living takes on a whole new meaning.
                </p>
            </div>

            <Footer />
        </div>
    )
}

export default VijayDurg
