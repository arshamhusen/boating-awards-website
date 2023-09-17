import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { Popover, Transition, Disclosure } from "@headlessui/react";
import { Fragment } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "../../ui/heading/Heading";
import parse from "html-react-parser";

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
                      "py-2.5  text-primary capitalize text-center font-bold text-2xl md:text-2xl lg:text-4xl leading-5 ",
                      "focus:outline-none text-left",
                      selected
                        ? "text-left"
                        : "text-blue-100 text-left hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  About Boating Awards
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <div>
                  <Tab.Panel
                    className={`grid mb-10 m-0 mt-4 pt-4 bg  border-t border-t-primary p-0 md:p-5 grid-cols-1 md:grid-cols-1 gap-4 md:gap-8 `}
                  >
                    <p
                      data-aos="fade-up"
                      className="text-sm text-justify md:text-base w-full  text-white"
                    >
                      Maldives Boatng Awards is an initatve of Natonal Boatng
                      Associaton of Maldives (NBAM) which began in the year 2014
                      to recognize the strength of boatng industry and services
                      rendered by the service providers.
                    </p>
                    <p
                      data-aos="fade-up"
                      className="text-sm text-justify md:text-base w-full  text-white"
                    >
                      Awards are presented to nominees in different categories
                      on various sectors inclusive of standards. The Maldives
                      Boating Awards aim to encourage & raise service standards
                      within the Maldivian Boating Industry. The National
                      Boating Association of Maldives (NBAM) holds exclusive
                      rights of the Maldives Boating Awards.
                    </p>
                  </Tab.Panel>
                </div>
              </Tab.Panels>
            </div>
          </div>

          <div
            data-aos="flip-right"
            style={{
              backgroundImage: `url('https://boatingawards-bucket.s3.ap-south-1.amazonaws.com/footer/Boating Awards Logo.png')`,
            }}
            className="w-full  min-h-[30vh] bg-contain bg-no-repeat bg-center"
          ></div>
        </div>
      </Tab.Group>
    </div>
  );
}

export default AboutTabMenu;
