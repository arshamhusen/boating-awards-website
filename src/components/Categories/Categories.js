import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Categories(props) {
  const [categories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const categorie = [1, 2, 2, 2, 3, 3, 2, 33, 4, 43, 3, 2, 2];

  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/website/categories`, {
      headers: {
        api_key: process.env.REACT_APP_API_KEY,
        api_secret: process.env.REACT_APP_API_SECRET,
      },
    }).then((res) => {
      if (res.status === 200) {
        if (props.index === 1) {
          setCategories(res.data.categories);
          setLoading(false);
        } else {
          setCategories(res.data.fob_categories);
          setLoading(false);
        }
      } else {
        setLoading(true);
      }
    });
  });

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center w-full h-[60vh]">
          <div className="flex justify-center items-center" role="status">
            <svg
              aria-hidden="true"
              class="mr-2 w-20 h-20 text-lightPrimary animate-spin dark:text-gray-600 fill-primary"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div
            data-aos="fade-up"
            className="grid grid-cols-3 gap-5 mt-16 px-20"
          >
            {categories.map((cat) => (
              <Link
                style={{
                  backgroundImage: `url( https://t3.ftcdn.net/jpg/01/35/35/86/360_F_135358677_ocpah6tCszIH2gI0tZ438KcqeFbQ7SKl.jpg`,
                }}
                key={cat.id}
                to={`/nominees/${cat.id}`}
                className="h-[173px] bgsj hover:brightness-105 bg-gradient-to-t bg-cover bg-top from-primary via-lightPrimary to-white border-2 text-center border-primary hover:bg-lightPrimary rounded-2xl flex flex-col justify-center items-center"
              >
                <img
                  className="h-1/3 mb-2"
                  src="https://www.pngkey.com/png/full/903-9031973_laurel-wreath-illustration-png.png"
                />
                <p className="text-base font-semibold text-secondary w-3/4">
                  {cat.name}
                </p>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Categories;
