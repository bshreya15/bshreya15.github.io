import React from "react";
import wave from "../../assets/waving-hand.png";

const Data = () => {
  return (
    <div className="home__data">
      <div className="home__title-wave">
        <h1 className="home__title">Shreya Bakshi</h1>
        <img src={wave} alt="" className="wave" />
      </div>
      <h3 className="home__subtitle">Frontend Developer</h3>
      <div className="home__description">
        <p>Welcome to my online showcase! </p>
        <br></br>
        <p>
          Here you will find a showcase of my skills and experience in building
          user-friendly and visually appealing websites. My expertise includes
          HTML, CSS, JavaScript, and frontend frameworks such as React and
          Angular. I have a strong understanding of web design principles and a
          keen eye for detail, which allows me to create responsive,
          mobile-friendly websites that look and function great on all devices.
        </p>
      </div>
      <br></br>
      <div className="home__button">
        <a href="#contact" className="button button--flex">
          Say Hello!
        </a>
      </div>
    </div>
  );
};

export default Data;
