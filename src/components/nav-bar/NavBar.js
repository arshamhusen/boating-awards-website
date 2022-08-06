import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(https://main.d1aygiw4pvqbs8.amplifyapp.com/uploads/images/nav-desktop.png`,
        }}
        className="h-[10vh] xl:px-20 bg-cover bg-right  fixed top-0 shadow-md flex z-50 w-full items-center justify-between px-5"
      >
        <div className="flex justify-between items-center w-full">
          <div className="grid grid-cols-12 w-full">
            {/* Logo */}
            <Link
              to="/home/1"
              className="flex col-span-5   md:col-span-2 lg:col-span-2 flex-row justify-center items-center"
            >
              <img
                src="https://boating-bucket.s3.ap-south-1.amazonaws.com/others/awards.svg"
                className="bg-purple-200 w-14 h-14 mr-2 "
                alt=""
              />
              <img
                src="https://boating-bucket.s3.ap-south-1.amazonaws.com/others/nbam.svg"
                className="bg-purple-200 pl-2 w-24 h-24  "
                alt=""
              />
            </Link>
            {/* Menu Items */}
            <div className=" hidden lg:flex flex-row  md:col-span-7 lg:col-span-8 justify-center items-center">
              <div>
                <ul className="hidden md:flex items-center  justify-center gap-x-10 xl:gap-x-20  text-base md:text-sm  uppercase text-white font-medium">
                  <Link
                    to="/home/1"
                    className="link link-underline link-underline-black "
                  >
                    Home
                  </Link>

                  <Link
                    to="/nominees"
                    className="link link-underline link-underline-black "
                  >
                    Awards
                  </Link>

                  {/* <Link
                    to="/winners"
                    className="link link-underline link-underline-black "
                  >
                    Winners
                  </Link> */}

                  {/* <Link
                    to="/gallery"
                    className="link link-underline link-underline-black "
                  >
                    Gallery
                  </Link> */}

                  <Link
                    to="/press-releases"
                    className="link link-underline link-underline-black "
                  >
                    Press Releases
                  </Link>

                  <Link
                    to="/downloads"
                    className="link link-underline link-underline-black "
                  >
                    downloads
                  </Link>
                </ul>
              </div>
            </div>
            <Link
              to="/nominees"
              className="col-span-2 hidden lg:flex items-center justify-center "
            >
              <a className="uppercase p-2 px-12 font-medium text-sm border-2 border-white text-white transition-all hover:bg-white hover:text-primary bg-transparent rounded-full">
                vote now
              </a>
            </Link>
          </div>
        </div>
        {/* Menu */}
        <Popover.Group className=" ml-2  rounded-md p-2 lg:hidden inline-flex items-center justify-center  focus:outline-none">
          <Popover>
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? "text-white" : "text-white",
                    "group  rounded-md inline-flex items-center text-base  font-medium hover:text-secondary focus:outline-none  focus:ring-secondary"
                  )}
                >
                  {open && (
                    <>
                      <XIcon
                        className={classNames(
                          open ? "text-white" : "text-white",
                          "h-8 w-8 mt-1 group-hover:text-secondary"
                        )}
                        aria-hidden="true"
                      />
                    </>
                  )}

                  {!open && (
                    <>
                      <MenuIcon
                        className={classNames(
                          open ? "text-white" : "text-white",
                          "h-8 w-8 mt-1 group-hover:text-secondary"
                        )}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-x-full"
                  enterTo="opacity-100 translate-x-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 translate-x-full"
                >
                  <Popover.Panel className="absolute h-[94vh] z-10 top-full inset-x-0 transform shadow-lg bg-white">
                    <div className="p-10 flex flex-col justify-between h-[8vh]  gap-y-10">
                      <ul className="flex flex-col items-start  justify-start gap-y-5 xl:gap-x-20 text-base uppercase text-secondary font-semibold">
                        <Link
                          to="/home/1"
                          className="link link-underline link-underline-black "
                        >
                          Home
                        </Link>

                        <Link
                          to="/nominees"
                          className="link link-underline link-underline-black "
                        >
                          Awards
                        </Link>

                        {/* <Link
                          to="/winners"
                          className="link link-underline link-underline-black "
                        >
                          Winners
                        </Link> */}
                        {/* <Link
                          to="/gallery"
                          className="link link-underline link-underline-black "
                        >
                          Gallery
                        </Link> */}
                        <Link
                          to="/press-releases"
                          className="link link-underline link-underline-black "
                        >
                          Press Releases{" "}
                        </Link>
                        <Link
                          to="/downloads"
                          className="link link-underline link-underline-black "
                        >
                          Downloads
                        </Link>
                      </ul>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </Popover.Group>
      </div>
    </div>
  );
}

export default NavBar;
