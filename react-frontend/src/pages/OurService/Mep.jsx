import React from "react";
import IBMS from "../../assets/ibmsnew.png";

const Mep = () => {
  return (
    <div className="ibms-container">

      <style>{`

        .ibms-container{
          width:100%;
          padding:20px;
          box-sizing:border-box;
          font-family: Arial, Helvetica, sans-serif;
        }

        /* BREADCRUMB */

        .breadcrumb{
          margin-left:40px;
          margin-bottom:30px;
        }

        .breadcrumb a{
          text-decoration:none;
          color:#444;
          font-size:14px;
          margin-right:8px;
        }

        .breadcrumb a:hover{
          text-decoration:underline;
        }

        .breadcrumb h2{
          margin-top:10px;
          font-size:32px;
          font-weight:600;
        }

        /* MAIN CONTENT */

        .ibms-content{
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          gap:40px;
          margin-left:40px;
          margin-right:40px;
        }

        .ibms-text{
          flex:1;
          max-width:650px;
        }

        .ibms-text p{
          line-height:1.6;
          margin-bottom:20px;
        }

        .ibms-text ul{
          list-style:none;
          padding-left:0;
          line-height:1.6;
        }

        .ibms-text li{
          margin-bottom:10px;
          position:relative;
          padding-left:25px;
        }

        .ibms-text li::before{
          content:"✔";
          position:absolute;
          left:0;
          color:green;
          font-weight:bold;
        }

        /* IMAGE */

        .ibms-image{
          flex:1;
          display:flex;
          justify-content:flex-end;
        }

        .ibms-image img{
          width:100%;
          max-width:500px;
          height:auto;
          border-radius:6px;
        }

        /* RESPONSIVE */

        @media (max-width:900px){

          .ibms-content{
            flex-direction:column;
            margin-left:20px;
            margin-right:20px;
          }

          .ibms-image{
            justify-content:center;
            margin-top:20px;
          }

          .breadcrumb{
            margin-left:20px;
          }

          .breadcrumb h2{
            font-size:26px;
          }

        }

      `}</style>


      <div className="breadcrumb">
        <a href="/">HUNDRED PROJECTS</a> /
        <a href="/services">OUR SERVICES</a> /
        <a href="/services/IBMS">MEP Works – IBMS</a>
        <h2>MEP Works – IBMS</h2>
      </div>


      <div className="ibms-content">

        <div className="ibms-text">

          <p>
            An Integrated Building Management System (IBMS) from Messung is a single comprehensive Building Management System for the integration of HVAC, Fire Alarm, Public Address, Access Control, Security, Lighting and other systems.
            <br/><br/>
            Messung IBMS brings the benefit of better indoor comfort, energy efficiency, safety and security, and most importantly better management of all systems under the unified platform.
            <br/><br/>
            Integrated Building Management System (iBMS) is a computer-based automated system installed in buildings that controls and monitors the building’s mechanical and electrical equipment such as ventilation, lighting, power systems, fire systems, and security systems.
            <br/><br/>
            With the advent of IoT, iBMS is not just a technological concept, but soon taking over businesses and the ways they function. From infrastructure automation, climate control, energy management to building intelligence, PRISM believes in connectivity, accessibility and efficiency.
          </p>

          <ul>
            <strong>The overall system architecture comprises of the following logical layers.</strong>
            <li>Management Layer for system monitoring, controlling, data storage and reporting.</li>
            <li>Control Layer for intelligence of the systems.</li>
            <li>Field Layer for sensing, controlling and protecting environmental conditions.</li>
          </ul>

        </div>


        <div className="ibms-image">
          <img src={IBMS} alt="ibms" />
        </div>

      </div>

    </div>
  );
};

export default Mep;