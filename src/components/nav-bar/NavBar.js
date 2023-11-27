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
      {/* blur tailwin */}
      <div
        style={{
          zIndex: "9999",
        }}
        className="bg-black/40
        backdrop-filter backdrop-blur-xl border-b border-white/20
      xl:px-20 p-5 bg-cover bg-right  fixed top-0 shadow-md flex z-50 w-full items-center justify-between px-5"
      >
        <div className="flex justify-between items-center w-full">
          <div className="grid grid-cols-12 w-full">
            {/* Logo */}
            <Link
              to="/home/1"
              className="flex col-span-7 space-x-5 md:space-x-10  md:col-span-2 lg:col-span-2 flex-row justify-center items-center"
            >
              <img
                src="https://boatingawards-bucket.s3.ap-south-1.amazonaws.com/footer/Boating Awards Logo.png"
                className="w-10 "
              />
              <img
                src="https://boatingawards-bucket.s3.ap-south-1.amazonaws.com/footer/nbam.png"
                className="w-16 "
              />
            </Link>
            {/* Menu Items */}
            <div className=" hidden lg:flex flex-row  md:col-span-7 lg:col-span-8 justify-center items-center">
              <div>
                <ul className="hidden md:flex items-center  justify-center gap-x-5 xl:gap-x-10  text-sm md:text-md  uppercase text-primary font-medium">
                  {/* <Link to="/home/1" className="link hover:brightness-125 ">
                    Home
                  </Link>

                  <Link to="/nominees" className="link hover:brightness-125 ">
                    Awards
                  </Link>

                  <Link to="/winners" className="link hover:brightness-125 ">
                    Winners
                  </Link>

                  <Link to="/gallery" className="link hover:brightness-125 ">
                    Gallery
                  </Link>

                  <Link to="/downloads" className="link hover:brightness-125 ">
                    downloads
                  </Link> */}
                </ul>
              </div>
            </div>
            {/* <Link
              to="/winners"
              className="col-span-2 hidden lg:flex items-center justify-center "
            >
              <a className="uppercase p-2 px-12 font-medium text-sm border-2 border-white text-white transition-all hover:bg-white/2 hover:text-primary bg-transparent rounded-full">
                View Winners
              </a>
            </Link> */}
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
                    "group  rounded-md inline-flex items-center text-base  font-medium hover:text-white focus:outline-none  focus:ring-secondary"
                  )}
                >
                  {open && (
                    <>
                      <XIcon
                        className={classNames(
                          open ? "text-primary/20" : "text-primary",
                          "h-8 w-8 mt-1 group-hover:text-white"
                        )}
                        aria-hidden="true"
                      />
                    </>
                  )}

                  {!open && (
                    <>
                      <MenuIcon
                        className={classNames(
                          open ? "text-primary/20" : "text-primary",
                          "h-8 w-8 mt-1 group-hover:text-white"
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
                  <Popover.Panel className="absolute backdrop-blur-8xl h-[94vh] z-10 top-full inset-x-0 transform shadow-lg bg-black/90">
                    <div className="p-10 flex flex-col justify-between h-[8vh]  gap-y-10">
                      {/* <ul className="flex flex-col items-start  justify-start gap-y-5 xl:gap-x-20 text-base uppercase text-white/80 font-semibold">
                        <Link
                          to="/home/1"
                          className="link hover:brightness-125 "
                        >
                          Home
                        </Link>

                        <Link
                          to="/nominees"
                          className="link hover:brightness-125 "
                        >
                          Awards
                        </Link>

                        <Link
                          to="/winners"
                          className="link hover:brightness-125 "
                        >
                          Winners
                        </Link>
                        <Link
                          to="/gallery"
                          className="link hover:brightness-125 "
                        >
                          Gallery
                        </Link>
                        <Link
                          to="/downloads"
                          className="link hover:brightness-125 "
                        >
                          Downloads
                        </Link>
                      </ul> */}
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
