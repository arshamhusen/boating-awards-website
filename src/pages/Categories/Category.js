import React from "react";
import Heading from "../../ui/heading/Heading";
import WinnerTabMenu from "../../components/winner-tab-menu/WinnerTabMenu";
import Button from "../../ui/button/Button";

function Category() {
  return (
    <section className="flex flex-cols justify-start md:justify-center lg:justify-center  items-start md:items-center lg:items-center mb-20">
      <div className="p-10 px-10 md:px-20 lg:px-0 md:flex md:flex-col md:justify-center max-w-7xl grid grid-cols-1 gap-5 md:gap-4 lg:gap-6 ">
        <Heading heading="Categories" />
        Categories
      </div>
    </section>
  );
}

export default Category;
