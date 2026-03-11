import React from 'react';
import AC from '../../assets/AC.jpg';

const MepHvac = () => {
    return(
        <div className="hvac-container">

            <style>{`
                .hvac-container{
                    width:100%;
                    padding:20px;
                    box-sizing:border-box;
                    font-family:Arial, Helvetica, sans-serif;
                }

                /* BREADCRUMB SECTION */

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

                /* CONTENT SECTION */

                .hvac-content{
                    display:flex;
                    justify-content:space-between;
                    align-items:flex-start;
                    gap:40px;
                    margin-left:40px;
                    margin-right:40px;
                }

                .hvac-text{
                    flex:1;
                    max-width:650px;
                }

                .hvac-text h4{
                    font-weight:400;
                    line-height:1.6;
                    margin-bottom:20px;
                }

                .hvac-text ul{
                    padding-left:20px;
                    line-height:1.6;
                }

                .hvac-text li{
                    margin-bottom:8px;
                }

                /* IMAGE SECTION */

                .hvac-image{
                    flex:1;
                    display:flex;
                    justify-content:flex-end;
                }

                .hvac-image img{
                    width:100%;
                    max-width:500px;
                    height:auto;
                    border-radius:6px;
                }

                /* RESPONSIVE */

                @media (max-width:900px){

                    .hvac-content{
                        flex-direction:column;
                        margin-left:20px;
                        margin-right:20px;
                    }

                    .hvac-image{
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
                <a href="/services/hvac">MEP Works – Hvac</a>
                <h2>MEP Works – Hvac</h2>
            </div>

            <div className="hvac-content">

                <div className="hvac-text">
                    <h4>
                        The very purpose of LMS offering service is to provide one stop MEP solutions to our clients.
                        LMS has all capabilities in-house for designing and executing heating ventilation air-conditioning systems and solutions.
                    </h4>

                    <ul>
                        <strong>KEY STRENGTHS:</strong>
                        <li>Core design team to combine performances with aesthetics ensuring a cost-effective air conditioning system.</li>
                        <li>Planning team to ensure movement of material at the appropriate time, reduce wastage and delivering projects on time.</li>
                        <li>Exclusive procurement and Quality Control department to procure quality products at reasonable rates and ensure value for money.</li>
                        <li>Project team to ensure quality HVAC installation and co-ordination among other agencies, safety of workman and translating the design into reality.</li>
                        <li>Sets of well-experienced and handpicked associates to a consolidated strength of 100 – 150 people</li>
                        <li>Dedicated factory with imported machines for Duct Manufacturing, Ducts are made using the SMACNA & IS standards.</li>
                    </ul>
                </div>

                <div className="hvac-image">
                    <img src={AC} alt="AC" />
                </div>

            </div>

        </div>
    );
}

export default MepHvac;