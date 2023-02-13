import React from "react";
import styled from "styled-components";
import FirstPart from "./components/FirstPart";
// import { Route,Switch } from 'react-router-dom';
import Footer from "./components/Footer";
import Hakkimda from "./components/Hakkimda";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skill from "./components/Skill";


// const SCAllPage=styled.div`
//  @media (max-width: 550px) {    
   
//   padding-left: 0px;
    
//   }

// `


function App() {
  return (
    <div className="allPage">
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
