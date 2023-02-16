import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Hakkimda from "./components/Hakkimda";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Whatsapp from "./components/Whatsapp";


const SCAllPage =styled.div`
  
  @media (max-width: 550px) {
    flex-direction:column;
  }
`


function App() {
  return (
    <SCAllPage className="allPage">
      <Header />
      <br />
      <br />
      <br />            
      <Hakkimda />
      <br />
      <br />
      <Skill />    
      <Profile />
      <Projects />
      <Footer />
      <Whatsapp/>
    </SCAllPage>
  );
}

export default App;
