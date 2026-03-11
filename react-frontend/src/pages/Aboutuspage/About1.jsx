import React from 'react';
import about from "../../assets/about1.jpg";

const About1 = () => {
    return(
        <>
        <style>{`
            .about-container {
                padding: 20px;
                font-family: Arial, sans-serif;
            }

            /* Top breadcrumb style */
            .top-links {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 20px;
                font-size: 18px;
                color: #1D5F53;
                font-weight: 500;
            }

            .top-links a {
                text-decoration: none;
                color: #1D5F53;
            }

            .separator {
                color: #1D5F53;
            }

            /* Full width heading background */
            .main-heading-wrapper {
                width: 100%;
                background-color: #E6F4F1;
                padding: 40px 0;
                margin-bottom: 40px;
            }

            .main-heading {
                max-width: 900px;
                margin: 0 auto;
                text-align: center;
                color: #1D5F53;
                line-height: 1.6;
            }

            /* Content layout */
            .content-section {
                display: flex;
                gap: 30px;
                align-items: flex-start;
            }

            .content-section img {
                width: 40%;
                max-width: 400px;
                height: auto;
            }

            .text-content {
                width: 60%;
            }

            /* h2 center + small underline */
            .text-content h2 {
                text-align: center;
                color: black;
                position: relative;
                margin-bottom: 20px;
            }

            .text-content h2::after {
                content: "";
                display: block;
                width: 60px;
                height: 3px;
                background-color: #1D5F53;
                margin: 8px auto 0;
            }

            /* Remove dots */
            .text-content ul {
                list-style: none;
                padding: 0;
            }

            .text-content li {
                margin-bottom: 12px;
                line-height: 1.6;
            }

            /* Responsive */
            @media (max-width: 768px) {
                .content-section {
                    flex-direction: column;
                }

                .content-section img,
                .text-content {
                    width: 100%;
                }

                .main-heading {
                    padding: 0 15px;
                }
            }
        `}</style>

        <div className="about-container">

            <div className="top-links">
                <a href="/">Lotus MEP Solutions</a>
                <span className="separator"> &gt; </span>
                <a href="/about">About Us</a>
            </div>

        </div>

        <div className="main-heading-wrapper">
            <h1 className="main-heading">
                Our strength is our ability to understand MEP
                and management concepts
            </h1>
        </div>

        <div className="about-container">
            <div className="content-section">
                <img src={about} alt="About Us" />

                <div className="text-content">
                    <h2>About Us</h2>
                    <ul>
                        <li>We have steadily built up a strong reputation for quality installation and service to all our known customers – domestic and commercial.</li>
                        <li>The Owner of the company- Mr. Chandra Bose has been within the Electrical & Safety industry for over 18 years and has extensive knowledge of certain sites and their Electrical & MEP Systems installations in India & Abroad.</li>
                        <li>Lotus Security Solutions would be able to offer a quality service and maintenance package tailored to your company’s specific needs.</li>
                        <li>With safety & security of human lives & property as our top most priority, we provide MEP SOLUTIONS for Offices, Factories, Buildings, Supermarkets, Hotels, Hospitals and more.</li>
                    </ul>
                </div>
            </div>
        </div>

        </>
    );
}

export default About1;