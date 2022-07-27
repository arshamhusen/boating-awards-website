import React from "react";

function Button(props) {
  return (
    <button className="px-4 p-2 text-primary border:primary font-medium rounded-full bg-lightPrimary  uppercase hover:brightness-95  text-xs md:text-sm lg:text-xs">
      {props.title}
    </button>
  );
}

export default Button;
