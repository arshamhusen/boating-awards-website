import React from "react";
import BodyWrapper from "../bodyWrapper";
import NavBar from "../nav-bar/NavBar";

function WebsiteLayout({ children, props }) {
  return (
    <BodyWrapper>
      <div className="flex flex-row w-screen h-screen justify-start">
        <section className="w-full">{children}</section>
        {/* <Footer/> */}
      </div>
    </BodyWrapper>
  );
}

export default WebsiteLayout;
