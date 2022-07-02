import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import Button from "../../ui/button/Button";

const categories = [
  {
    name: "Best Liveaboard or Yacht Builder (Building Company)",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Index() {
  const [showMenu, setShowMenu] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  async function categorySelect(cat) {
    setShowMenu(false);
    setSelectedCategory(cat);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" w-full max-w-7xl ">
      <div
        className={`justify-center flex-col items-center ${
          showMenu ? "flex" : "hidden"
        }`}
      >
        <p className="text-small md:text-xl font-medium text-gray mb-4">
          Click on a category to view the nominees
        </p>
      </div>
      <div
        className={`justify-center flex-col mt-10 items-center ${
          showMenu ? "hidden" : "flex"
        }`}
        onClick={() => setShowMenu(true)}
      >
        <Button title="Show All categories" />
      </div>

      <Tab.Group manual>
        <div className="grid grid-cols-1 gap-x-3">
          <div
            className={`flex mt-20 lg:mt-30 ${showMenu ? "flex" : "hidden"}`}
          >
            <Tab.List
              className={`px-0   md:px-10 text-center lg:px-10 md:mt-5 flex flex-wrap  items-start justify-center  gap-x-2 md:gap-x-2 ${
                showMenu ? "flex" : "hidden"
              }`}
            >
              {categories.map((cat) => (
                <Tab
                  defaultChecked={false}
                  data-aos="zoom-out"
                  onClick={() => categorySelect(cat)}
                  className={({ selected }) =>
                    classNames(
                      "py-2.5 md:py-2 text-center bg-lightPrimary mt-2 p-2 px-4 font-medium  text-secondary capitalize  text md:text-base leading-5 ",
                      "focus:outline-none",
                      selected
                        ? "border-b-lime/[9] text-warning bg-primary  "
                        : "text-blue-100 hover:bg-warning "
                    )
                  }
                >
                  {cat.name}
                </Tab>
              ))}
            </Tab.List>
          </div>

          <div
            className={` md:ml-5  p-5 flex-shrink-0  rounded-xl ${
              showMenu ? "hidden" : "block"
            }`}
          >
            <Tab.Panels>
              <Tab.Panel className={` gap-8 `}>
                <>
                  <div className="grid grid-cols-1 gap-y-2 my-10">
                    <h1 className="text-3xl font-medium text-secondary">
                      {selectedCategory.name}
                    </h1>
                    <p className="text-xl text-gray">
                      This is awarded to the best boat
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {categories.map((cat) => (
                      <div
                        data-aos="fade-up"
                        className="flex justify-start rounded-xl p-10 bg-lightgray h-[32vh] items-start"
                      >
                        <div className="grid grid-cols-12 gap-x-4">
                          <div class="h-min overflow-hidden col-span-5 rounded-md bg-white p-2 items-center justify-center">
                            <img
                              src={
                                "https://thehawks.biz/wp-content/uploads/2020/11/footerlogo.png"
                              }
                              className="bg-purple-200 max-h-[22vh] h-[22vh]  w-80 lg:w-[96vh] hover:scale-125 transition-all duration-500"
                              alt=""
                            />
                          </div>
                          <div className="col-span-7">
                            <h1 className="text-xl font-medium text-secondary">
                              The Hawks Pvt Ltd
                            </h1>
                            <div className="grid grid-cols-12 gap-y-3 mt-4 overflow-hidden">
                              <div className="grid grid-cols-1 col-span-3  text-primary font-medium">
                                <h4>Address:</h4>
                                {/* <h4>Email:</h4>
                                <h4>Telephone:</h4> */}
                              </div>
                              <div className="grid grid-cols-1 col-span-9">
                                <h4>
                                  Uthurumaafaru Island, Raa Atoll, Maldives
                                </h4>
                              </div>
                              <div className="grid grid-cols-1 col-span-3  text-primary font-medium">
                                <h4>Email:</h4>
                              </div>
                              <div className="grid grid-cols-1 col-span-9">
                                <h4>sales@youandmemaldives.com</h4>
                              </div>
                              <div className="grid grid-cols-1 col-span-3  text-primary font-medium">
                                <h4>Phone:</h4>
                              </div>
                              <div className="grid grid-cols-1 col-span-9">
                                <h4>+960 6581000:</h4>
                              </div>
                            </div>
                            <div className="w-full mt-4">
                              <Button title="vote now" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </div>
      </Tab.Group>
    </div>
  );
}

export default Index;
