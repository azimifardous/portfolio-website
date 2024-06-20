import React from "react";

const About = ({ aboutRef }) => {
  return (
    <p ref={aboutRef} id="about" className="text-myGray">
      In 2021, the coding bug bit me hard, and I dove headfirst into learning
      everything I could. Fueled by countless tutorials and a relentless
      curiosity, I've built over 50 projects from scratch.{" "}
      <span className="block mt-2">
        Now, I'm a self-taught programmer, constantly seeking new challenges to
        push my skills further. I'm passionate about the way code breathes life
        into ideas, turning ideas into reality. My current focus is on delving
        deeper into new technologies out there in the industry.
      </span>
      <span className="block mt-2">
        In my free time, you might find me reading manga (Japanese Comic Books),
        ride my bike or either play video games.
      </span>
    </p>
  );
};

export default About;
