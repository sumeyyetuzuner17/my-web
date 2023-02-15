import React from "react";
import styled from "styled-components";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFigma,
  FaNode,
} from "react-icons/fa";

const SCSkillDis = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0px;
  background-color: white;

  width: 960px;
  height: 500px;
  margin-left: 239px;
  margin-top: 20px;

  @media (max-width: 550px) {
    flex-direction: column;
    height: 800px;
    margin-left: 140px;
  }
`;
const SCPSkill = styled.p`
  width: 100px;
  height: 30px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  /* identical to box height */

  letter-spacing: 0.01em;

  color: #4832d3;

  /* Inside auto layout */

  /* flex: none;
  order: 0;
  flex-grow: 0; */

  @media (max-width: 550px) {
    /* font-size: 28px;
    width: 50px; */
    /* display: none; */
  }
`;

const SCIkonlar = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 100px;

  @media (max-width: 550px) {
    flex-direction: column;
    width: 25px;
  }
`;
const SCIkonlar1 = styled.div`
  margin-top: 55px;
  margin-right: 25px;
  @media (max-width: 550px) {
    display: flex;
    width: 25px;
  }
`;

const SCIkonlar2 = styled.div`
  margin-left: 25px;
  margin-top: 55px;
  @media (max-width: 550px) {
    display: flex;
    width: 25px;
    margin-left: 0px;
  }
`;

const SCIkonItem = styled.div`
  padding: 25px;
  @media (max-width: 550px) {
    width: 25px;
    height: 40px;
  }
`;

function Skill() {
  return (
    <SCSkillDis id="yetenekler">
      <SCPSkill className="skill">Skills</SCPSkill>
      <SCIkonlar className="ikonlar">
        <SCIkonlar1 className="ikonlar1">
          <SCIkonItem className="react">
            <FaReact size={65} color="blue" />
            React
          </SCIkonItem>
          <SCIkonItem className="html">
            <FaHtml5 size={65} color="red"/>
            Html5
          </SCIkonItem>
          <SCIkonItem className="css">
            <FaCss3Alt size={65} color="blue"/>
            CSS3
          </SCIkonItem>
        </SCIkonlar1>
        <SCIkonlar2 className="ikonlar2">
          <SCIkonItem className="js">
            <FaJs size={65} color="#FFCC00" />
            JavaScript
          </SCIkonItem>
          <SCIkonItem className="figma">
            <FaFigma size={65} color="FF6666" />
            Figma
          </SCIkonItem>
          <SCIkonItem className="node">
            <FaNode size={65} color="green"/>
            Node.js
          </SCIkonItem>
        </SCIkonlar2>
      </SCIkonlar>
    </SCSkillDis>
  );
}

export default Skill;
