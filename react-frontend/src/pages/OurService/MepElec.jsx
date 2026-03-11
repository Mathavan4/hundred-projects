import React from "react";
import MEP1 from "../../assets/mep-electrical.jpeg";
import MEP2 from "../../assets/mep2.jpg";
import MEP3 from "../../assets/mep3.jpg";
import MEP4 from "../../assets/ceiling.jpg";
import MEP5 from "../../assets/mepfire.jpg";
import MEP6 from "../../assets/camera.jpg";

const MepElec = () => {
  return (
    <div className="mep-container">

      <style>{`

      .mep-container{
        width:90%;
        margin:auto;
        font-family: Arial, Helvetica, sans-serif;
        color:#333;
      }

      /* breadcrumb */
      .breadcrumb{
        margin-top:20px;
        font-size:14px;
      }

      .breadcrumb a{
        text-decoration:none;
        color:#777;
        margin-right:10px;
      }

      .title{
        font-size:28px;
        margin-top:10px;
        margin-bottom:30px;
        font-weight:500;
      }

      /* main section */
      .mep-main{
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap:40px;
        align-items:start;
      }

      .mep-text p{
        line-height:1.7;
        font-size:15px;
        margin-bottom:20px;
      }

      .mep-left-img{
        width:100%;
        margin-top:10px;
      }

      .mep-right img{
        width:100%;
        margin-bottom:20px;
      }

      .mep-right ul{
        padding-left:18px;
        line-height:1.8;
        font-size:14px;
      }

      /* bottom services */
      .services{
        margin-top:40px;
        display:grid;
        grid-template-columns: repeat(4,1fr);
        gap:25px;
        text-align:center;
      }

      .service img{
        width:100%;
        height:120px;
        object-fit:cover;
      }

      .service h4{
        font-size:14px;
        margin-top:10px;
        font-weight:500;
      }

      /* responsive */
      @media (max-width:900px){

        .mep-main{
          grid-template-columns:1fr;
        }

        .services{
          grid-template-columns:repeat(2,1fr);
        }

      }

      @media (max-width:500px){

        .services{
          grid-template-columns:1fr;
        }

      }

      `}</style>


      <div className="breadcrumb">
        <a href="/">Lotus MEP Solutions</a> /
        <a href="/services"> Our Services</a> /
        <a href="/services/electrical"> MEP Works – Electrical</a>
      </div>

      <h2 className="title">MEP Works – Electrical</h2>

      <div className="mep-main">

        <div className="mep-text">
          <p>
            Catering to the diverse requirements of clients, LMS offers MEP
            services as an ESA grade licensed contractor, which involves
            designing and execution of electrical installations as a part of
            the Turnkey Contract.
            
            
            The dexterous professionals assure that the products used are of
            branded make as per the specifications with highest quality,
            thereby ensuring the safety and durability of the electrical
            installations as a whole.
            
            LMS offers all kinds of electrical works / LT / HT works for high
            raised buildings, Residential, IT sectors and factories with
            standard specification adhering to local CEIG compliance.
          </p>

          <img src={MEP2} alt="MEP Electrical" className="mep-left-img"/>
        </div>

        <div className="mep-right">
          <img src={MEP1} alt="Electrical cable"/>

          <ul>The various works that intend to present safe, secured and uninterrupted services are as follows:
            <br />
            <li>SUPPLY AND ERECTION OF HT SUBSTATION 110KV/33KV/11KV</li>
            <li>HT & LT CONTROL PANELS</li>
            <li>TRANSFORMERS</li>
            <li>DG SETS</li>
            <li>UPS AND INVERTERS</li>
            <li>OFFICE SPACE ELECTRICAL WORKS AND OTHER RELATED SERVICES</li>
          </ul>
        </div>

      </div>


      <div className="services">

        <div className="service">
          <img src={MEP3} alt="Fire Alarm"/>
          <h4>Fire Alarm System</h4>
        </div>

        <div className="service">
          <img src={MEP4} alt="Sprinkler"/>
          <h4>Sprinkler and Hydrant system</h4>
        </div>

        <div className="service">
          <img src={MEP5} alt="Fire Extinguisher"/>
          <h4>Fire Extinguisher and Suppression system</h4>
        </div>

        <div className="service">
          <img src={MEP6} alt="CCTV"/>
          <h4>CCTV Surveillance System</h4>
        </div>

      </div>

    </div>
  );
};

export default MepElec;