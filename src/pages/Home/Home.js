import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../components/layout/index";
import Banner from "../../components/banner/Banner";
import VideoPlayer from "../../components/video-player/VideoPlayer";
import About from "../../pages/About/About";
import Winners from "../../pages/Winners/Winners";
import Category from "../../pages/Categories/Category";
import Nominate from "../../pages/Nominate/Nominate";

var smoothScroll = function (elementId) {
  var MIN_PIXELS_PER_STEP = 40;
  var MAX_SCROLL_STEPS = 80;
  var target = document.getElementById(elementId);
  var scrollContainer = target;
  do {
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do {
    if (target == scrollContainer) break;
    targetY += target.offsetTop;
  } while ((target = target.offsetParent));

  var pixelsPerStep = Math.max(
    MIN_PIXELS_PER_STEP,
    (targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS
  );

  var stepFunc = function () {
    scrollContainer.scrollTop = Math.min(
      targetY,
      pixelsPerStep + scrollContainer.scrollTop
    );

    if (scrollContainer.scrollTop >= targetY) {
      return;
    }

    window.requestAnimationFrame(stepFunc);
  };

  window.requestAnimationFrame(stepFunc);
};

function Home() {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    smoothScroll(id);
  });

  return (
    <DashboardLayout>
      <div id="1">
        <Banner />
      </div>

      {/* <VideoPlayer /> */}
      <div id="2" className="pt-10">
        <About />
      </div>

      <div id="3" className="pt-10">
        <Winners />
      </div>
      {/* <Category /> */}
      <section id="4" className="pt-20">
        <Nominate />
      </section>
    </DashboardLayout>
  );
}

export default Home;
