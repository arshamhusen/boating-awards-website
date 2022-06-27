import React from "react";
import { Tab } from "@headlessui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
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

const images = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
];

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
      <div class="flex pl-10 lg:pl-20 w-screen">
        {/* <section class="flex-shrink-0 grid grid-cols-1 gap-y-3 ml-10">
          <span>
            <img
              src={window.location.origin + `/uploads/images/cat.jpg`}
              className="bg-purple-200 w-80 lg:w-[96vh] "
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
          <p className="text-2xl md:text-3xl text-secondary">
            Alia Investment Yacht
          </p>
        </section>
        <section class="flex-shrink-0 grid grid-cols-1 gap-y-3 ml-10">
          <span>
            <img
              src={window.location.origin + `/uploads/images/cat.jpg`}
              className="bg-purple-200 w-80 lg:w-[96vh] "
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
          <p className="text-2xl md:text-3xl text-secondary">
            Alia Investment Yacht
          </p>
        </section>
        <section class="flex-shrink-0 grid grid-cols-1 gap-y-3 ml-10">
          <span>
            <img
              src={window.location.origin + `/uploads/images/cat.jpg`}
              className="bg-purple-200 w-80 lg:w-[96vh] "
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
          <p className="text-2xl md:text-3xl text-secondary">
            Alia Investment Yacht
          </p>
        </section>
        <section class="flex-shrink-0 grid grid-cols-1 gap-y-3 ml-10">
          <span>
            <img
              src={window.location.origin + `/uploads/images/cat.jpg`}
              className="bg-purple-200 w-80 lg:w-[96vh] "
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
          <p className="text-2xl md:text-3xl text-secondary w-4/5">
            Alia Investment Yacht fvdfgfgd sdfs
          </p>
        </section> */}
      </div>
    </>
  );
}

function AboutTabMenu() {
  return (
    <div>
      <Tab.Group>
        <div className="flex justify-start md:justify-center  items-center">
          <Tab.List
            className={`px-10 md:px-20 lg:px-20 grid grid-cols-6 gap-x-2 md:gap-x-8`}
          >
            {winners.map((year) => (
              <Tab
                className={({ selected }) =>
                  classNames(
                    "py-2.5 md:py-10 text-secondary capitalize  font-semibold text-lg md:text-xl lg:text-2xl leading-5 ",
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
              <Tab.Panel className={`mt-5 w-screen`}>
                <Carousel
                  ssr
                  partialVisbile
                  itemClass="slider-image-item"
                  responsive={responsive}
                >
                  <section class="flex-shrink-0 grid grid-cols-1 gap-y-3 ml-10 ">
                    <span>
                      <img
                        src={window.location.origin + `/uploads/images/cat.jpg`}
                        className="bg-purple-200 w-80 lg:w-[96vh] "
                        alt=""
                      />
                    </span>
                    <div className="flex flex-row justify-start items-center">
                      <img
                        src={
                          window.location.origin + `/uploads/vectors/laurel.svg`
                        }
                        className="bg-purple-200 w-14 "
                        alt=""
                      />
                      <p className="font-medium ml-4 text-primary">
                        Best Liveaboard/Yacht
                      </p>
                    </div>
                    <p className="text-2xl md:text-3xl text-secondary">
                      Alia Investment Yacht
                    </p>
                  </section>
                  <section class="flex-shrink-0 grid grid-cols-1 gap-y-3 ml-10">
                    <span>
                      <img
                        src={window.location.origin + `/uploads/images/cat.jpg`}
                        className="bg-purple-200 w-80 lg:w-[96vh] "
                        alt=""
                      />
                    </span>
                    <div className="flex flex-row justify-start items-center">
                      <img
                        src={
                          window.location.origin + `/uploads/vectors/laurel.svg`
                        }
                        className="bg-purple-200 w-14 "
                        alt=""
                      />
                      <p className="font-medium ml-4 text-primary">
                        Best Liveaboard/Yacht
                      </p>
                    </div>
                    <p className="text-2xl md:text-3xl text-secondary">
                      Alia Investment Yacht
                    </p>
                  </section>
                  <section class="flex-shrink-0 grid grid-cols-1 gap-y-3 ml-10">
                    <span>
                      <img
                        src={window.location.origin + `/uploads/images/cat.jpg`}
                        className="bg-purple-200 w-80 lg:w-[96vh] "
                        alt=""
                      />
                    </span>
                    <div className="flex flex-row justify-start items-center">
                      <img
                        src={
                          window.location.origin + `/uploads/vectors/laurel.svg`
                        }
                        className="bg-purple-200 w-14 "
                        alt=""
                      />
                      <p className="font-medium ml-4 text-primary">
                        Best Liveaboard/Yacht
                      </p>
                    </div>
                    <p className="text-2xl md:text-3xl text-secondary">
                      Alia Investment Yacht
                    </p>
                  </section>
                  <section class="flex-shrink-0 grid grid-cols-1 gap-y-3 ml-10">
                    <span>
                      <img
                        src={window.location.origin + `/uploads/images/cat.jpg`}
                        className="bg-purple-200 w-80 lg:w-[96vh] "
                        alt=""
                      />
                    </span>
                    <div className="flex flex-row justify-start items-center">
                      <img
                        src={
                          window.location.origin + `/uploads/vectors/laurel.svg`
                        }
                        className="bg-purple-200 w-14 "
                        alt=""
                      />
                      <p className="font-medium ml-4 text-primary">
                        Best Liveaboard/Yacht
                      </p>
                    </div>
                    <p className="text-2xl md:text-3xl text-secondary w-4/5">
                      Alia Investment Yacht fvdfgfgd sdfs
                    </p>
                  </section>
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
