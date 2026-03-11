import React from "react";
import elec from "../../assets/elle.png";
import fire from "../../assets/fire2.png";
import water from "../../assets/hvac11.png";
import comp from "../../assets/server_client.png";
import imag1 from "../../assets/100img1.jpg";

const Home1 = () => {
  const containerStyle = {
    padding: "40px 20px",
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const h2Style = {
    fontSize: "2.5rem",
    position: "relative",
    display: "inline-block",
    marginBottom: "10px",
  };

  const underlineStyle = {
    content: '""',
    display: "block",
    width: "30%",
    height: "3px",
    backgroundColor: "#1D5F53",
    margin: "8px auto 0 auto",
    borderRadius: "2px",
  };

  const pStyle = {
    fontSize: "1.2rem",
    marginBottom: "50px",
    color: "#555",
  };

  const contentStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
  };

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    flex: 1,
    minWidth: "250px",
  };

  const centerImageStyle = {
    flex: 1,
    minWidth: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
  };

  const centerImgStyle = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "10px",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  };

  const cardImgStyle = {
width : "100px",
height : "100px",
margin : "25px auto",
  };

  return (
    <div style={containerStyle}>
      <h2 style={h2Style}>
        What We Do
        <span style={underlineStyle}></span>
      </h2>
      <p style={pStyle}>
        Surrounded by smart, passionate people and with the best tools and
        approaches at your disposal
      </p>

      <div style={contentStyle}>
        {/* Left Column */}
        <div style={columnStyle}>
          <div style={cardStyle}>
            <img src={elec} alt="Electrical" style={cardImgStyle} />
            <h4>Mechanical & Electrical works</h4>
          </div>
          <div style={cardStyle}>
            <img src={comp} alt="Computer" style={cardImgStyle} />
            <h4>Networking, Servers, Computers</h4>
          </div>
        </div>

        {/* Center Image */}
        <div style={centerImageStyle}>
          <img src={imag1} alt="100image" style={centerImgStyle} />
        </div>

        {/* Right Column */}
        <div style={columnStyle}>
          <div style={cardStyle}>
            <img src={fire} alt="Fire safety" style={cardImgStyle} />
            <h4>FAS & FPS works, FSS, FEX, FES</h4>
          </div>
          <div style={cardStyle}>
            <img src={water} alt="Water system" style={cardImgStyle} />
            <h4>HVAC Works & IBMS</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;