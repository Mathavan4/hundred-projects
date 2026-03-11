import React from "react";
import mission from "../../assets/rocket.png";
import vission from "../../assets/vission.png";

const Home2 = () => {
    return (
        <>
            <style>{`
                .home2-container {
                    padding: 40px 20px;
                    text-align: center;
                    background-color: #E6F4F1;
                }

                .home2-heading {
                    font-size: 32px;
                    font-weight: bold;
                    margin-bottom: 5px;
                }

                .home2-underline {
                    width: 60px;
                    height: 3px;
                    background-color: #1D5F53;
                    margin: 0 auto 20px auto;
                    border-radius: 5px;
                }

                .home2-description {
                    max-width: 900px;
                    margin: 0 auto;
                    line-height: 1.7;
                    font-size: 16px;
                }

                .button-container {
                    margin-top: 20px;
                    margin-bottom: 40px;
                }

                .read-btn {
                    padding: 10px 25px;
                    font-size: 16px;
                    font-weight: bold;
                    background-color: #1D5F53;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: all 0.4s ease;
                }

                /* HOVER EFFECT */
                .read-btn:hover {
                    background-color: white;
                    color: #1D5F53;
                    transform: translateY(-6px);
                    box-shadow: 0px 8px 20px rgba(0,0,0,0.4);
                }

                .section-wrapper {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 40px;
                    flex-wrap: wrap;
                }

                .card {
                    flex: 1 1 400px;
                    text-align: center;
                    padding: 20px;
                }

                .card img {
                    width: 80px;
                    margin-bottom: 15px;
                }

                .card h4 {
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                .card p {
                    line-height: 1.6;
                    font-size: 15px;
                    max-width: 100%;
                }

                /* Mobile Responsive */
                @media (max-width: 768px) {
                    .section-wrapper {
                        flex-direction: column;
                    }
                        
                }
            `}</style>

            <div className="home2-container">
                
                <h2 className="home2-heading">Who We Are</h2>
                <div className="home2-underline"></div>

                <p className="home2-description">
                    We have steadily built up a strong reputation for quality installation 
                    and service to all our known customers - domestic and commercial.
                    The Owner of the company - Mr. Chandra Bose has been within the 
                    Electrical & Safety industry for over 18 years and has extensive 
                    knowledge of certain sites and their Electrical & MEP Systems 
                    installations in India & Abroad.
                </p>

                <div className="button-container">
                    <a href="/about">
                        <button className="read-btn">Read More</button>
                    </a>
                </div>

                <div className="section-wrapper">

                    <div className="card">
                        <img src={mission} alt="mission" />
                        <h4>Mission</h4>
                        <p>
                            Guided by our vision we shall deliver high-quality, 
                            cost-effective projects on schedule and enhance our 
                            client’s satisfaction through continuous improvement 
                            of our business practices.
                        </p>
                    </div>

                    <div className="card">
                        <img src={vission} alt="vission" />
                        <h4>Vision</h4>
                        <p>
                            To become one of the leading and most reliable 
                            MEP contracting companies.
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Home2;