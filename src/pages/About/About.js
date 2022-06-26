import React from "react";
import Heading from "../../ui/heading/Heading";
import AboutTabMenu from "../../components/about-tab-menu/AboutTabMenu";

function About() {
  return (
    <section className="flex flex-cols justify-start md:justify-center lg:justify-center  items-start md:items-center lg:items-center mb-20">
      <div className="p-10 px-10 md:px-20 lg:px-20 md:flex md:flex-col md:justify-center max-w-7xl grid grid-cols-1 gap-5 md:gap-4 lg:gap-6">
        <Heading heading="About" />
        <AboutTabMenu />
      </div>
    </section>
  );
}

export default About;
