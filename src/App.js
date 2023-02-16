import React from "react";
import Footer from "./components/Footer";
import Hakkimda from "./components/Hakkimda";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Whatsapp from "./components/Whatsapp";
// import FirstPart from "./components/FirstPart";
function App() {
  return (
    <div className="allPage">
      <Header />
      <br />
      <br />
      <br />      
      {/* <FirstPart /> */}
      <Hakkimda />
      <br />
      <br />
      <Skill />    
      <Profile />
      <Projects />
      <Footer />
      <Whatsapp/>
    </div>
  );
}

export default App;
