import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Carousel from '../Components/Carousel';
import CardView from '../Components/CardView';
import CallIcon from '../Components/CallIcon';
import img1 from '../Images/img1.jpeg';
// import LoadingBar from '../Components/LoadingBar';

function Home() {
  const items = [
    <img src={img1} height={600} alt="Image1" />,
    <img src="https://source.unsplash.com/random/1920x1080/?lands,landscape" height={600} alt="Image2" />,
    <img src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape" height={600} alt="Image3" />,
    // Add more items as needed
  ];
  const ongingProjects = [
    {
      title: 'Card 1',
      description: 'Description for card 1',
      image: 'https://source.unsplash.com/random/1920x1080/?building,landscape',
    },
    {
      title: 'Card 2',
      description: 'Description for card 2',
      image: 'https://source.unsplash.com/random/1920x1080/?building,landscape',
    },
    {
      title: 'Card 3',
      description: 'Description for card 2',
      image: 'https://source.unsplash.com/random/1920x1080/?building,landscape',
    },
    // Add more cards as needed
  ];
  const completedProjects = [
    {
      title: 'Card 1',
      description: 'Description for card 1',
      image: 'https://source.unsplash.com/random/1920x1080/?building,landscape',
    },
    {
      title: 'Card 2',
      description: 'Description for card 2',
      image: 'https://source.unsplash.com/random/1920x1080/?building,landscape',
    },
    {
      title: 'Card 3',
      description: 'Description for card 2',
      image: 'https://source.unsplash.com/random/1920x1080/?building,landscape',
    },
    // Add more cards as needed
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
