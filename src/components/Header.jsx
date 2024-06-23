import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link, Events, scrollSpy } from "react-scroll";

const Header = () => {
  const [activeSection, setActiveSection] = useState("about");
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

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
      <nav className="mt-10 hidden lg:block cursor-pointer w-fit">
        <ul className="text-primary w-fit">
          <li>
            <Link
              className={
                activeSection === "about"
                  ? "active flex items-center mb-2 opacity-50 hover:opacity-100 hover-effect"
                  : "flex items-center mb-2 opacity-50 hover:opacity-100 hover-effect"
              }
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onSetActive={() => setActiveSection("about")}
            >
              <hr className="border-none bg-primary rounded-md w-[1cm] h-[1px] mr-2 line" />
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className={
                activeSection === "experiences"
                  ? "active flex items-center mb-2 opacity-50 hover:opacity-100 hover-effect"
                  : "flex items-center mb-2 opacity-50 hover:opacity-100 hover-effect"
              }
              activeClass="active"
              to="experiences"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onSetActive={() => setActiveSection("experiences")}
            >
              <hr className="border-none bg-primary rounded-md w-[1cm] h-[1px] mr-2 line" />
              EXPERIENCES
            </Link>
          </li>
          <li>
            <Link
              className={
                activeSection === "projects"
                  ? "active flex items-center mb-2 opacity-50 hover:opacity-100 hover-effect"
                  : "flex items-center mb-2 opacity-50 hover:opacity-100 hover-effect"
              }
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onSetActive={() => setActiveSection("projects")}
            >
              <hr className="border-none bg-primary rounded-md w-[1cm] h-[1px] mr-2 line" />
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              className={
                activeSection === "contactMe"
                  ? "active flex items-center mb-2 opacity-50 hover:opacity-100 hover-effect"
                  : "flex items-center mb-2 opacity-50 hover:opacity-100 hover-effect"
              }
              activeClass="active"
              to="contactMe"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onSetActive={() => setActiveSection("contactMe")}
            >
              <hr className="border-none bg-primary rounded-md w-[1cm] h-[1px] mr-2 line" />
              CONTACT ME
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-evenly items-center mt-5 lg:mt-10 text-[25px] lg:text-[30px] text-primary">
        <a
          href="https://github.com/azimifardous"
          target="_blank"
          className="lg:opacity-50 lg:hover:opacity-100 lg:transition-all"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/azimifardous/"
          target="_blank"
          className="lg:opacity-50 lg:hover:opacity-100 lg:transition-all"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://x.com/AzimiFardous"
          target="_blank"
          className="lg:opacity-50 lg:hover:opacity-100 lg:transition-all"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </div>
    </>
  );
};

export default Header;
