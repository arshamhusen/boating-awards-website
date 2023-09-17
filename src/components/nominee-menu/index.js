import React, { useState, useEffect } from "react";
import "tw-elements";
import Heading from "../../ui/heading/Heading";
import Categories from "../Categories/Categories";
import Button from "../../ui/button/Button";
import { Link } from "react-router-dom";

const category_type = [
  {
    index: 1,
    name: "Categories",
    description: "This category is selected based on the yachts",
    route: "/nominees/general",
    image:
      "url(https://t4.ftcdn.net/jpg/03/11/45/49/360_F_311454984_FsUGN9gBeilmYksiEKg1SPjr78mULUrR.jpg)",
  },
  {
    index: 2,
    name: "Faces of Boating",
    description: "This category is selected based on the yachts",
    route: "/nominees/fob",
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
    <div className=" w-full max-w-7xl min-h-screen pt-10 lg:pt-0">
      <div
        className="text-center flex items-center space-y-5 justify-center flex-col  mt-20 mb-10"
        data-aos="fade-up"
      >
        <Heading
          heading={"2022 Nominees"}
          position="center"
          color="secondary"
        />
        {/* {catTypeSelected && (
          <div onClick={() => setCatTypeSelected(false)}>
            <Button title="Go Back" />
          </div>
        )} */}
      </div>

      {/* Select either Faces of Boating or General Categories */}

      <div className="flex justify-center max-w-7xl items-center mt-10">
        <div className="grid grid-cols-1 w-full px-5   gap-2 gap-5">
          {category_type.map((cat) => (
            <Link
              to={cat.route}
              data-aos="fade-up"
              key={cat.index}
              className=" cursor-pointer hover:drop-shadow-sm "
            >
              <div className="border-2 border-primary hover:bg-lightPrimary rounded-2xl flex flex-col justify-center items-center">
                <div className="p-10 lg:p-5 flex items-center text-center justify-center flex-col">
                  <h1 className="text-lg lg:text-xl text-primary font-bold">
                    {cat.name}
                  </h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
