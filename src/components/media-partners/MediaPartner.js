import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 20,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 20,
  },
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MediaPartner(props) {
  return (
    <div className="w-full max-w-6xl items-center justify-center  px-5 md:px-0">
      <h1
        data-aos="fade-up"
        className="text-lg md:text-xl xl:text-3xl font-medium text-secondary"
      >
        {props.heading}
      </h1>
      <hr className="w-full mt-3 mb-10 border text-lightgray" />
      <div data-aos="zoom-in">
        <Carousel
          autoPlay
          infinite
          ssr
          arrows={false}
          itemClass="slider-image-item"
          responsive={responsive}
        >
          {props.data.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.button_href}
              class="flex-shrink-0 grid grid-cols-1 gap-y-3 ml-10 "
            >
              <div class="h-min overflow-hidden flex justify-center items-center rounded-md">
                <img
                  src={sponsor.image_URI}
                  className="bg-purple-200 h-[150px] w-[180px]  hover:scale-110 transition-all duration-500"
                  alt=""
                />
              </div>

              <p className="text-base md:text-lg mt-6 text-center text-secondary">
                {sponsor.heading}
              </p>
            </a>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default MediaPartner;
