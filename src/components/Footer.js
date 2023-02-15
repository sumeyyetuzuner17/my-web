import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaPhoneSquare,
  FaMapMarkerAlt,
  FaMailBulk,
  FaEllipsisH,
  FaBrain,
  FaHandsHelping,
} from "react-icons/fa";

const SCIkonlar = styled.div`
  display: flex;
  justify-content: center;
`;

const SCIkonItem = styled.div`
  padding: 20px;
  margin-top: 60px;
`;
const SCP = styled.p`
  text-align: center;
  font-style: italic;
  font-size: medium;
  font-weight: bold;
  font-family: monospace;
`;

const SCFooter = styled.footer`
  background-color: #a9a9a9;
  height: 250px;
`;

const SCIletisim = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  text-align: center;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SCIletisimItem = styled.div`
  padding: 35px;
  margin-top: 30px;
`;
const SCAciklama = styled.div`
  text-align: center;
  background-color: white;
`;
const SCAciklama1 = styled.h1`
  text-align: center;
  font-family: monospace;
  padding: 25px;
`;
const SCYazi = styled.div`
  text-align: center;
  font-size: x-large;
  font-family: monospace;
  font-style: italic;
  margin-bottom: 20px;
`;

const SCEnDis = styled.div`
  @media (max-width: 550px) {
    text-align: center;
  }
`;
function Footer() {
  return (
    <SCEnDis className="endis">
      <SCAciklama className="aciklama" id="iletisim">
        <SCAciklama1 className="aciklamaH1"> BANA ULAŞIN!</SCAciklama1>
        <SCYazi>
          Aklına takılan bir soruyu sormak ya da "Merhaba!" demek için <br />
          mail adreslerimden bana ulaş, sosyal medya adreslerimden bana yaz.{" "}
          <br />
          Sana en yakın sürede döneceğim :)
        </SCYazi>
        <div>
          <FaEllipsisH style={{ color: "4169E1" }} size={20} />
          <FaBrain style={{ color: "4169E1" }} size={20} />
          <FaEllipsisH style={{ color: "4169E1" }} size={20} />
          <FaHandsHelping style={{ color: "4169E1" }} size={20} />
          <FaEllipsisH style={{ color: "4169E1" }} size={20} />
          <FaBrain style={{ color: "4169E1" }} size={20} />
          <FaEllipsisH style={{ color: "4169E1" }} size={20} />
        </div>
      </SCAciklama>

      <SCIletisim className="iletisim">
        <SCIletisimItem className="iletisimItem">
          <FaPhoneSquare size={30} color="#4169E1" />
          <p>+90 542 617 1817</p>
        </SCIletisimItem>
        <SCIletisimItem className="iletisimItem">
          <FaMapMarkerAlt size={30} color="#4169E1" />
          <p>
            Çanakkale
            <br /> Merkez, 17100
          </p>
        </SCIletisimItem>
        <SCIletisimItem className="iletisimItem">
          <FaMailBulk size={30} color="#4169E1" />
          <p>
            <a href="mailto:sumeyyedeniz34@gmail.com">
              sumeyyedeniz34@gmail.com
            </a>
            <br />
            <a href="mailto:sumeyyedeniz@windowslive.com">
              sumeyyedeniz@windowslive.com
            </a>
          </p>
        </SCIletisimItem>
      </SCIletisim>

      <SCFooter>
        <SCIkonlar className="ikonlar">
          <SCIkonItem className="ikonItem">
            <a href="https://github.com/sumeyyetuzuner17">
              <FaGithub size={35} color="black" />
            </a>
          </SCIkonItem>

          <SCIkonItem className="ikonItem">
            <a href="https://www.facebook.com/engineers.sumeyye">
              <FaFacebook size={35} color="3366FF" />
            </a>
          </SCIkonItem>
          <SCIkonItem className="ikonItem">
            <a href="https://www.linkedin.com/in/s%C3%BCmeyyet%C3%BCz%C3%BCner17/">
              <FaLinkedin size={35} color="3366FF" />
            </a>
          </SCIkonItem>

          <SCIkonItem className="ikonItem">
            <a href="https://www.instagram.com/sumeyyetuzuner/">
              <FaInstagram size={35} color="FF0033" />
            </a>
          </SCIkonItem>
        </SCIkonlar>

        <SCP>
          Copyright &copy; {new Date().getFullYear()} Sümeyye Tüzüner | Tüm
          hakları saklıdır.
        </SCP>
      </SCFooter>
    </SCEnDis>
  );
}

export default Footer;
