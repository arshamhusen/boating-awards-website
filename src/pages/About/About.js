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
    <section className="flex flex-col bg-black justify-start md:justify-center lg:justify-center  items-start md:items-center lg:items-center">
      <div className="p-10 px-10 md:px-20 lg:px-20 flex flex-col items-center justify-center">
        <div
          data-aos="fade-up mb-20 "
          className="flex space-y-10 items-center justify-center flex-col"
        >
          <Heading heading="About NBAM" position="center" color="secondary" />
          <div
            style={{ lineHeight: 1.7 }}
            className="leading-tight  max-w-4xl text-white text-sm md:text-xl text-center  flex items-center justify-center "
          >
            <p>
              National Boating Association of Maldives (NBAM) has represented
              the boating sector of the tourism industry of Maldives since our
              formation in 2007 (formerly known as Liveaboard Association of
              Maldives). Our goal is to bring all the stakeholders in the
              industry together so we can jointly promote and grow the industry
              in a sustainable manner, conduct safety and training programs
              relevant to the industry, lobby with government and corporations
              on behalf of the industry, and focus on other development aspects
              related to the industry.
            </p>
          </div>
          <div className="flex relative flex-col items-center justify-center space-y-5">
            {/* layer dark */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
            {/* layer light */}
            {/* <img
              src="http://boating.mv/images/content/about.jpg"
              className="w-full object-cover brightness-75 max-w-4xl"
            /> */}
          </div>
        </div>

        <AboutTabMenu data={props.data} />
      </div>
    </section>
  );
}

export default About;
