import React from "react";
import styled from "styled-components";

const SCMorcivert = styled.div`
  position: absolute;
  width: 1040px;
  height: 500px;
  margin-left: 0px;
  margin-top: 0px;

  background: #4731d3;
`;
const SCInfoImg = styled.div`
  display: flex;
  
  align-items: center;
  padding: 0px;
  gap: 83px;

  width: 600px;
  height: 250.89px;
  margin-left: 239px;
  margin-top: 130px;
`;
const SCImg = styled.img`
  /* background-repeat: no-repeat; */
  margin-left: 60px;
  border-radius: 18px;
/* 
  flex: none;
  order: 1;
  flex-grow: 0; */
`;

const SCKisaBilg = styled.div`
  margin-bottom: 30px;
`;

const SCIsim = styled.div`
  color: #cbf281;
  position: absolute;
  width: 960px;
  height: 72px;
  margin-left: 239px;
  margin-top: 37px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 72px;
  /* @media (max-width: 550px) {
    padding-left: 0px;
  } */
`;

const SCBilgi1 = styled.div`
  font-family: monospace;
  color: #cbf281;
  font-style: bold;
  font-size: 26px;
  line-height: 59px;
  line-height: 110%;
`;

const SCBilgi2 = styled.div`
  width: 528.88px;
  height: 40px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  color: #ffffff;
`;
const SCYesil = styled.div`
  background-color: #cbf281;
  width: 540px;
  height: 500px;
  margin-left: 994px;
  margin-top: 0px;
  justify-content: end;
`;
const SCIkili = styled.div`
  display: flex;
`;

function Hakkimda() {
  return (
    <SCIkili className="ikili" id="anasayfa">
      <SCMorcivert className="morcivert">
        <SCIsim className="isim">SÜMEYYE TÜZÜNER</SCIsim>
        <SCInfoImg className="infoImg">
          <SCKisaBilg className="kisaBilg">
            <SCBilgi1>
              <p>
                Bilgisayar Mühendisi
                <br /> Frontend Developer...
              </p>
            </SCBilgi1>
            <SCBilgi2>
              Workintech Eğitim kurumundan <br />
              Frontend Developer eğitimimi tamamlamış bulunmaktayım
            </SCBilgi2>
          </SCKisaBilg>

          <SCImg
            className="Img"
            src="https://media.licdn.com/dms/image/C4D03AQG8XDW4D2BrNA/profile-displayphoto-shrink_200_200/0/1652622538544?e=1680739200&v=beta&t=xCLn5AEHLi0PNjJSRF_lUVaF-Q1wrowcftyyxdZh97s"
          ></SCImg>
        </SCInfoImg>
      </SCMorcivert>
      <SCYesil className="yesil"></SCYesil>
    </SCIkili>
  );
}

export default Hakkimda;
