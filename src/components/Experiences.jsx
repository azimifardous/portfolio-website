import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Element } from "react-scroll";

const Experiences = () => {
  return (
    <Element name="experiences" className="section">
      <div className="mt-20">
        <div className="grid grid-cols-3 gap-5 text-myGray p-6 glassy">
          <div className="col-span-1 opacity-70 text-sm">
            <h3>Jan. 2021 - Jul. 2021</h3>
            <p>Melbourne, Australia</p>
          </div>
          <div className="col-span-2">
            <h3 className="font-bold title">Front-End Developer, Remote</h3>
            <p className="text-sm opacity-70">
              I collaborated with designers to create user-friendly interfaces
              for the 3L3Phant NFT website using HTML, CSS, and JavaScript. By
              integrating with API endpoints, I ensured real-time display of NFT
              metadata. Working closely with back-end developers, I ensured
              seamless system integration and conducted rigorous testing for
              optimal performance. This project expanded my expertise in the NFT
              ecosystem, blockchain technology, and digital asset management.
            </p>
          </div>
        </div>
        <div className="flex text-myGray mt-10 hover:text-primary hover:cursor-pointer transition-all resume">
          <p className="mr-2">View Full Resume</p>
          <span className="arrow">
            <FontAwesomeIcon icon={faArrowUp} />
          </span>
        </div>
      </div>
    </Element>
  );
};

export default Experiences;
