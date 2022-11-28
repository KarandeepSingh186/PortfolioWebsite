import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Aboutcontent from '../components/Aboutcontent';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About" text="I am a Full Stack Web Developer" />
      <Aboutcontent />
      <Footer />
    </div>
  );
};

export default About;
