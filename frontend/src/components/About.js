import React from "react";
import me from '../assets/pfp.png'; 

function About() {
  return (
    <div className="aboutpage">
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
        </div>
      </div>
    </div>
  );
}

export default About;
