import React from "react";
import { Popover, Transition, Disclosure } from "@headlessui/react";
import { ArrowCircleRightIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(http://192.168.1.218:3000/uploads/images/nav-desktop.png`,
        }}
        className="h-20 xl:px-20 bg-cover bg-right  fixed shadow-md flex z-50 w-full items-center justify-between px-5"
      >
        <div className="flex justify-between items-center w-full">
          <div className="grid grid-cols-12 w-full">
            {/* Logo */}
            <div className="flex col-span-5 md:col-span-3 flex-row justify-center items-center">
              <img
                src={window.location.origin + `/uploads/vectors/awards.svg`}
                className="bg-purple-200 w-14 mr-2 "
                alt=""
              />
              <img
                src={window.location.origin + `/uploads/vectors/nbam.svg`}
                className="bg-purple-200 pl-2 w-14 border-l border-l-white "
                alt=""
              />
            </div>
            {/* Menu Items */}
            <div className=" hidden md:flex flex-row col-span-7 justify-center items-center">
              <div>
                <ul className="hidden md:flex items-center  justify-center gap-x-10 xl:gap-x-20 text-base uppercase text-white font-medium">
                  <li>Home</li>
                  <li>About</li>
                  <li>Winners</li>
                  <li>Categories</li>
                  <li>2022 Nominees</li>
                </ul>
              </div>
            </div>
            <div className="col-span-2 hidden md:flex items-center justify-center ">
              <button className="px-12 p-2 bg-warning text-secondary uppercase hover:brightness-95 font-medium text-sm md:text-base lg:text-base">
                Nominate
              </button>
            </div>
          </div>
        </div>
        {/* Menu */}
        <Popover.Group className=" ml-2  rounded-md p-2 md:hidden inline-flex items-center justify-center  focus:outline-none">
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
                  <Popover.Panel className=" absolute h-screen z-10 top-full inset-x-0 transform shadow-lg bg-white">
                    <div className="p-10 flex flex-col justify-between h-[8vh]  gap-y-10">
                      <ul className="flex flex-col items-start  justify-start gap-y-10 xl:gap-x-20 text-base uppercase text-secondary font-medium">
                        <li>Home</li>
                        <li>About</li>
                        <li>Winners</li>
                        <li>Categories</li>
                        <li>2022 Nominees</li>
                      </ul>
                      <button className="px-12 p-2  bg-warning text-secondary uppercase hover:brightness-95 font-medium text-sm md:text-base lg:text-base">
                        Nominate
                      </button>
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
