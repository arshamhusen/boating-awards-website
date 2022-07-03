import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/layout/index";
import About from "../../pages/About/About";
import Heading from "../../ui/heading/Heading";
import NomineeMenu from "../../components/nominee-menu";
import Partner from "../../components/media-partners/MediaPartner";

function Nominees() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DashboardLayout>
      <div
        className="text-center flex items-center justify-center flex-col  mt-32 lg:mt-40 mb-5"
        data-aos="fade-up"
      >
        <Heading heading="Our Partners" position="center" color="secondary" />
      </div>
      <div className="flex justify-start flex-col min-h-[70vh]  items-center w-full my-10">
        {/* Media Partners */}
        <Partner heading="Media Partner" />
        {/* Corporate Partners */}
        <Partner heading="Corporate Partners" />
      </div>
    </DashboardLayout>
  );
}

export default Nominees;
