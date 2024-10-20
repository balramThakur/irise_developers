import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Carousel from '../Components/Carousel';
import CardView from '../Components/CardView';
import CallIcon from '../Components/CallIcon';
import img1 from '../Images/cam-01- final.jpg';
import img3 from '../Images/Image10.jpeg';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

function Home() {
  const items = [
    <img src={img1} height={600} alt="Image" />,
    <img src={img3} height={600} alt="Image2" />,
    // Add more items as needed
  ];
  const ongingProjects = [
    {
      title: 'VIJAYDURG CHS. LTD.',
      description: <Link to="/vijaydurg">Show More <IoIosArrowDown/></Link>,
      image: img1,
    },
  ];
  const completedProjects = [
    {
      title: 'USHA KIRAN HEIGHTS',
      description: <Link to='/usakiran'>Show More <IoIosArrowDown/></Link>,
      image: img3,
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="top_container">
        <Carousel items={items} />
        <div className="title_ongoing_projects">
          <h1> ONGOING PROJECTS</h1>
          <span className='underline'></span>
        </div>
        <div className='card_view'>
          {ongingProjects.map((card, index) => (
            <CardView key={index} title={card.title} description={card.description} image={card.image} />
          ))}
        </div>

        <div className="title_ongoing_projects">
          <h1> COMPLETED PROJECTS</h1>
          <span className='underline'></span>
        </div>
        <div className='card_view'>
          {completedProjects.map((card, index) => (
            <CardView key={index} title={card.title} description={card.description} image={card.image} />
          ))}
        </div>
      </div>
      <CallIcon/>
      <Footer />
    </div>
  )
}

export default Home
