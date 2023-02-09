import React from "react";
import styled from "styled-components";

const SCHeader = styled.header`

  display: flex;
  justify-content: space-between;
  background-color: #778899;
  

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SCMenuList = styled.div`
  display: flex;
  margin-top: 20px;
  margin-right: 20px;
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SCLogo = styled.img`
  width: 20%;
  border-radius: 100%;
`;
const SCDivLogo = styled.div`
  margin: 10px 0px 10px 30px;
`;

const SCLinkItem = styled.div`
  padding-right: 45px;

`;
const SCAhref = styled.a`
  color: black;
  text-decoration: none;
  font-size: x-large;
  font-family: monospace;
  color: white;
`;
const SCFullHeader = styled.div`

padding: 0;
    margin: 0;
    list-style-type: none;
    background-color: #4fb99f;
    overflow: auto;
    position: fixed;
    width: 100%;
    top: 0;
`;

function Header() {
  return (
    <SCFullHeader className="fullHeader" id="header" >
      <SCHeader>
        <SCDivLogo className="logo">
          <a href="">
            <SCLogo
              src="https://t3.ftcdn.net/jpg/04/14/64/96/240_F_414649686_ugkG4xxhwmAq13Msfk5VZ7k5aboBr4Yb.jpg"
              alt=""
            />
          </a>
        </SCDivLogo>

        <SCMenuList className="menuList">
          <SCLinkItem className="linkItem">
            <SCAhref href="#anasayfa">Anasayfa</SCAhref>
          </SCLinkItem>
          <SCLinkItem className="linkItem">
            <SCAhref href="#yetenekler">Yetenekler</SCAhref>
          </SCLinkItem>
          <SCLinkItem className="linkItem">
            <SCAhref href="#profil">Profil</SCAhref>
          </SCLinkItem>          
          <SCLinkItem className="linkItem">
            <SCAhref href="#projeler">Projeler</SCAhref>
          </SCLinkItem>
          <SCLinkItem className="linkItem">
            <SCAhref href="#iletisim">İletişim </SCAhref>
          </SCLinkItem>
        </SCMenuList>
      </SCHeader>
    </SCFullHeader>
  );
}

export default Header;
