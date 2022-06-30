import React from "react";
import Heading from "../../ui/heading/Heading";
import WinnerTabMenu from "../../components/winner-tab-menu/WinnerTabMenu";

function Winners() {
  return (
    <section className="flex py-10 md:py-20  flex-cols justify-start  items-start">
      <div className="  md:flex md:flex-col md:justify-center  grid grid-cols-1 gap-5 md:gap-4 lg:gap-6">
        <div className="px-10 md:px-20 lg:px-20 flex text-start md:text-center flex-col gap-y-5">
          <Heading heading="Winners" position="center" color="secondary" />

          <p className="text-small md:text-xl text-gray mt-2">
            Click on a year to expand
          </p>
        </div>

        <WinnerTabMenu />
      </div>
    </section>
  );
}

export default Winners;
