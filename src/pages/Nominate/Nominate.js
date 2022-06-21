import React from "react";
import Heading from "../../ui/heading/Heading";
import WinnerTabMenu from "../../components/winner-tab-menu/WinnerTabMenu";
import Button from "../../ui/button/Button";

function Category() {
  return (
    <section className="flex flex-cols justify-start h-[90vh] items-start px-10 mb-10">
      <div className="w-full gap-5">
        <div className="mb-10 gap-3 grid grid-cols-1">
          <Heading heading="Nominate Now" />
          <h2 className="text-gray font-medium">
            All applicants must be eligible NBAM Members
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5">
          <label className="text-sm text-gray font-medium">
            Please Select one or more categories
          </label>
          <input
            className="p-2 px-2 border ring-0 outline-none border-primary"
            placeholder=""
          ></input>
        </div>
      </div>
    </section>
  );
}

export default Category;
