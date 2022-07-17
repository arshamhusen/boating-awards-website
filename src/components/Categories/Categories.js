import React from "react";
import { Link } from "react-router-dom";

function Categories(props) {
  const categories = [1, 2, 2, 2, 3, 3, 2, 33, 4, 43, 3, 2, 2];

  return (
    <div data-aos="fade-up" className="grid grid-cols-3 gap-5 mt-16 px-20">
      {categories.map((cat) => (
        <Link
       
        style={{
          backgroundImage: `url( https://t3.ftcdn.net/jpg/01/35/35/86/360_F_135358677_ocpah6tCszIH2gI0tZ438KcqeFbQ7SKl.jpg`,
        }}
          to={`/nominees/${cat}`}
          className="h-[175px] bg-gradient-to-t bg-cover bg-top from-primary via-lightPrimary to-white border-2 text-center border-primary hover:bg-lightPrimary rounded-2xl flex flex-col justify-center items-center"
        >
          <img className="h-1/3 mb-2" src="https://www.pngkey.com/png/full/903-9031973_laurel-wreath-illustration-png.png" />
          <p className="text-xl font-semibold text-secondary w-1/2">Best Yacht or Liveaboard</p>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
