import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { Popover, Transition, Disclosure } from "@headlessui/react";
import { Fragment } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [menuPicture, setMenuPicture] = useState(menu[0].picture);
  return (
    <div>
      <Tab.Group>
        <div className="md:grid md:grid-cols-2">
          <div className="flex justify-start items-start">
            <div className="flex flex-col  justify-start md:justify-start items-start  ">
              <Tab.List
                data-aos="fade-up"
                className={`px-0  md:px-10 lg:px-10 md:mt-5 grid grid-cols-3 md:grid-cols-1 gap-x-2 md:gap-x-2`}
              >
                {menu.map((name) => (
                  <Tab
                    onClick={() => setMenuPicture(name.picture)}
                    className={({ selected }) =>
                      classNames(
                        "py-2.5  text-secondary capitalize text-start  font-semibold text-sm md:text-lg lg:text-xl leading-5 ",
                        "focus:outline-none",
                        selected
                          ? "border-b-lime/[9] text-warning "
                          : "text-blue-100 hover:bg-white/[0.12] hover:text-lightPrimary"
                      )
                    }
                  >
                    {name.name}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                {menu.map((menu) => (
                  <>
                    <Tab.Panel
                      className={`grid m-0 mt-4 pt-4  border-t border-t-lightgray p-0 md:p-5 grid-cols-1 md:grid-cols-1 gap-8 md:gap-20 `}
                    >
                      <p
                        data-aos="fade-up"
                        className="text-sm md:text-base w-full  text-secondary"
                      >
                        {menu.description}
                      </p>
                    </Tab.Panel>
                  </>
                ))}
              </Tab.Panels>
            </div>
          </div>

          <div className=" bg-lightgray mt-10 md:ml-5  h-[35vh] md:h-[48vh] lg:h-[60vh] p-5 flex-shrink-0  flex justify-center rounded-xl">
            <img
              data-aos="fade"
              src={window.location.origin + `/uploads/images/${menuPicture}`}
              className="rounded-10 flex-shrink-0"
            />
          </div>
        </div>
      </Tab.Group>
    </div>
  );
}

export default AboutTabMenu;
