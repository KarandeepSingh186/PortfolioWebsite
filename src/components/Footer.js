import './FooterStyles.css';
import React from 'react';
import {
  // FaFacebook,
  // FaTwitter,
  // FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaHome,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={25}
              style={{
                color: '#fff',
                marginRight: '1.7rem',
                marginTop: '1rem',
                marginLeft: '-0.1rem',
              }}
            />
            <div>
              <p>Jaipur, Rajasthan</p>
              <p>India</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              +91-9799220003
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              ks.KarandeepSingh321@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Skillset</h4>
          <p>
            HTML CSS JavaScript ReactJS NodeJS ExpressJS MongoDB Java Github{' '}
          </p>
          <p>Link = github.com/KarandeepSingh186</p>
          {/* <div className="social">
            <FaFacebook
              size={30}
              style={{ color: '#fff', marginRight: '1rem' }}
            />
            <FaTwitter
              size={30}
              style={{ color: '#fff', marginRight: '1rem' }}
            />
            <FaLinkedin
              size={30}
              style={{ color: '#fff', marginRight: '1rem' }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
