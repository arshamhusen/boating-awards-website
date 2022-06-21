import React from "react";
import Heading from "../../ui/heading/Heading";
import AboutTabMenu from "../../components/about-tab-menu/AboutTabMenu";

function About() {
  return (
    <section className="flex flex-cols justify-start h-[90vh] items-start mb-10">
      <div className="p-10 grid grid-cols-1 gap-5">
        <Heading heading="About" />
        <AboutTabMenu />
      </div>
    </section>
  );
}

export default About;
