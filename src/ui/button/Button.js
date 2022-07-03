import React from "react";

function Button(props) {
  return (
    <button className="px-6 p-2 rounded-lg bg-warning text-secondary uppercase hover:brightness-95  text-xs md:text-sm lg:text-sm">
      {props.title}
    </button>
  );
}

export default Button;
