import React from "react";
import BodyWrapper from "../bodyWrapper";
import NavBar from "../nav-bar/NavBar";
import Footer from "../Footer";

function WebsiteLayout({ children, props }) {
  return (
    <BodyWrapper>
      <div className="w-screen bg-secondary  justify-center">
        <NavBar />
        <section className="flex flex-col lg:pt-2 justify-center items-center">
          {children}
        </section>
        <Footer />
      </div>
    </BodyWrapper>
  );
}

export default WebsiteLayout;
