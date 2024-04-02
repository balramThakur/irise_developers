import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Carousel from '../Components/Carousel';

function Home() {
  const items = [
    <img src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape" alt="Image1" />,
    <img src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape" alt="Image2" />,
    <img src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape" alt="Image3" />,
    // Add more items as needed
  ];
  return (
    <div>
      <Navbar />
      <Carousel items={items} />
      <Footer />
    </div>
  )
}

export default Home
