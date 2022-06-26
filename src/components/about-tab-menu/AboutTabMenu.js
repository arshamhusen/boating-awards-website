import React from "react";
import { Tab } from "@headlessui/react";

const menu = [
  {
    name: "award",
    picture: "awards-trophy.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "NBAM",
    picture: "nbam.png",
    description:
      "Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Benefits",
    picture: "benefits.png",
    description:
      "Lorem ipsum dolor sit amet,  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AboutTabMenu() {
  return (
    <div>
      <Tab.Group>
        <div className="flex justify-start md:justify-center  items-center">
          <Tab.List
            className={`px-10 md:px-20 lg:px-20 grid grid-cols-6 gap-x-2 md:gap-x-8`}
          >
            {menu.map((menu) => (
              <Tab
                className={({ selected }) =>
                  classNames(
                    "py-2.5 md:py-10 text-secondary capitalize  font-semibold text-lg md:text-xl lg:text-2xl leading-5  md:pr-0",
                    "focus:outline-none",
                    selected
                      ? "border-b-lime/[9] text-warning "
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-lightPrimary"
                  )
                }
              >
                {menu.name}
              </Tab>
            ))}
          </Tab.List>
        </div>

        <Tab.Panels>
          {menu.map((menu) => (
            <>
              <Tab.Panel
                className={`grid mt-5 grid-cols-1 md:grid-cols-2 gap-8 md:gap-20`}
              >
                <p className="text-base md:text-lg lg:text-xl">
                  {menu.description}
                </p>
                <div className=" bg-lightgray  h-[35vh] md:h-[48vh] lg:h-[60vh] p-5 flex-shrink-0  flex justify-center rounded-xl">
                  <img
                    src={
                      window.location.origin + `/uploads/images/${menu.picture}`
                    }
                    className="rounded-10 flex-shrink-0"
                  />
                </div>
              </Tab.Panel>
            </>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default AboutTabMenu;
