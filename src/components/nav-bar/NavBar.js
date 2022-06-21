import React from "react";

function NavBar() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(http://192.168.1.218:3000/uploads/images/nav-bg.png`,
        }}
        className="fixed w-full z-50  drop-shadow-md h-24 bg-cover"
      >
        <div className="flex items-center px-5 justify-between">
          <div className="flex flex-row items-center pt-1">
            <img
              src={window.location.origin + `/uploads/vectors/awards.svg`}
              className="h-20 w-20"
            />
            <img
              src={window.location.origin + `/uploads/vectors/nbam.svg`}
              className="w-20 h-16"
            />
          </div>
          <div className="flex items-center justify-center ">
            <img
              src={window.location.origin + `/uploads/vectors/menu.svg`}
              className="w-10 h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
