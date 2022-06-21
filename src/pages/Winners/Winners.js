import React from "react";
import Heading from "../../ui/heading/Heading";
import WinnerTabMenu from "../../components/winner-tab-menu/WinnerTabMenu";

function Winners() {
  return (
    <section className="flex bg-lightgray py-10 flex-cols justify-start  items-start pb-10">
      <div className=" gap-5">
        <div className="px-10 mb-6">
          <Heading heading="Winners" />
        </div>

        <WinnerTabMenu />
      </div>
    </section>
  );
}

export default Winners;
