import React from "react";
import FirstPart from "./components/FirstPart";
// import { Route,Switch } from 'react-router-dom';
import Footer from "./components/Footer";
import Hakkimda from "./components/Hakkimda";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

function App() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      {/* <FirstPart /> */}
      <Hakkimda/><br/>
      <Skill />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
