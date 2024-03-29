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
      className={`text-4xl md:text-5xl pt-4 lg:text-5xl  mt-4 lg:mt-14 text-center md:text-${props.position} font-bold capitalize text-white`}
    >
      {props.heading}
    </h1>
  );
}

export default Heading;
