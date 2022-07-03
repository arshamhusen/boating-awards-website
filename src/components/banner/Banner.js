import React, { useEffect, useState } from "react";
import Button from "../../ui/button/Button";
import AOS from "aos";
import "aos/dist/aos.css";

function Banner() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(https://main.d1aygiw4pvqbs8.amplifyapp.com/uploads/images/banner-bg.jpg)`,
      }}
      className="h-screen w-screen bg-cover bg-top flex flex-col justify-center items-center"
    >
      <div
        data-aos="fade-up"
        className="text-start md:text-center items-start md:items-center  flex flex-col px-6 md:px-40 max-w-none md:max-w-full lg:max-w-7xl "
      >
        <h1
          data-aos="fade-up"
          className="text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-snug lg:leading-relaxed text-white font-bold"
        >
          Celebrating the best Boats of Maldives
        </h1>
        <h3 className="text-xl md:text-2xl lg:text-3xl w-3/4 mt-5 mb-8 text-white font-medium">
          Now accepting nominations for 2022 Awards
        </h3>

        <Button title={"nominate now"} />
      </div>
    </div>
  );
}

export default Banner;
