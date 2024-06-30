import React from "react";
import me from '../assets/pfp.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function About() {
  return (
    <div className="about-page">
      <div className="content">
        <img src={me} alt="Rohan Magar" className="profile-pic-about" />
        <div className="info">
          <div className="about">About me</div>
          <div className="info-item">
            <span className="heads">Name: </span>
            <span className="values">Rohan Magar</span>
          </div>
          <div className="info-item">
            <span className="heads">Address: </span>
            <span className="values">Boudha, Kathmandu</span>
          </div>
          <div className="info-item">
            <span className="heads">Phone: </span>
            <span className="values">9803853233</span>
          </div>
          <div className="info-item">
            <span className="heads">E-mail: </span>
            <span className="values">magarrohan193@gmail.com</span>
          </div>
          <div className="socials">
            <a href="https://www.instagram.com/_rohan.magar_/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x"/>
            </a>
            <a href="https://github.com/magarohan" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>
            <a href="https://www.linkedin.com/in/rahan-raj-magar/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
