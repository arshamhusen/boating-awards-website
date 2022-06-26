import React from "react";
import Heading from "../../ui/heading/Heading";
import WinnerTabMenu from "../../components/winner-tab-menu/WinnerTabMenu";

function Winners() {
  return (
    <section className="flex bg-lightgray py-10 md:py-20  flex-cols justify-start  items-start mb-20">
      <div className="  md:flex md:flex-col md:justify-center  grid grid-cols-1 gap-5 md:gap-4 lg:gap-6">
        <div className="px-10 md:px-20 lg:px-20">
          <Heading heading="Winners" />
        </div>

        <WinnerTabMenu />
      </div>
    </section>
  );
}

export default Winners;
