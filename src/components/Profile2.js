import React from "react";
import styled from "styled-components";

const SCProfileDiv = styled.div`
  background-color: #4731d3;
  width: 1500px;
  height: 600px;

  @media (max-width: 550px) {
    height: 1000px;
  }
`;

const SCinfoImgAbout = styled.div`
  width: 960px;
  height: 290px;
  margin-left: 240px;
  color: white;
  display: flex;
`;

function Profile2() {
  return (
    <SCProfileDiv id="profil">
      <SCinfoImgAbout className="infoImgAbout">
        <div className="info">
          <h3>Basic Information</h3>
          <p>Doğum Tarihi: 14.11.1991</p>
          <p>İkamet Şehri: Çanakkale</p>
          <p>
            Eğitim Durumu:
            <div>
              İstanbul Aydın Üniv., <br />
              Computer Enginnering
              <br />
              Lisans,2016
            </div>
          </p>
          <p>
            Tercih Ettiği Rol : <div>Frontend Developer</div>
          </p>
        </div>
       
         <img src="https://scontent.fsaw1-14.fna.fbcdn.net/v/t1.18169-9/945597_4947817585463_1845554503_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=de6eea&_nc_ohc=Ag19HuPOhEMAX-UuUw3&_nc_ht=scontent.fsaw1-14.fna&oh=00_AfCn2nAJIk91f3Fw3Vxb-bNULbct7QltBYiNPl-HnpnwHg&oe=640C4F29" alt=""/>
        
        <div className="about">about</div>
      </SCinfoImgAbout>
    </SCProfileDiv>
  );
}

export default Profile2;
