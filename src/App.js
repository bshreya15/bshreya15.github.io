import React from "react";
// import { ReactFragment } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
// import Skills from "./components/skills/Skills";
import Skills2 from "./components/skills/Skills2";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Skills2 />
      </main>
    </>
  );
};

export default App;
