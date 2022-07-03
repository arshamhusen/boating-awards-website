import React from "react";

function Button(props) {
  return (
    <button className="px-6 p-2 text-white font-semibold rounded-lg bg-warning  uppercase hover:brightness-95  text-xs md:text-sm lg:text-sm">
      {props.title}
    </button>
  );
}

export default Button;
