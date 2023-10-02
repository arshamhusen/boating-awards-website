import React from "react";
import BodyWrapper from "../bodyWrapper";
import NavBar from "../nav-bar/NavBar";


function WebsiteLayout({ children, props }) {
  return (
    <BodyWrapper>
      <div className="w-screen h-full relative  justify-center">
        <NavBar />
        <div className=" w-full relative  flex justify-center items-center">
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full top-0 object-cover min-h-[100vh] absolute"
          >
            <source
              src="https://boatingawards-bucket.s3.ap-south-1.amazonaws.com/videos/loop.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <section className="flex z-50 flex-col lg:pt-2 bg-black">
          {children}
        </section>
      </div>
    </BodyWrapper>
  );
}

export default WebsiteLayout;
