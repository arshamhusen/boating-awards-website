import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Heading(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <h1
      className={`text-2xl md:text-4xl lg:text-3xl xl:text-4xl mt-4 lg:mt-14 text-center md:text-${props.position} font-bold capitalize text-${props.color}`}
    >
      {props.heading}
    </h1>
  );
}

export default Heading;
