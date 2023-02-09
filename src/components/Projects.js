import React from "react";
import styled from "styled-components";

const SCProjeler = styled.div`
  background-color: #cbf281;
  height: 800px;
  width: 1500px;
  margin-top: 2px;

  @media (max-width: 550px) {    
    height: 1400px;
  }
 
`;

const SCProjeItem = styled.div`
  display: flex;
  align-self: center;

  @media (max-width: 550px) {
    flex-direction: column;  
    
  }
`;

const SCImg = styled.img`
  width: 265px;
  height: 250px;

  @media (max-width: 550px) {
    flex-direction: column;  
    width: 205px;
  height: 200px;
  }
`;

const SCP=styled.p`
 @media (max-width: 550px) {
    flex-direction: column;  
    font-size: small;
    text-align: start;
    width: 200px;
  }

`
const SCMedia=styled.div`
margin-left: "100px";
`


function Projects() {
  return (
    <SCProjeler className="projeler" id="projeler">
      <div className="projeler1alti"  style={{ marginLeft: "200px", paddingTop: "100px" }}>
        <div
          className="baslik"
          style={{
            color: "#4731D3",
            fontWeight: "700",
            fontSize: "48px",
            lineHeight: "100%",
            marginBottom: "20px",
          }}
        >
          Projects
        </div>

        <SCProjeItem className="projeItem">
          <div className="projeImg">
            <SCImg
              src="https://github.com/sumeyyetuzuner17/fsweb-s10g1-reducer-calculator/raw/main/proje-hedefi.gif"
              alt=""
            />
          </div>
          <div className="projeDesc" style={{ paddingLeft: "20px" }}>
            <p>WORKINTECH</p>
            <SCP>
              Bu projede, sayıları herhangi bir sırayla toplayabilen, çarpabilen
              ve çıkartabilen,ayrıca
              <br />
              hafızaya kaydetme ve callback özellikleri ekleyebilen basit bir
              hesap makinesi uygulaması <br />
              oluşturulmuştur. Koda eksik parçaları ekleyerek başlayıp ve UI,
              reducer ve event dosyalarında <br />
              sıfırdan özellikler oluşturarak proje tamamlanmak üzeredir. Bu
              hesap makinesi bildiklerimizden <br />
              biraz farklı. Her yeni hesaplamasında önceki hesabın sonucunu ve
              yeni bir sayıyı parametre olarak almaktadır.
            </SCP>
            <div
              className="divler"
              style={{ display: "flex", padding: " 8px 18px 9px", gap: "10px" }}
            >
              <div
                style={{
                  backgroundColor: "#4731D3",
                  borderRadius: "20px",
                  color: "white",
                  fontSize: "14px",
                  width: "60px",
                  height: "30px",
                  textAlign: "center",
                  paddingTop: "7px",
                }}
              >
                React
              </div>
              <div
                style={{
                  backgroundColor: "#4731D3",
                  borderRadius: "20px",
                  color: "white",
                  fontSize: "14px",
                  width: "60px",
                  height: "30px",
                  textAlign: "center",
                  paddingTop: "7px",
                }}
              >
                Redux
              </div>
              <div
                style={{
                  backgroundColor: "#4731D3",
                  borderRadius: "20px",
                  color: "white",
                  fontSize: "14px",
                  width: "60px",
                  height: "30px",
                  textAlign: "center",
                  paddingTop: "7px",
                }}
              >
                Vercel
              </div>
            </div>

            <div className="linkler" style={{ display: "flex" }}>
              <div className="web" style={{color:"#120B39",fontStyle: "normal",fontWeight: "500px",fontSize: "16px",lineHeight: "16px",marginRight:"20px"}}>
                <a href="https://fs-web-s10-g1-reducer-j5xj.vercel.app/">
                  View Site
                </a>
              </div>
              <div className="github" style={{color:"#120B39",fontStyle: "normal",fontWeight: "500px",fontSize: "16px",lineHeight: "16px",marginRight:"20px"}}>
                <a href="https://github.com/sumeyyetuzuner17/fsweb-s10g1-reducer-calculator">
                  Github
                </a>
              </div>
            </div>
          </div>
        </SCProjeItem>
        <br/><br/>
        <SCProjeItem className="projeItem">
          <div className="projeImg">
            <SCImg
              src="https://github.com/sumeyyetuzuner17/fsweb-s10g1-reducer-calculator/raw/main/proje-hedefi.gif"
              alt=""
            />
          </div>
          <div className="projeDesc" style={{ paddingLeft: "20px" }}>
            <p>WORKINTECH</p>
            <SCP>
              Bu projede, sayıları herhangi bir sırayla toplayabilen, çarpabilen
              ve çıkartabilen,ayrıca
              <br />
              hafızaya kaydetme ve callback özellikleri ekleyebilen basit bir
              hesap makinesi uygulaması <br />
              oluşturulmuştur. Koda eksik parçaları ekleyerek başlayıp ve UI,
              reducer ve event dosyalarında <br />
              sıfırdan özellikler oluşturarak proje tamamlanmak üzeredir. Bu
              hesap makinesi bildiklerimizden <br />
              biraz farklı. Her yeni hesaplamasında önceki hesabın sonucunu ve
              yeni bir sayıyı parametre olarak almaktadır.
            </SCP>
            <div
              className="divler"
              style={{ display: "flex", padding: " 8px 18px 9px", gap: "10px" }}
            >
              <div
                style={{
                  backgroundColor: "#4731D3",
                  borderRadius: "20px",
                  color: "white",
                  fontSize: "14px",
                  width: "60px",
                  height: "30px",
                  textAlign: "center",
                  paddingTop: "7px",
                }}
              >
                React
              </div>
              <div
                style={{
                  backgroundColor: "#4731D3",
                  borderRadius: "20px",
                  color: "white",
                  fontSize: "14px",
                  width: "60px",
                  height: "30px",
                  textAlign: "center",
                  paddingTop: "7px",
                }}
              >
                Redux
              </div>
              <div
                style={{
                  backgroundColor: "#4731D3",
                  borderRadius: "20px",
                  color: "white",
                  fontSize: "14px",
                  width: "60px",
                  height: "30px",
                  textAlign: "center",
                  paddingTop: "7px",
                }}
              >
                Vercel
              </div>
            </div>

            <div className="linkler" style={{ display: "flex" }}>
              <div className="web" style={{color:"#120B39",fontStyle: "normal",fontWeight: "500px",fontSize: "16px",lineHeight: "16px",marginRight:"20px"}}>
                <a href="https://fs-web-s10-g1-reducer-j5xj.vercel.app/">
                  View Site
                </a>
              </div>
              <div className="github" style={{color:"#120B39",fontStyle: "normal",fontWeight: "500px",fontSize: "16px",lineHeight: "16px",marginRight:"20px"}}>
                <a href="https://github.com/sumeyyetuzuner17/fsweb-s10g1-reducer-calculator">
                  Github
                </a>
              </div>
            </div>
          </div>
        </SCProjeItem>
      </div>
      
    </SCProjeler>
  );
}

export default Projects;
