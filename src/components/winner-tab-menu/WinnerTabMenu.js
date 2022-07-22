import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

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
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AboutTabMenu() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Tab.Group>
        <div className="flex justify-start md:justify-center  items-center">
          <Tab.List
            data-aos="fade-up"
            className={`px-10 md:px-20 lg:px-20 grid grid-cols-4 gap-x-2 md:gap-x-8`}
          >
            {winners.map((year) => (
              <Tab
                className={({ selected }) =>
                  classNames(
                    "py-2.5  text-secondary capitalize  font-semibold text-base md:text-lg xl:text-lg leading-5 ",
                    "focus:outline-none",
                    selected
                      ? "border-b-lime/[9] text-warning "
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-lightPrimary"
                  )
                }
              >
                {year.year}
              </Tab>
            ))}
          </Tab.List>
        </div>

        <Tab.Panels>
          {winners.map((year) => (
            <>
              <Tab.Panel data-aos="fade-up" className={`mt-5 w-screen`}>
                <Carousel
                  autoPlay
                  infinite
                  ssr
                  partialVisbile
                  itemClass="slider-image-item"
                  responsive={responsive}
                >
                  {winners.map((winner) => (
                    <section class="flex-shrink-0 grid grid-cols-1 gap-y-3 ml-10 ">
                      <div class="h-min overflow-hidden rounded-md">
                        <img
                          src={
                            window.location.origin + `/uploads/images/cat.jpg`
                          }
                          className="bg-purple-200 w-80 h-[40vh] lg:w-[50vh] hover:scale-110 transition-all duration-500"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-row  justify-center items-center text-center">
                        <img
                          src={
                            window.location.origin +
                            `/uploads/vectors/laurel.svg`
                          }
                          className="bg-purple-200 w-14 "
                          alt=""
                        />
                        <p className="font-medium text-sm ml-4 text-primary">
                          Best Liveaboard/Yacht
                        </p>
                      </div>
                      <p className="text-sm font-medium text-center md:text-xl text-secondary">
                        Alia Investment Yacht This yatch is
                      </p>
                    </section>
                  ))}
                </Carousel>
              </Tab.Panel>
            </>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default AboutTabMenu;
