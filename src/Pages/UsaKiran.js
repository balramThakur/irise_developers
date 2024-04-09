import React from 'react'
import img3 from '../Images/img3.jpeg';
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
          OLD SURVEY NO.131/10 NEW SURVEY 53/10 MAHAJANWADI MIRA ROAD (E)
        </h3>
      </div>
      <div className="main-photo">
        <img src={img3} alt="" />
      </div>

      <div className="para">
        The project Residential apartment is situated on OLD SURVEY NO.131/10 NEW SURVEY 53/10 MAHAJANWADI MIRA ROAD (E).
        <p>
          Welcome to Usha Kiran Heights, an abode of magnificent Apartments with all modern features required for a soulful living. Nestled amidst a posh locality, Bhayandar East in Mumbai, this Residential haven flaunts a resort-like environment that effectively eases off the day's tiredness and makes you discover the difference between a concrete house and a loving home. The builders of the project, Sai Sparsh Developers have ensured that all homes at Usha Kiran Heights offer privacy and exclusivity to its inhabitants. It is a place that sets a contemporary lifestyle for its residents. The Usha Kiran Heights offers 43 luxurious, environmental friendly 1 BHK beautiful houses.

          The Usha Kiran Heights is meticulously designed and exclusively planned with world class amenities and top line specifications such as 24Hrs Water Supply, 24Hrs Backup Electricity, CCTV Cameras, Community Hall, Covered Car Parking, Fire Safety, Gym, Intercom, Landscaped Garden, Lift, Play Area and Security Personnel.

          Usha Kiran Heights Wise The project is situated at Mumbai. City Bhayandar East.
        </p>
      </div>

      <Footer />
    </div>
  )
}

export default UsaKiran
