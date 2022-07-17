import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Nominees from "../pages/Nominee/Nominees";
import Partners from "../pages/Partners/index";
import Nominate from '../pages/Nominate/Nominate'

function PageRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home/1" />} />
        <Route exact path="/home/:id" element={<Home />} />
        <Route exact path="/nominees" element={<Nominees />} />
        <Route exact path="/partners" element={<Partners />} />
        <Route exact path="/nominees/:id" element={<Nominate />} />
      </Routes>
    </Router>
  );
}

export default PageRoutes;
