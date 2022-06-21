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
        <Tab.List className={`flex items-start justify-start`}>
          {menu.map((menu) => (
            <Tab
              className={({ selected }) =>
                classNames(
                  "py-2.5 text-secondary capitalize  font-semibold text-lg leading-5 pr-5",
                  "focus:outline-none",
                  selected
                    ? "border-b-lime/[9] text-warning "
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {menu.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {menu.map((menu) => (
            <>
              <Tab.Panel className={`grid mt-5 grid-rows-2 gap-y-8`}>
                <p>{menu.description}</p>
                <div className="w-full bg-lightgray h-[32vh] p-5 flex-shrink-0  flex justify-end rounded-xl">
                  <img
                    src={
                      window.location.origin + `/uploads/images/${menu.picture}`
                    }
                    className="w-full h-full rounded-10"
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
