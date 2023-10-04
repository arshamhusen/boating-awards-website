import React, { useEffect } from "react";
import Heading from "../../ui/heading/Heading";
import WinnerTabMenu from "../../components/winner-tab-menu/WinnerTabMenu";
import DashboardLayout from "../../components/layout/index";

function Winners() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DashboardLayout>
      <section className="flex py-10 z-50 mt-16 lg:mt-0 md:py-20 min-h-screen  flex-cols justify-start  items-start">
        <div className="md:flex  md:flex-col md:justify-center  grid grid-cols-1 gap-5 md:gap-4 lg:gap-6">
          <div className="px-10 md:px-20 lg:px-20 flex text-start md:text-center flex-col gap-y-3 lg:gap-y-5">
            <Heading heading="Winners" position="center" color="secondary" />
          </div>

          <WinnerTabMenu />
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Winners;
