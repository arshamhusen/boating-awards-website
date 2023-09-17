import React, { useEffect, useState } from "react";
import Button from "../../ui/button/Button";
import AOS from "aos";
import "aos/dist/aos.css";

function Banner(props) {
  useEffect(() => {
    console.log(JSON.stringify(props) + "hello");
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url('https://wallpapercave.com/wp/wp2253712.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-screen w-screen  bg-cover  bg-left flex flex-col justify-start md:justify-center pt-40 lg:pt-0 item-start lg:items-center"
    >
      <div
        data-aos="fade-up"
        className="text-center space-y-10 md:text-center items-center md:items-center  flex flex-col px-6 md:px-40 max-w-none md:max-w-6xl lg:max-w-7xl "
      >
        <img
          src="https://boatingawards-bucket.s3.ap-south-1.amazonaws.com/footer/Boating Awards Logo.png"
          className="w-32 md:w-44 pt-0 md:pt-10 "
        />
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-6xl lg:text-7xl  text-primary font-bold"
        >
          {props.data.heading}
        </h1>
        <h3 className="text-lg md:text-2xl lg:text-3xl w-3/4 mt-5 mb-8 text-secondary font-medium">
          {props.data.title}
        </h3>

        {props.data.button_href && (
          <a
            className="uppercase p-1.5 lg:p-3 px-12 lg:px-20 font-medium text-sm lg:text-base text-white hover:brightness-125 bg-secondary rounded-full"
            href={props.data.button_href}
          >
            {props.data.button_text}
          </a>
        )}
      </div>
    </div>
  );
}

export default Banner;
