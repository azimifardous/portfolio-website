import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <>
      <div className="text-white">
        <h1 className="font-bold text-[30px] lg:text-[50px]">Ahmad Azimi</h1>
        <h2 className="text-[15px] lg:text-[20px] mt-[-10px]">
          Full-Stack Developer
        </h2>
        <p className="text-[15px] mt-[10px] opacity-80">
          I create seamless, visually appealing, and <br />
          user-friendly digital solutions.
        </p>
      </div>
      <nav className="mt-10 hidden lg:block">
        <ul className="text-primary">
          <li className="flex items-center mb-2 opacity-50 hover:opacity-100 hover-effect">
            <hr className="border-none bg-primary rounded-md w-[1cm] h-[1px] mr-2 line" />
            <a href="#">ABOUT</a>
          </li>
          <li className="flex items-center mb-2 opacity-50 hover:opacity-100 hover-effect">
            <hr className="border-none bg-primary rounded-md w-[1cm] h-[1px] mr-2 line" />
            <a href="#">EXPERIENCES</a>
          </li>
          <li className="flex items-center mb-2 opacity-50 hover:opacity-100 hover-effect">
            <hr className="border-none bg-primary rounded-md w-[1cm] h-[1px] mr-2 line" />
            <a href="#">PROJECTS</a>
          </li>
          <li className="flex items-center opacity-50 hover:opacity-100 hover-effect">
            <hr className="border-none bg-primary rounded-md w-[1cm] h-[1px] mr-2 line" />
            <a href="#">CONTACT ME</a>
          </li>
        </ul>
      </nav>
      <div className="flex justify-evenly items-center mt-5 lg:mt-10 text-[25px] lg:text-[30px] text-primary">
        <a
          href="#"
          className="lg:opacity-50 lg:hover:opacity-100 lg:transition-all"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="#"
          className="lg:opacity-50 lg:hover:opacity-100 lg:transition-all"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="#"
          className="lg:opacity-50 lg:hover:opacity-100 lg:transition-all"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </div>
    </>
  );
};

export default Header;
