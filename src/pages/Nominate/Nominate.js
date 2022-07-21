import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/layout/index";
import About from "../../pages/About/About";

import Nominees from "../../components/Nominees/Nominees";

function Nominate() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <DashboardLayout>
      <div className="flex justify-center min-h-[100vh]  items-start w-full ">
        <Nominees />
      </div>
    </DashboardLayout>
  );
}

export default Nominate;