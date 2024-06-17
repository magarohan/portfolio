import React from "react";
import me from '../assets/pfp.png'; 

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div>
          <div className="hello">Hello!</div>
          <div className="title">
            I'm <div className="name">Rohan Magar</div>
          </div>
          <div className="sub-title">A Fullstack Web Developer</div>
        </div>
        <img src={me} alt="Rohan Magar" className="profile-pic" />
      </div>
    </div>
  );
}

export default Home;
