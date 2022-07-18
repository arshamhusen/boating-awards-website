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
        backgroundImage: `url(${props.data.image_URI})`,
      }}
      className="h-screen w-screen bg-cover bg-secondary bg-top flex flex-col justify-center items-center"
    >
      <div
        data-aos="fade-up"
        className="text-start md:text-center items-start md:items-center  flex flex-col px-6 md:px-40 max-w-none md:max-w-full lg:max-w-7xl "
      >
        <h1
          data-aos="fade-up"
          className="text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-snug lg:leading-relaxed text-white font-bold"
        >
          {props.data.heading}
        </h1>
        <h3 className="text-xl md:text-2xl lg:text-3xl w-3/4 mt-5 mb-8 text-primary font-medium">
          {props.data.title}
        </h3>

        <a
          className="uppercase p-3 px-12 font-medium text-base text-secondary hover:brightness-125 bg-lightPrimary rounded-full"
          href={props.data.button_href}
        >
          {props.data.button_text}
        </a>
      </div>
    </div>
  );
}

export default Banner;
