import React from "react";
import FIRESAFE from "../../assets/FS.jpg";

const MepFS = () => {
  return (
    <div className="fire-container">

      <style>{`
        .fire-container{
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

        .fire-content{
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          gap:40px;
          margin-left:40px;
          margin-right:40px;
        }

        .fire-text{
          flex:1;
          max-width:650px;
        }

        .fire-text h2{
          font-size:18px;
          font-weight:400;
          line-height:1.6;
          margin-bottom:15px;
        }

        .fire-text p{
          line-height:1.6;
          margin-bottom:20px;
        }

        .fire-text ul{
          padding-left:20px;
          line-height:1.6;
        }

        .fire-text li{
          margin-bottom:8px;
        }

        /* IMAGE */

        .fire-image{
          flex:1;
          display:flex;
          justify-content:flex-end;
        }

        .fire-image img{
          width:100%;
          max-width:500px;
          height:auto;
          border-radius:6px;
        }

        /* RESPONSIVE */

        @media (max-width:900px){

          .fire-content{
            flex-direction:column;
            margin-left:20px;
            margin-right:20px;
          }

          .fire-image{
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
        <a href="/services/fire">MEP Works – Fire & Safety</a>
        <h2>MEP Works – Fire & Safety</h2>
      </div>


      <div className="fire-content">

        <div className="fire-text">

          <h2>
            LMS is an authentic turnkey contracting organization which is well-equipped and well-specialized for implementing Security & Fire installations on a turnkey basis. With its prime focus kept on energy conservation through integrated, intelligent building management and automation systems which include;
          </h2>

          <p>
            FAS <br/>
            CCTV <br/>
            PA SYSTEMS <br/>
            ACCESS CONTROL <br/>
            GAS SUPPRESSION <br/>
            FIRE PROTECTION SYSTEM <br/>
            FIRE HYDRANT FOR FACTORY AND BUILDINGS <br/><br/>

            The entire set of products procured for installing the fire and safety interior solutions are from leading international brands which have CE (European Certification), UL, ULC, FM and so on for the same.
          </p>

          <ul>
            <strong>KEY STRENGTHS:</strong>
            <li>In-house groups that offer top-to-bottom security solutions with international quality standards for the implementation and maintenance of the projects.</li>
            <li>A strong Design Team with enriched technical skills to establish the highest sense of Security with necessary standards through minimum equipment usage.</li>
            <li>An exclusive team with highest of expertise for successful installation the systems on a premise.</li>
            <li>A strong partnership with well-recognized OEMs to execute projects.</li>
          </ul>

        </div>


        <div className="fire-image">
          <img src={FIRESAFE} alt="fire safety" />
        </div>

      </div>

    </div>
  );
};

export default MepFS;