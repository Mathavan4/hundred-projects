import React, { useState, useEffect } from "react";
import banner from "../../assets/100banner.jpg";

const Banner = () => {
  const texts = [
    "Get ready with us",
    "We have steadily built up a strong reputation for quality installation and service",
    "To all our known customers - domestic and commercial",
    "Our professional consultants and friendly technical staff & Engineers will provide a FREE assessment of your security needs."
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 3500); // text scroll every 3.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <img src={banner} alt="banner" />
      <div className="text-overlay">
        <p key={currentTextIndex}>{texts[currentTextIndex]}</p>
      </div>

      <style>
        {`
          .banner {
            position: relative;
            width: 100%;
            height: 60vh; /* Fixed responsive height */
            max-height: 500px;
            min-height: 300px;
            overflow: hidden;
          }

          .banner img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .text-overlay {
            position: absolute;
            top: 50%;
            left: 10%; /* Left alignment on large screens */
            transform: translateY(-50%);
            color: white;
            text-align: left;
            max-width: 40%;
            z-index: 2;
            padding: 0 20px;
          }

          .text-overlay p {
            font-size: 1.8rem;
            font-weight: bold;
            line-height: 1.5;
            opacity: 0;
            animation: scrollText 1s forwards;
          }

          @keyframes scrollText {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          /* Responsive for tablets */
          @media (max-width: 1024px) {
            .text-overlay {
              max-width: 60%;
              left: 5%;
            }
            .text-overlay p {
              font-size: 1.6rem;
            }
          }

          /* Responsive for mobile */
          @media (max-width: 768px) {
            .text-overlay {
              left: 50%;
              transform: translate(-50%, -50%); /* center on small screens */
              max-width: 90%;
              text-align: center;
            }
            .text-overlay p {
              font-size: 1.4rem; /* increased font size for better visibility */
            }
          }

          @media (max-width: 480px) {
            .banner {
              height: 45vh;
              min-height: 220px;
            }
            .text-overlay p {
              font-size: 1.2rem; /* slightly bigger text for small phones */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Banner;