import React from "react";
import Button from "../../ui/button/Button";

function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url(http://192.168.1.218:3000/uploads/images/banner-bg.jpg`,
      }}
      className="h-screen w-screen bg-cover bg-right-bottom "
    >
      <div className="absolute top-100 bg-gradient-to-b from-primary via-primary to-transparent h-80 z-10 w-full"></div>
      <div className=" absolute top-20  z-10 items-start pt-40 flex flex-col px-6">
        <h1 className="text-5xl leading-tight text-white font-bold">
          Celebrating the best Boats of Maldives
        </h1>
        <h3 className="text-xl w-3/4 mt-5 mb-8 text-secondary font-medium">
          Now accepting nominations for 2022 Awards
        </h3>

        <Button title={"nominate now"} />
      </div>
    </div>
  );
}

export default Banner;
