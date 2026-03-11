import React from "react";
import about from "../../assets/about2.png";

const About2 = () => {
    return (
        <div className="about2-container">
            <h2 className="about2-heading">Our Team Strength</h2>

            <div className="about2-underline"></div>

            <p className="about2-text">
                Our strength is our ability to understand MEP and management concepts and in prompt and efficient service at every stage of the project assuring our valued clients nothing less than our best.
            </p>

            <img src={about} alt="about" className="about2-image" />

            <style>{`
                .about2-container {
                    text-align: center;
                    padding: 60px 20px;
                    background-color: #E6F4F1;
                }

                .about2-heading {
                    font-size: 32px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                .about2-underline {
                    width: 60px;
                    height: 3px;
                    background-color: #1D5F53;
                    margin: 0 auto 30px auto;
                }

                .about2-text {
                    width: 75%;
                    margin: 0 auto 40px auto;
                    font-size: 16px;
                    line-height: 1.6;
                }

                .about2-image {
                    width: 80%;
                    display: block;
                    margin: 0 auto;
                    border-radius: 20px;
                }
            `}</style>
        </div>
    );
};

export default About2;