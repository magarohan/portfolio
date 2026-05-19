import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

import CV from "../../assets/Rahan Raj Magar CV.pdf";
import profileImage from "../../assets/profile_image.png";

const Hero = () => {
  return (
    <div id="home" className="container m-auto mt-16">
      <div className="container mx-auto pt-5 h-[750px] md:h-[100vh] flex sm:flex-col-reverse sm:pt-0">

        <div className="left mt-4 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full">
          <div className="info flex flex-col gap-3">
            <h2 className="text-5xl font-bold sm:text-[2rem]">
              Hello, I'm Rahan Raj Magar
            </h2>

            <TypeAnimation
              sequence={["Mobile Developer", 2000]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-blue-500 text-4xl font-bold sm:text-3xl"
            />

            <p className="text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]">
              An aspiring mobile developer with a passion for creating innovative and user-friendly applications. I focus on building smooth mobile experiences with clean UI and performance in mind.
            </p>
          </div>

          <div className="buttons flex gap-5">
            <a
              href="https://www.linkedin.com/in/rahan-raj-magar/"
              className="bg-black text-white px-10 py-2 rounded-lg font-bold hover:text-blue-500"
            >
              Hire Me
            </a>

            <a
              href={CV}
              className="flex items-center gap-2 bg-white border border-black px-7 py-2 rounded-lg font-bold hover:text-blue-500"
              download
            >
              CV <FiDownload />
            </a>
          </div>

          <div className="icons flex mt-5">
            <ul className="flex gap-5">
              <li>
                <a href="https://github.com/magarohan">
                  <AiFillGithub className="h-[1.8rem] w-[1.8rem] hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/rahan-raj-magar/">
                  <FaLinkedinIn className="h-[1.8rem] w-[1.8rem] hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/_rohan.magar_/">
                  <AiFillInstagram className="h-[1.8rem] w-[1.8rem] hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/MaGaRoHaN/">
                  <FaFacebook className="h-[1.8rem] w-[1.8rem] hover:scale-125" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="right flex-1 flex items-center justify-center">
          <div className="relative flex items-center justify-center">

            <div className="absolute w-[420px] h-[420px] bg-gradient-to-br from-blue-400 to-purple-500 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-2xl opacity-70 animate-pulse"></div>

            <div className="absolute w-[380px] h-[380px] bg-blue-300 rounded-[50%_50%_40%_60%/60%_40%_60%_40%] opacity-60"></div>

            <img
              src={profileImage}
              alt="profile"
              className="relative z-10 w-[360px] h-[360px] object-cover rounded-[50%_50%_40%_60%/60%_40%_60%_40%]"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;