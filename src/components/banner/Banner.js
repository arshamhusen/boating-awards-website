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
        backgroundImage: `url("https://img.freepik.com/free-vector/elegant-abstract-gold-background-with-shiny-elements_23-2148827899.jpg?t=st=1658501585~exp=1658502185~hmac=26c906b708a7f630c2b1154c36b867d9fe2e05379c6e4d62f0a8b44e614b9988&w=1480")`,
      }}
      className="h-screen w-screen bg-cover  bg-left flex flex-col justify-start md:justify-center pt-40 lg:pt-0 item-start lg:items-center"
    >
      <div
        data-aos="fade-up"
        className="text-start md:text-center items-start md:items-center  flex flex-col px-6 md:px-40 max-w-none md:max-w-full lg:max-w-7xl "
      >
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-6xl lg:text-7xl leading-tight md:leading-snug lg:leading-relaxed text-secondary font-bold"
        >
          {props.data.heading}
        </h1>
        <h3 className="text-lg md:text-2xl lg:text-3xl w-3/4 mt-5 mb-8 text-primary font-medium">
          {props.data.title}
        </h3>

        <a
          className="uppercase p-1.5 lg:p-3 px-12 font-medium text-sm lg:text-base text-white hover:brightness-125 bg-primary rounded-full"
          href={props.data.button_href}
        >
          {props.data.button_text}
        </a>
      </div>
    </div>
  );
}

export default Banner;
