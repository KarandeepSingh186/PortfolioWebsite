import './AboutcontentStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import AboutImg1 from './aboutImg1.jpg';
import AboutImg2 from './aboutImg2.jpg';

const Aboutcontent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'am in 3rd year of Bachelor of Technology in Computer Science at
          JECRC University
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={AboutImg2} className="img" alt="True" />
          </div>
          <div className="img-stack bottom">
            <img src={AboutImg1} className="img" alt="True" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutcontent;
