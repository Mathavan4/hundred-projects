import { Routes, Route } from "react-router-dom";

import Home from "../pages/homepage/Home";
import About from "../pages/Aboutuspage/Aboutus";
import OurService from "../pages/OurService/OurServicepage";
import MEPELEC from "../pages/OurService/MepElec";
import MEPHVAC from "../pages/OurService/MepHvac";
import MEPFS from "../pages/OurService/MepFS";
import MEPIBMS from "../pages/OurService/Mep"
import CONTACT from "../pages/contact"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<OurService />}/>
      <Route path="/services/electrical" element={<MEPELEC />} />
      <Route path="/services/hvac" element={<MEPHVAC />} />
      <Route path="/services/fire" element={<MEPFS />}/>
      <Route path="/services/ibms" element={<MEPIBMS />}/>
      <Route path="/contact" element={< CONTACT />}/>
    </Routes>
  );
};

export default AppRoutes;