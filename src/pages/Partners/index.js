import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/layout/index";
import About from "../../pages/About/About";
import Heading from "../../ui/heading/Heading";
import NomineeMenu from "../../components/nominee-menu";
import Partner from "../../components/media-partners/MediaPartner";

function Nominees(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg- realtive">
      <div
        className="text-center  flex items-center justify-center flex-col   pt-10"
        data-aos="fade-up"
      >
        <Heading heading="Our Sponsors" position="center" color="secondary" />
      </div>
      <div className="flex justify-start flex-col  items-center w-full py-20">
        {/* Media Partners */}
        {/* <Partner heading="Media Partner" /> */}
        {/* Corporate Partners */}
        <Partner data={props.data} />
      </div>
    </section>
  );
}

export default Nominees;
