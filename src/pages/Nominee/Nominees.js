import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/layout/index";
import About from "../../pages/About/About";
import Heading from "../../ui/heading/Heading";
import NomineeMenu from "../../components/nominee-menu";

function Nominees() {
  return (
    <DashboardLayout>
      <div
        className="text-center flex items-center justify-center flex-col  mt-40 mb-10"
        data-aos="fade-up"
      >
        <Heading heading="2022 Nominees" position="center" color="secondary" />
        <p className="text-small md:text-xl font-medium text-gray mt-4">
          Click on a category to view the nominees
        </p>
      </div>
      <div className="flex justify-center min-h-[70vh]  items-center w-full mb-20">
        <NomineeMenu />
      </div>
    </DashboardLayout>
  );
}

export default Nominees;
