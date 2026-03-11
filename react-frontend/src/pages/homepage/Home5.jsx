import React from "react";

const Home5 = ({
  breadcrumb = false,
  pageTitle = "Reach Us",
  description = "We are proud of the service we provide and stand by every product we carry.",
  showBranches = false,
  formTitle = "",
  formSubtitle = ""
}) => {
  return (
    <>
      <div className="home5-container">

        {/* Breadcrumb */}
        {breadcrumb && (
          <div className="breadcrumb">
            <a href="/">HUNDRED PROJECTS</a> / <a href="/contact">CONTACT</a>
          </div>
        )}

        <h2 className="home5-title">{pageTitle}</h2>

        <p className="home5-description">{description}</p>

        <div className="home5-content">
          
          <div className="home5-left">
            <h4>Head Office :</h4>

            <ul>
              <li>Lotus MEP Solutions</li>
              <li>L-362, Dreams Mall, Bhandup(w) Mumbai -400078</li>
              <li>email: info@lotusmepsolutions.com</li>
              <li>web: www.lotusmepsolutions.com</li>
              <li>Contact @ 022-65342052 , +91-9769712008</li>
            </ul>

            {showBranches && (
              <>
                <h4>Our Branches</h4>
                <p>
                  Chennai, Mumbai, Pune, Kolkata, Bangalore,
                  Hydrabad, Aurangabad
                </p>
              </>
            )}
          </div>

          <div className="home5-right">

            {formTitle && <h3>{formTitle}</h3>}
            {formSubtitle && <p>{formSubtitle}</p>}

            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>

          </div>

        </div>
      </div>

      <style>{`
        .breadcrumb{
          margin-bottom:20px;
          color:#555;
        }

        .breadcrumb a{
          text-decoration:none;
          color:#1D5F53;
          font-weight:500;
        }

        .home5-container {
          padding: 50px 20px;
          max-width: 1200px;
          margin: auto;
        }

        .home5-title {
          text-align: center;
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 10px;
          position: relative;
        }

        .home5-title::after {
          content: "";
          width: 60px;
          height: 3px;
          background-color: #1D5F53;
          display: block;
          margin: 8px auto 0;
          border-radius: 5px;
        }

        .home5-description {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 40px;
          color: #555;
        }

        .home5-content {
          display: flex;
          justify-content: space-between;
          gap: 40px;
        }

        .home5-left {
          flex: 1;
        }

        .home5-left h4 {
          margin-bottom: 15px;
          font-size: 18px;
        }

        .home5-left ul {
          list-style: none;
          padding: 0;
          line-height: 1.8;
          color: #444;
        }

        .home5-right {
          flex: 1;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        input, textarea {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 14px;
        }

        textarea {
          min-height: 100px;
          resize: vertical;
        }

        button {
          padding: 10px;
          border: none;
          background-color:#1D5F53 ;
          color: #E6F4F1;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
        }

        button:hover {
          background-color: #E6F4F1;
          color: #1D5F53;
          border: 1px solid #1D5F53;
        }

        @media (max-width: 768px) {
          .home5-content {
            flex-direction: column;
          }

          .home5-left,
          .home5-right {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Home5;