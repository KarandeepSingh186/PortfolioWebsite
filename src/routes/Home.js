import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import Work from '../components/Work';
import Aboutcontent from '../components/Aboutcontent';
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <Aboutcontent />
      <Footer />
    </div>
  );
};

export default Home;
