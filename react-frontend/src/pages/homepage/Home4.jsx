import React from "react";
import accenturem from "../../assets/AM.png";
import accenturek from "../../assets/AK.png";
import wiproc from "../../assets/WC.png";
import wiprok from "../../assets/WK.png";
import wiprob from "../../assets/WB.png";
import cap from "../../assets/CL.png";

const Home4 = () => {
    return (
        <>
            <div className="home4">
                <h2 className="home4-heading">Our Customers</h2>
                <h4 className="home4-subtext">Customers we carry.</h4>

                <div className="home4-logos">
                    <img src={accenturem} alt="Accenture Logo" />
                    <img src={accenturek} alt="Accenture K Logo" />
                    <img src={wiproc} alt="Wipro C Logo" />
                    <img src={wiprok} alt="Wipro K Logo" />
                    <img src={wiprob} alt="Wipro B Logo" />
                    <img src={cap} alt="Capgemini Logo" />
                </div>
            </div>

            <style>{`
                .home4 {
                    padding: 60px 20px;
                    text-align: center;
                    background-color: #E6F4F1;
                }

                .home4-heading {
                    font-size: 32px;
                    font-weight: bold;
                    margin-bottom: 10px;
                    position: relative;
                    display: inline-block;
                }

                /* Underline */
                .home4-heading::after {
                    content: "";
                    width: 60px;
                    height: 4px;
                    background-color: #1D5F53;
                    display: block;
                    margin: 8px auto 0;
                    border-radius: 5px;
                }

                .home4-subtext {
                    font-size: 16px;
                    color: #555;
                    margin-bottom: 40px;
                }

                .home4-logos {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 30px;
                }

                .home4-logos img {
                    width: 180px; 
                    height: auto;
                    transition: transform 0.3s ease;
                }

                .home4-logos img:hover {
                    transform: scale(1.1);
                }

                /* Tablet */
                @media (max-width: 768px) {
                    .home4-heading {
                        font-size: 26px;
                    }

                    .home4-logos img {
                         width: 150px;
                    }
                }

                /* Mobile */
                @media (max-width: 480px) {
                    .home4-heading {
                        font-size: 22px;
                    }

                    .home4-subtext {
                        font-size: 14px;
                    }

                    .home4-logos {
                        gap: 20px;
                    }

                    .home4-logos img {
                        width: 120px;
                    }
                }
            `}</style>
        </>
    );
};

export default Home4;