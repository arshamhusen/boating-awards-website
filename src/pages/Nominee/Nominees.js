import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/layout/index";
import About from "../../pages/About/About";

import NomineeMenu from "../../components/nominee-menu";

function Nominees() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <DashboardLayout>
      <div className="flex justify-center min-h-[70vh]  items-start w-full mb-20">
        <NomineeMenu />
      </div>
    </DashboardLayout>
  );
}

export default Nominees;
