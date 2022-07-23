import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { Popover, Transition, Disclosure } from "@headlessui/react";
import { Fragment } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AboutTabMenu(props) {
  useEffect(() => {
    console.log(props.data);
    AOS.init();
    AOS.refresh();
  }, []);
  const [menuPicture, setMenuPicture] = useState(props.data[0].image_URI);
  return (
    <div className="min-w-[70vw] min-h-[60vh] mt-4 lg:mt-14">
      <Tab.Group>
        <div className="md:grid md:grid-cols-2 max-w-6xl gap-x-10 ">
          <div className="flex justify-start items-start">
            <div className="flex flex-col  justify-start md:justify-start items-start  ">
              <Tab.List
                data-aos="fade-up"
                className={`px-0  md:px-10 lg:px-10 md:mt-5 grid grid-cols-3 md:grid-cols-1 gap-x-2 md:gap-x-2`}
              >
                {props.data.map((about) => (
                  <Tab
                    onClick={() => setMenuPicture(about.image_URI)}
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
                    {about.heading}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                {props.data.map((about) => (
                  <>
                    <Tab.Panel
                      className={`grid mb-10 m-0 mt-4 pt-4  border-t border-t-lightgray p-0 md:p-5 grid-cols-1 md:grid-cols-1 gap-8 md:gap-20 `}
                    >
                      <p
                        data-aos="fade-up"
                        className="text-sm md:text-base w-full  text-secondary"
                      >
                        {about.description}
                      </p>
                    </Tab.Panel>
                  </>
                ))}
              </Tab.Panels>
            </div>
          </div>

          <div class="h-min border-2 border-primary overflow-hidden flex justify-center items-center rounded-xl">
            <img
              src={menuPicture}
              className="bg-purple-200 w-full h-[50vh] hover:scale-110 transition-all duration-500"
              alt=""
            />
          </div>
        </div>
      </Tab.Group>
    </div>
  );
}

export default AboutTabMenu;
