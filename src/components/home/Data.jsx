import React from "react";
import wave from "../../assets/waving-hand.png";

const Data = () => {
  return (
    <div class="home__data">
      <div className="home__title-wave">
        <h1 class="home__title">Shreya Bakshi</h1>
        <img src={wave} alt="" className="wave" />
      </div>
      <h3 class="home__subtitle">Frontend Developer</h3>
      <div class="home__description">
        <p>Welcome to my online showcase! </p>
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
      <div class="home__button">
        <a href="#contact" class="button button--flex">
          Say Hello!
        </a>
      </div>
    </div>
  );
};

export default Data;
