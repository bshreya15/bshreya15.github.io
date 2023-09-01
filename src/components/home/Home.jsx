import React from "react";
import Social from "./Social";
import Data from "./Data";
import "./home.css";
import "./social.css";
import "./data.css";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div class="home__img"></div>
          <Data />
        </div>
      </div>
    </section>
  );
};

export default Home;
