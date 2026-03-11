import React from "react";
import FSAI from "../../assets/FSAI.png";
import ESA from "../../assets/ESA.png";
import IGBC from "../../assets/IGBC.png";
import IPA from "../../assets/IPA.jpg";

const About3 = () => {
    return(
        <>
        <style>{`
            .about3-container {
                padding: 60px 20px;
                text-align: center;
                background-color: #ffffff;
            }

            .about3-heading {
                font-size: 32px;
                font-weight: bold;
                margin-bottom: 10px;
            }

            .about3-underline {
                width: 60px;
                height: 3px;
                background-color: #1D5F53;
                margin: 0 auto 50px auto;
                border-radius: 2px;
            }

            .about3-row {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-wrap: wrap;
                gap: 55px;
            }

            .about3-card {
                width: 220px;
                text-align: center;
            }

            .about3-card img {
                width: 100px;
                height: auto;
                margin-bottom: 15px;
            }

            .about3-card h4 {
                font-size: 18px;
                margin-bottom: 10px;
                color: #1D5F53;
            }

            .about3-card p {
                font-size: 14px;
                line-height: 1.6;
                color: #555;
            }

            /* Responsive */
            @media (max-width: 768px) {
                .about3-row {
                    gap: 30px;
                }

                .about3-card {
                    width: 45%;
                }
            }

            @media (max-width: 480px) {
                .about3-card {
                    width: 100%;
                }

                .about3-heading {
                    font-size: 26px;
                }
            }
        `}</style>

        <div className="about3-container">
            <h2 className="about3-heading">Our Member</h2>
            <div className="about3-underline"></div>

            <div className="about3-row">

                <div className="about3-card">
                    <img src={ESA} alt="ESA" />
                    <h4>ESA GRADE</h4>
                    <p>LMS has ESA grade license to carry out electrical works of any kind in PAN India</p>
                </div>

                <div className="about3-card">
                    <img src={IGBC} alt="IGBC" />
                    <h4>IGBC</h4>
                    <p>LMS is a member of Indian Green Building Council</p>
                </div>

                <div className="about3-card">
                    <img src={FSAI} alt="FSAI" />
                    <h4>FSAI</h4>
                    <p>LMS is a member of Fire & Safety Association of India</p>
                </div>

                <div className="about3-card">
                    <img src={IPA} alt="IPA" />
                    <h4>IPA</h4>
                    <p>LMS is a member of Indian Plumbing Association</p>
                </div>

            </div>
        </div>
        </>
    );
}

export default About3;