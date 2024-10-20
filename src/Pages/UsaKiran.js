import React from 'react'
import img3 from '../Images/Image10.jpeg';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../CSS/Vijaydurg.css';

function UsaKiran() {
  return (
    <div className='vijaydurg'>
      <Navbar />
      <div className="para-title">
        <h2>
          USHA KIRAN HEIGHTS
        </h2>
        <h3>
          Usha Kiran Heights, Vinayak Nagar, Near Vinayak Mandir, Bhayandar (W)-401101.
        </h3>
      </div>
      <div className="main-photo">
        <img src={img3} alt="" />
      </div>

      <div className="para">
        The project Residential apartment is situated on Usha Kiran Heights, Vinayak Nagar, Near Vinayak Mandir, Bhayandar (W)-401101.
        <p>
          Welcome to Usha Kiran Heights, an abode of magnificent Apartments with all modern features required for a soulful living. Nestled amidst a posh locality, Bhayandar East in Mumbai, this Residential haven flaunts a resort-like environment that effectively eases off the day's tiredness and makes you discover the difference between a concrete house and a loving home. The builders of the project, Sai Sparsh Developers have ensured that all homes at Usha Kiran Heights offer privacy and exclusivity to its inhabitants. It is a place that sets a contemporary lifestyle for its residents. The Usha Kiran Heights offers 43 luxurious, environmental friendly 1 BHK beautiful houses.

          The Usha Kiran Heights is meticulously designed and exclusively planned with world class amenities and top line specifications such as 24Hrs Water Supply, 24Hrs Backup Electricity, CCTV Cameras, Community Hall, Covered Car Parking, Fire Safety, Gym, Intercom, Landscaped Garden, Lift, Play Area and Security Personnel.

          Usha Kiran Heights Wise The project is situated at Mumbai. City Bhayandar East.
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d595.780239892185!2d72.85169628614952!3d19.30901013032099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b10d43684385%3A0x865752a89bcde3c8!2sUsha%20Kiran%20hights!5e0!3m2!1sen!2sin!4v1712644442139!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
      </div>

      <Footer />
    </div>
  )
}

export default UsaKiran
