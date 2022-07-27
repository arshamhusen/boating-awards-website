import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/layout/index";
import Heading from "../../ui/heading/Heading";
import Galleries from "../../components/galleries";

function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DashboardLayout>
      <section className="flex pt-24 py-10 w-screen md:py-20 min-h-screen flex-col justify-start  items-start">
        <div className="px-10 w-full md:px-20 lg:px-20 flex text-start md:text-center flex-col gap-y-5">
          <Heading heading="Gallery" position="center" color="secondary" />
          <p className="text-xs md:text-base text-gray ">
            A Gallery of our Gala Events
          </p>
        </div>
        <div className="px-10 w-full md:px-20 lg:px-20 flex justify-center items-center text-start md:text-center flex-col gap-y-5">
          <Galleries />
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Gallery;
