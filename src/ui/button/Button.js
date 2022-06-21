import React from "react";

function Button(props) {
  return (
    <button className="px-6 p-2 bg-warning text-secondary uppercase hover:brightness-95 font-medium text-sm">
      {props.title}
    </button>
  );
}

export default Button;
