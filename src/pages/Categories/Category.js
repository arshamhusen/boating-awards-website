import React from "react";
import Heading from "../../ui/heading/Heading";
import WinnerTabMenu from "../../components/winner-tab-menu/WinnerTabMenu";
import Button from "../../ui/button/Button";

function Category() {
  return (
    <section className="flex  flex-cols justify-start items-start p-10 mb-20">
      <div className=" w-full gap-5">
        <div className="mb-10">
          <Heading heading="Categories" />
        </div>
        <div className="grid grid-cols-1 gap-5">
          <div className="bg-lightgray w-full p-5">
            <div className="flex flex-row  justify-start items-center mb-5">
              <img
                src={window.location.origin + `/uploads/vectors/laurel.svg`}
                className="bg-purple-200 w-14 "
                alt=""
              />
              <p className="font-medium ml-4 text-lg text-secondary">
                Best Liveaboard/Yacht
              </p>
            </div>
            <Button title="see listings" />
          </div>
          <div className="bg-lightgray w-full p-5">
            <div className="flex flex-row  justify-start items-center mb-5">
              <img
                src={window.location.origin + `/uploads/vectors/laurel.svg`}
                className="bg-purple-200 w-14 "
                alt=""
              />
              <p className="font-medium ml-4 text-lg text-secondary">
                Best Liveaboard/Yacht
              </p>
            </div>
            <Button title="see listings" />
          </div>
          <div className="bg-lightgray w-full p-5">
            <div className="flex flex-row  justify-start items-center mb-5">
              <img
                src={window.location.origin + `/uploads/vectors/laurel.svg`}
                className="bg-purple-200 w-14 "
                alt=""
              />
              <p className="font-medium ml-4 text-lg text-secondary">
                Best Liveaboard/Yacht
              </p>
            </div>
            <Button title="see listings" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
