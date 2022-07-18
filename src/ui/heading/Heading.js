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
      className={`text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-start md:text-${props.position} font-bold capitalize text-${props.color}`}
    >
      {props.heading}
    </h1>
  );
}

export default Heading;
