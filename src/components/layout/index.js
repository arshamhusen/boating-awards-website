import React from "react";
import BodyWrapper from "../bodyWrapper";
import NavBar from "../nav-bar/NavBar";
import Footer from "../Footer";

function WebsiteLayout({ children, props }) {
  return (
    <BodyWrapper>
      <div className="w-screen h-screen justify-center">
        <NavBar />
        <section className="w-full">{children}</section>
        <Footer />
      </div>
    </BodyWrapper>
  );
}

export default WebsiteLayout;
