import React, { useState, useEffect } from "react";
import "tw-elements";
import Heading from "../../ui/heading/Heading";
import Categories from "../Categories/Categories";
import Button from "../../ui/button/Button";

const category_type = [
  {
    index: 1,
    name: "General Categories",
    description: "This category is selected based on the yachts",
    image:
      "url(https://t4.ftcdn.net/jpg/03/11/45/49/360_F_311454984_FsUGN9gBeilmYksiEKg1SPjr78mULUrR.jpg)",
  },
  {
    index: 2,
    name: "Faces of Boating",
    description: "This category is selected based on the yachts",
    image:
      "url(https://t4.ftcdn.net/jpg/03/11/45/49/360_F_311454984_FsUGN9gBeilmYksiEKg1SPjr78mULUrR.jpg)",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Index() {
  const [catTypeSelected, setCatTypeSelected] = useState(false);
  const [selectedCatType, setSelectedCatType] = useState({
    index: "",
    name: "",
  });

  // When category type is selected
  const catTypeHandler = (index, name) => {
    setCatTypeSelected(true);
    setSelectedCatType({ index: index, name: name });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" w-full max-w-7xl min-h-screen">
      <div
        className="text-center flex items-center justify-center flex-col  mt-32 mb-0"
        data-aos="fade-up"
      >
        <Heading
          heading={
            catTypeSelected ? `${selectedCatType.name}` : "2022 Nominees"
          }
          position="center"
          color="secondary"
        />
        <div
          data-aos="fade-up"
          className={`justify-center flex-col items-center flex`}
        >
          <p className="text-sm 2xl:text-base font-medium text-gray my-4">
            {catTypeSelected
              ? "Select Category you want to vote or view"
              : "Select one of the category type below"}
          </p>
        </div>
        {catTypeSelected && (
          <div onClick={() => setCatTypeSelected(false)}>
            <Button title="Go Back" />
          </div>
        )}
      </div>

      {/* Select either Faces of Boating or General Categories */}
      {catTypeSelected ? (
        <Categories index={selectedCatType.index} name={selectedCatType.name} />
      ) : (
        <div className="flex justify-center items-center  h-[60vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2  py-5 gap-5 lg:gap-10">
            {category_type.map((cat) => (
              <div
                onClick={() => catTypeHandler(cat.index, cat.name)}
                data-aos="fade-up"
                key={cat.index}
                className=" cursor-pointer hover:drop-shadow-sm"
              >
                <div className="h-[40vh] lg:h-[350px]  border-2 border-primary hover:bg-lightPrimary rounded-2xl flex flex-col justify-center items-center">
                  <div className="p-5 flex items-center text-center justify-center flex-col">
                    <h1 className="text-xl lg:text-3xl text-primary font-bold">
                      {cat.name}
                    </h1>
                    <p className="text-sm lg:text-base w-2/3 mt-2 text-gray">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Index;
