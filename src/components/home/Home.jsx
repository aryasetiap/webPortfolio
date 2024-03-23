// eslint-disable-next-line no-unused-vars
import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social></Social>
          <div className="home__img"></div>
          <Data></Data>
        </div>
        <ScrollDown></ScrollDown>
      </div>
    </section>
  );
};

export default Home;
