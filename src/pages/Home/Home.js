import React from "react";
import DashboardLayout from "../../components/layout/index";
import Banner from "../../components/banner/Banner";
import VideoPlayer from "../../components/video-player/VideoPlayer";
import About from "../../pages/About/About";
import Winners from "../../pages/Winners/Winners";
import Category from "../../pages/Categories/Category";
import Nominate from "../../pages/Nominate/Nominate";
function Home() {
  return (
    <DashboardLayout>
      <div className="">
        <Banner />
        <VideoPlayer />
        <About />
        <Winners />
        {/* <Category /> */}
        <Nominate />
      </div>
    </DashboardLayout>
  );
}

export default Home;
