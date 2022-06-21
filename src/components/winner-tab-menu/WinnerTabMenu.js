import React from "react";
import { Tab } from "@headlessui/react";

const winners = [
  {
    year: "2021",
    winners: [
      {
        category: "smt",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
  {
    year: "2020",
    winners: [
      {
        category: "smt",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
  {
    year: "2019",
    winners: [
      {
        category: "smt",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
  {
    year: "2018",
    winners: [
      {
        category: "smt",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
  {
    year: "2020",
    winners: [
      {
        category: "smt",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function renderPanel(year) {
  let focusYear = year.year;
  return (
    <>
      <div class="flex pl-10 overflow-x-auto space-x-8 w-full bg-red-200">
        <section class="flex-shrink-0 grid grid-cols-1 gap-y-3 ">
          <span>
            <img
              src={window.location.origin + `/uploads/images/cat.jpg`}
              className="bg-purple-200 w-80 "
              alt=""
            />
          </span>
          <div className="flex flex-row justify-start items-center">
            <img
              src={window.location.origin + `/uploads/vectors/laurel.svg`}
              className="bg-purple-200 w-14 "
              alt=""
            />
            <p className="font-medium ml-4 text-primary">
              Best Liveaboard/Yacht
            </p>
          </div>
          <p className="text-3xl text-secondary">Alia Investment Yacht</p>
        </section>
        <section class="flex-shrink-0 grid grid-cols-1 gap-y-3 ">
          <span>
            <img
              src={window.location.origin + `/uploads/images/cat.jpg`}
              className="bg-purple-200 w-80 "
              alt=""
            />
          </span>
          <div className="flex flex-row justify-start items-center">
            <img
              src={window.location.origin + `/uploads/vectors/laurel.svg`}
              className="bg-purple-200 w-14 "
              alt=""
            />
            <p className="font-medium ml-4 text-primary">
              Best Liveaboard/Yacht
            </p>
          </div>
          <p className="text-3xl text-secondary w-4/5">
            Alia Investment Yacht fvdfgfgd sdfs
          </p>
        </section>
      </div>
    </>
  );
}

function AboutTabMenu() {
  return (
    <div>
      <Tab.Group>
        <Tab.List className={`flex items-start justify-start px-10`}>
          {winners.map((year) => (
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
              {year.year}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {winners.map((year) => (
            <>
              <Tab.Panel className={`mt-5`}>{renderPanel(year)}</Tab.Panel>
            </>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default AboutTabMenu;
