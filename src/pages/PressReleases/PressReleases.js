import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/layout/index";
import Heading from "../../ui/heading/Heading";

function PressReleases() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DashboardLayout>
      <section className="flex py-10 w-screen md:py-20 min-h-screen  flex-cols justify-start  items-start">
        <div className="px-10 w-full md:px-20 lg:px-20 flex text-start md:text-center flex-col gap-y-5">
          <Heading
            heading="Press Releases"
            position="center"
            color="secondary"
          />
        </div>
        PressReleases
      </section>
    </DashboardLayout>
  );
}

export default PressReleases;
