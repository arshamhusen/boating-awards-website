import React from "react";

function index() {
  return (
    <footer
      style={{
        backgroundImage: `url(http://192.168.100.127:3000/uploads/images/nav-desktop.png`,
      }}
      class="p-4 bg-cover bg-left md:px-6 md:py-8 dark:bg-gray-800"
    >
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
          <div className="flex col-span-5 gap-x-10 md:col-span-3 flex-row justify-center items-center">
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
          <span class="self-center ml-5 text-lg font-light whitespace-nowrap dark:text-white">
            Maldives Boating Awards
          </span>
        </a>
      </div>
      <span class="block text-sm text-white sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://flowbite.com/" class="hover:underline">
          NBAM™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default index;
