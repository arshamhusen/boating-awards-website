import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { Popover, Transition, Disclosure } from "@headlessui/react";
import { Fragment } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "../../ui/heading/Heading";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AboutTabMenu(props) {
  useEffect(() => {
    console.log(props.data);
    AOS.init();
    AOS.refresh();
  }, []);
  const [menuPicture, setMenuPicture] = useState(props.data[1].image_URI);
  return (
    <div className="min-w-[70vw]  min-h-[60vh] mt-20 lg:mt-40">
      <Tab.Group>
        <div className="grid md:grid-cols-2 max-w-7xl gap-x-20 ">
          <div className="flex justify-start items-center">
            <div className="flex w-full flex-col  justify-start md:justify-start items-start  ">
              <Tab.List
                data-aos="fade-up"
                className={`px-0 w-full  md:px-10 lg:px-10 md:mt-5 grid  md:grid-cols-1 gap-x-2 md:gap-x-2`}
              >
                <Tab
                  onClick={() => setMenuPicture(props.data[1].image_URI)}
                  className={({ selected }) =>
                    classNames(
                      "py-2.5  text-secondary capitalize text-center font-bold text-2xl md:text-2xl lg:text-4xl leading-5 ",
                      "focus:outline-none text-center",
                      selected
                        ? "text-center"
                        : "text-blue-100 text-center hover:bg-white/[0.12] hover:text-lightPrimary"
                    )
                  }
                >
                  {props.data[1].heading}
                </Tab>
              </Tab.List>
              <Tab.Panels>
                {props.data.map((about) => (
                  <>
                    <Tab.Panel
                      className={`grid mb-10 m-0 mt-4 pt-4  border-t border-t-lightgray p-0 md:p-5 grid-cols-1 md:grid-cols-1 gap-8 md:gap-20 `}
                    >
                      <p
                        data-aos="fade-up"
                        className="text-sm text-center md:text-base w-full  text-secondary"
                      >
                        {about.description}
                      </p>
                    </Tab.Panel>
                  </>
                ))}
              </Tab.Panels>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url('${menuPicture}')`,
            }}
            className="w-full  min-h-[70vh] bg-contain bg-no-repeat bg-center"
          ></div>
        </div>
      </Tab.Group>
    </div>
  );
}

export default AboutTabMenu;
