import React from "react";
import styled from "styled-components";

const SCProfileDiv = styled.div`
  background-color: #4731d3;
  width: 1500px;
  height: 600px;
  @media (max-width: 550px) {
            
  height: 1000.68px;
  }
`;
const SCInfoImgAbout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 30px;

  /* position: absolute; */
  width: 960px;
  height: 290.68px;
  margin-left: 240px;
  margin-top: 10px;
  @media (max-width: 550px) {
    
    flex-direction:column;
    height: 800px;
    margin-left: 0px;
    gap: 0px;
    width: 475px;
  height: 200.68px;
  }
`;

const SCImg = styled.img`
  width: 250px;
  height: 270.68px;
  margin-top: 30px;
  margin-left: 35px;
  /* YO */

  box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
    0px 18px 88px -4px rgba(24, 39, 75, 0.14);
  border-radius: 18px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const SCAbout = styled.div`
  margin-top: 10px;
  margin-left: 45px;
  color: white;
  display: flex;
 
`;

function Profile() {
  return (
    <SCProfileDiv>
      <h2 id="profil"
        style={{
          paddingLeft: "245px",
          paddingTop: "85px",
          color: "#CBF281",
          fontWeight: "700",
          fontSize: "48px",
          lineHeight: "100%",
        }}
      >
        Profile
      </h2>
      <SCInfoImgAbout className="infoImgAbout" style={{ display: "flex" }}>
        <div className="info" style={{ marginTop: "10px" }}>
          <h3>Basic Information</h3>

          <p>Doğum Tarihi: 14.11.1991</p>
          <p>İkamet Şehri: Çanakkale</p>
          <p style={{ display: "flex" }}>
            Eğitim Durumu:
            <div>
              İstanbul Aydın Üniv., <br />
              Computer Enginnering
              <br />
              Lisans,2016
            </div>
          </p>
          <p style={{ display: "flex" }}>
            Tercih Ettiği Rol : <div>Frontend Developer</div>
          </p>
        </div>
        <div className="img">
          <SCImg
            src="https://scontent.fsaw1-14.fna.fbcdn.net/v/t1.18169-9/945597_4947817585463_1845554503_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=de6eea&_nc_ohc=Ag19HuPOhEMAX-UuUw3&_nc_ht=scontent.fsaw1-14.fna&oh=00_AfCn2nAJIk91f3Fw3Vxb-bNULbct7QltBYiNPl-HnpnwHg&oe=640C4F29"
            alt=""
          ></SCImg>
        </div>
        <SCAbout className="about">
          <h3>About Me</h3>
          <p>
            2016 Bilgisayar Mühendisliği mezunuyum. <br />
            Sonrasında İş Sağlığı ve Güvenliği alanında yüksek <br />
            lisans yapıp B Sınıfı İş Güvenliği uzmanı olarak 3 yıl görev yaptım.
            <br />
            <br />
            Daha sonra yazılım alanında olmak istediğimi farkedip Workintech
            eğitimin <br />
            kurumundan eğitim aldım. Full stack developer eğitimimi almaktayım.
          </p>
        </SCAbout>
      </SCInfoImgAbout>
    </SCProfileDiv>
  );
}

export default Profile;
