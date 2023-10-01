import React from "react";
import BodyWrapper from "../bodyWrapper";
import NavBar from "../nav-bar/NavBar";


function WebsiteLayout({ children, props }) {
  return (
    <BodyWrapper>
      <div className="w-screen h-full relative  justify-center">
        <NavBar />
        <section className="flex z-50 flex-col lg:pt-2 bg-black">
          {children}
        </section>
      </div>
    </BodyWrapper>
  );
}

export default WebsiteLayout;
