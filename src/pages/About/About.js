import React, { useEffect } from "react";
import Heading from "../../ui/heading/Heading";
import AboutTabMenu from "../../components/about-tab-menu/AboutTabMenu";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="mt-3 md:mt-20 flex flex-cols justify-start md:justify-center lg:justify-center  items-start md:items-center lg:items-center">
      <div className="p-10 px-10 md:px-20 lg:px-20 md:flex md:flex-col md:justify-start max-w-7xl grid grid-cols-1 gap-5 md:gap-4 lg:gap-6">
        <div data-aos="fade-up">
          <Heading heading="About" position="center" color="secondary" />
        </div>
        <AboutTabMenu />
      </div>
    </section>
  );
}

export default About;
