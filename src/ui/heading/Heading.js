import React from "react";

function Heading(props) {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl text-start md:text-center font-bold capitalize text-secondary">
      {props.heading}
    </h1>
  );
}

export default Heading;
