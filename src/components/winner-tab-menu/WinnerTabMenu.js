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
        <div className="flex justify-center items-center px-10">
          <Tab.List className="flex space-x-2 justify-center items-center lg:space-x-6 w-full sm:w-1/2 rounded-xl bg-blue-900/20 p-1">
            <Tab
              className={({ selected }) =>
                classNames(
                  " w-fit px-10  py-2 uppercase  font-medium leading-5 text-blue-700",
                  " rounded-full text-xs lg:text-sm ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white/20 text-white shadow ring-primary "
                    : "text-blue-100 hover:bg-white/[0.12] hover:bg-lightPrimary border-2 border-primary text-primary"
                )
              }
            >
              2023
            </Tab>
            {winners.map((year) => (
              <Tab
                key={year}
                className={({ selected }) =>
                  classNames(
                    "w-full  py-2 uppercase  font-medium leading-5 text-blue-700",
                    " rounded-full text-xs lg:text-sm ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-primary/20 text-white shadow ring-primary "
                      : "text-blue-100 hover:bg-white/[0.12] hover:bg-lightPrimary border-2 border-primary text-primary"
                  )
                }
              >
                {year.year}
              </Tab>
            ))}
          </Tab.List>
        </div>

        <Tab.Panels>
          {winners.map((year) => (
            <>
              <Tab.Panel data-aos="fade-up" className={`mt-5 w-screen pb-2`}>
                <Carousel
                  autoPlay
                  infinite
                  ssr
                  partialVisbile
                  itemClass="slider-image-item"
                  responsive={responsive}
                >
                  {year.yearWinners.map((winner) => (
                    <section class="flex-shrink-0 drop-shadow-md border border-lightPrimary rounded-xl  grid grid-cols-1  gap-y-3 ml-10 ">
                      <div class="h-min overflow-hidden rounded-t-xl">
                        <img
                          src={winner.imageURI}
                          className="bg-purple-200  h-[40vh] w-full hover:scale-110 transition-all duration-500"
                          alt=""
                        />
                      </div>
                      <div className="p-3 pb-6 rounded-b-xl bg-white">
                        <div className="flex flex-row  justify-center items-center text-center ">
                          <img
                            src={
                              window.location.origin +
                              `/uploads/vectors/laurel.svg`
                            }
                            className="bg-purple-200 w-14 "
                            alt=""
                          />
                          <p className=" text-xs lg:text-sm ml-4 text-primary">
                            {winner.category}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-center md:text-xl text-secondary">
                          {winner.winner}
                        </p>
                      </div>
                    </section>
                  ))}
                </Carousel>
              </Tab.Panel>
            </>
          ))}
          <Tab.Panel
            data-aos="fade-up"
            className={`mt-5 lg:h-[55vh] w-screen flex justify-center items-center flex-col px-20`}
          >
            <p className="text-sm lg:text-3xl text-white text-center font-medium">
              Winners will be announced once the voting is completed
            </p>
            <Lottie
              loop={false}
              animationData={comingSoonAnimation}
              play
              style={{ width: 400, height: 400 }}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default AboutTabMenu;
