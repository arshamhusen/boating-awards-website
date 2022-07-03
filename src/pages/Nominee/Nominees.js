import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/layout/index";
import About from "../../pages/About/About";
import Heading from "../../ui/heading/Heading";
import NomineeMenu from "../../components/nominee-menu";

function Nominees() {
  return (
    <DashboardLayout>
      <div
        className="text-center flex items-center justify-center flex-col  mt-32 lg:mt-40 mb-5"
        data-aos="fade-up"
      >
        <Heading heading="2022 Nominees" position="center" color="secondary" />
      </div>
      <div className="flex justify-center min-h-[70vh]  items-start w-full mb-20">
        <NomineeMenu />
      </div>
    </DashboardLayout>
  );
}

export default Nominees;
