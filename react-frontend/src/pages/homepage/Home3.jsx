import React from "react";
import safe from "../../assets/safe.png";

const Home3 = () => {
    return (
        <>
            <style>{`
                .home3-container {
                    padding: 50px 20px;
                }

                .home3-title {
                    text-align: center;
                    font-size: 32px;
                    font-weight: bold;
                    margin-bottom: 40px;
                    position: relative;
                }

                /* Smaller underline */
                .home3-title::after {
                    content: "";
                    width: 50px;   /* reduced size */
                    height: 3px;   /* thinner line */
                    background-color: #1D5F53;
                    display: block;
                    margin: 8px auto 0;
                }

                .home3-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 40px;
                }

                .home3-text {
                    flex: 1;
                    font-weight : bold;
                    font-size: 20px;
                    line-height: 1.8;
                    text-align: left;
                    padding-left: 30px;  /* moved little right */
                }

                .home3-image {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                }

                .home3-image img {
                    width: 100%;
                    max-width: 400px;
                    height: auto;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .home3-content {
                        flex-direction: column;
                        text-align: center;
                    }

                    .home3-text {
                        text-align: center;
                        padding-left: 0; /* remove shift on mobile */
                    }
                }
            `}</style>

            <div className="home3-container">
                <h2 className="home3-title">Safety</h2>

                <div className="home3-content">
                    <p className="home3-text">
                        We consider employee safety, as foremost important for which we impart them with essential ‘Personal Protective Equipments’, conduct regular training and awareness sessions. We follow local government protocols, put effort on ‘accident and incident prevention’, and organize regular ‘recording and follow ups’. We follow ‘5s safety’ in our organization and in our workplace. Our team ensures equipment and site safety in our workplace and delivers a safe, secured and efficient solar plant to our customers.
                    </p>

                    <div className="home3-image">
                        <img src={safe} alt="Safety" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home3;