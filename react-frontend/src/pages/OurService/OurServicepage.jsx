
import React, { useState } from "react";
import PAY from "../../assets/payment.jpg";
import PAY2 from "../../assets/payment2.jpg";
import PAY3 from "../../assets/payment3.jpg";

const OurService = () => {

  const [active, setActive] = useState(1);

  const services = [
    {
      id: 1,
      title: "Engineering, Procurement, Construction & Commissioning (EPC)",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      image: PAY
    },
    {
      id: 2,
      title: "Operation & Maintenance of Solar Power Plants",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      image: PAY3
    },
    {
      id: 3,
      title: "Optimisation",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      image: PAY2
    }
  ];

  const currentService = services.find((s) => s.id === active);

  return (
    <div className="service-container">

      <style>{`

      .service-container{
        width:100%;
        padding:20px;
        box-sizing:border-box;
        font-family:Arial, Helvetica, sans-serif;
      }

      /* breadcrumb */

      .breadcrumb{
        margin-left:40px;
        margin-bottom:40px;
      }

      .breadcrumb a{
        text-decoration:none;
        color:#444;
        font-size:14px;
        margin-right:8px;
      }

      .breadcrumb h2{
        margin-top:10px;
        font-size:32px;
      }

      /* layout */

      .service-layout{
        display:flex;
        justify-content:space-between;
        gap:70px;
        margin-left:40px;
        margin-right:40px;
      }

      /* left column */

      .service-list{
        flex:1;
        display:flex;
        flex-direction:column;
        gap:20px;
      }

      .service-box{
        border:1px solid #ddd;
        padding:25px;
        cursor:pointer;
        background:#fff;
        transition:0.3s;
        position:relative;
      }

      .service-box:hover{
        background:#f5f5f5;
      }

      .service-box h3{
        margin-bottom:10px;
        font-size:20px;
      }

      .service-box p{
        font-size:14px;
        line-height:1.6;
      }

      /* ACTIVE BOX COLOR */

      .service-box.active{
        background:#1D5F53;
        color:white;
      }

      .service-box.active h3,
      .service-box.active p{
        color:white;
      }

      /* ARROW */

      .service-box.active::after{
        content:"";
        position:absolute;
        right:-20px;
        top:50%;
        transform:translateY(-50%);
        width:0;
        height:0;
        border-top:20px solid transparent;
        border-bottom:20px solid transparent;
        border-left:20px solid #1D5F53;
      }

      /* right image */

      .service-image{
        flex:1;
        display:flex;
        justify-content:center;
        align-items:center;
      }

      .service-image img{
        width:100%;
        max-width:500px;
        border-radius:6px;
      }

      /* responsive */

      @media(max-width:900px){

        .service-layout{
          flex-direction:column;
          gap:30px;
        }

        .service-box.active::after{
          display:none;
        }

        .service-image{
          margin-top:20px;
        }

        .breadcrumb{
          margin-left:20px;
        }

      }

      `}</style>


      {/* Breadcrumb */}

      <div className="breadcrumb">
        <a href="/">HUNDRED PROJECTS</a> /
        <a href="/services">OUR SERVICES</a>
        <h2>OUR SERVICES</h2>
      </div>


      {/* Layout */}

      <div className="service-layout">

        {/* Left Side Boxes */}

        <div className="service-list">

          {services.map((service) => (
            <div
              key={service.id}
              className={`service-box ${active === service.id ? "active" : ""}`}
              onClick={() => setActive(service.id)}
            >
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}

        </div>


        {/* Right Side Image */}

        <div className="service-image">
          <img src={currentService.image} alt="service" />
        </div>

      </div>

    </div>
  );
};

export default OurService;

