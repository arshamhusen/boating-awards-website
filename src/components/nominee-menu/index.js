import React, { useState } from "react";
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
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className=" w-full max-w-7xl ">
      <div
        className={`justify-center items-center ${
          showMenu ? "hidden" : "flex"
        }`}
        onClick={() => setShowMenu(true)}
      >
        <Button title="Show All categories" />
      </div>

      <Tab.Group manual>
        <div className="grid grid-cols-1 gap-x-3">
          <div className="flex  ">
            <Tab.List
              className={`px-0  md:px-10 text-center lg:px-10 md:mt-5 flex flex-wrap  items-start justify-center  gap-x-2 md:gap-x-2 ${
                showMenu ? "flex" : "hidden"
              }`}
            >
              {categories.map((cat) => (
                <Tab
                  onClick={() => setShowMenu(false)}
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
            className={`mt-5 md:ml-5  p-5 flex-shrink-0  rounded-xl ${
              showMenu ? "hidden" : "block"
            }`}
          >
            <Tab.Panels>
              <Tab.Panel className={`grid grid-cols-2 gap-8 `}>
                {categories.map((cat) => (
                  <>
                    <div
                      data-aos="fade-up"
                      className="flex justify-center rounded-xl bg-lightgray h-[30vh] items-center"
                    >
                      <p>Hello</p>
                    </div>
                  </>
                ))}
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </div>
      </Tab.Group>
    </div>
  );
}

export default Index;
