import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Axios from "axios";
import Lottie from "lottie-react";
import comingSoonAnimation from "../../assets/lotties/lf20_dg82izdu.json";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AboutTabMenu() {
  const [winners, setWinners] = useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/website/winners`, {
      headers: {
        api_key: process.env.REACT_APP_API_KEY,
        api_secret: process.env.REACT_APP_API_SECRET,
      },
    }).then((res) => {
      if (res.status === 200) {
        setWinners(res.data);
        setLoading(false);
      } else {
        setLoading(true);
      }
    });
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Tab.Group>
        <div className="flex justify-start md:justify-center  items-center">
          <Tab.List
            data-aos="fade-up"
            className={`px-10 md:px-20 lg:px-20 grid grid-cols-3 gap-x-2 md:gap-x-8`}
          >
            {winners.map((year) => (
              <Tab
                className={({ selected }) =>
                  classNames(
                    "py-2.5  text-secondary capitalize  font-semibold text-base md:text-lg xl:text-xl leading-5 ",
                    "focus:outline-none",
                    selected
                      ? "border-b-lime/[9] text-warning "
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-lightPrimary"
                  )
                }
              >
                {year.year}
              </Tab>
            ))}
            <Tab
              className={({ selected }) =>
                classNames(
                  "py-2.5  text-secondary capitalize  font-semibold text-base md:text-lg xl:text-xl leading-5 ",
                  "focus:outline-none",
                  selected
                    ? "border-b-lime/[9] text-warning "
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-lightPrimary"
                )
              }
            >
              2022
            </Tab>
          </Tab.List>
        </div>

        <Tab.Panels>
          {winners.map((year) => (
            <>
              <Tab.Panel data-aos="fade-up" className={`mt-5 w-screen`}>
                <Carousel
                  autoPlay
                  infinite
                  ssr
                  partialVisbile
                  itemClass="slider-image-item"
                  responsive={responsive}
                >
                  {year.yearWinners.map((winner) => (
                    <section class="flex-shrink-0 grid grid-cols-1  gap-y-3 ml-10 ">
                      <div class="h-min  border-2 border-primary overflow-hidden rounded-md">
                        <img
                          src={winner.imageURI}
                          className="bg-purple-200  h-[40vh] w-full hover:scale-110 transition-all duration-500"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-row  justify-center items-center text-center">
                        <img
                          src={
                            window.location.origin +
                            `/uploads/vectors/laurel.svg`
                          }
                          className="bg-purple-200 w-14 "
                          alt=""
                        />
                        <p className="font-medium text-sm ml-4 text-primary">
                          {winner.category}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-center md:text-xl text-secondary">
                        {winner.winner}
                      </p>
                    </section>
                  ))}
                </Carousel>
              </Tab.Panel>
            </>
          ))}
          <Tab.Panel
            data-aos="fade-up"
            className={`mt-5 h-[55vh] w-screen flex justify-center items-center flex-col`}
          >
            <Lottie
              loop
              animationData={comingSoonAnimation}
              play
              style={{ width: 500, height: 500 }}
            />

            <p className="text-xl">
              Winners will be announced once the voting is completed
            </p>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default AboutTabMenu;
