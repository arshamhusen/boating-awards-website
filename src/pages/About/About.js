import React, { useEffect } from "react";
import Heading from "../../ui/heading/Heading";
import AboutTabMenu from "../../components/about-tab-menu/AboutTabMenu";
import AOS from "aos";
import "aos/dist/aos.css";
import parse from "html-react-parser";

function About(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="flex flex-col justify-start md:justify-center lg:justify-center  items-start md:items-center lg:items-center">
      <div className="p-10 px-10 md:px-20 lg:px-20 flex flex-col items-center justify-center">
        <div data-aos="fade-up mb-20 " className="flex space-y-10 flex-col">
          <Heading heading="About NBAM" position="center" color="secondary" />
          <div className="max-w-6xl text-secondary text-sm lg:text-base text-justify flex items-center justify-center">
            <p>{parse(props.data[1].description)}</p>
          </div>
        </div>

        <AboutTabMenu data={props.data} />
      </div>
    </section>
  );
}

export default About;
