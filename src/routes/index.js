import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Nominees from "../pages/Nominee/Nominees";
import Winners from "../pages/Winners/Winners";
import Nominate from "../pages/Nominate/Nominate";
import Galllery from "../pages/Gallery/Galllery";
import PressReleases from "../pages/PressReleases/PressReleases";
import Downloads from "../pages/Downloads/Downloads";

function PageRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home/1" />} />
        <Route exact path="/home/:id" element={<Home />} />
        <Route exact path="/nominees" element={<Nominees />} />
        <Route exact path="/winners" element={<Winners />} />
        <Route exact path="/nominees/:id" element={<Nominate />} />
        <Route exact path="/gallery" element={<Galllery />} />
        <Route exact path="/press-releases" element={<PressReleases />} />
        <Route exact path="/downloads" element={<Downloads />} />
      </Routes>
    </Router>
  );
}

export default PageRoutes;
