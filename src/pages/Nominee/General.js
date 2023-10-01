import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Heading from "../../ui/heading/Heading";
import WinnerTabMenu from "../../components/winner-tab-menu/WinnerTabMenu";
import DashboardLayout from "../../components/layout/index";
import Button from "../../ui/button/Button";
import { SearchCircleIcon } from "@heroicons/react/solid";

function Categories(props) {
  const [categories, setCategories] = React.useState([]);
  const [filteredCategories, setFilteredCategories] = React.useState([]); // for search bar
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/website/categories`, {
      headers: {
        api_key: process.env.REACT_APP_API_KEY,
        api_secret: process.env.REACT_APP_API_SECRET,
      },
    }).then((res) => {
      if (res.status === 200) {
        setCategories(res.data.categories);
        setFilteredCategories(res.data.categories);
        setLoading(false);
      } else {
        setLoading(true);
      }
    });
  }, []);

  return (
    <>
      <DashboardLayout>
        <div className=" w-full relative  flex justify-center items-center">
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full top-0 object-cover min-h-[100vh] absolute"
          >
            <source
              src="https://boatingawards-bucket.s3.ap-south-1.amazonaws.com/videos/loop.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <section className="flex z-30 py-10 mt-16 lg:mt-0 md:py-20 min-h-screen  flex-cols justify-center  items-center">
          <div className="flex w-full flex-col space-y-5 md:justify-center items-center   6">
            <div className="px-10 md:px-20 lg:px-20 flex  flex-col gap-y-3 lg:gap-y-2">
              <Heading
                heading="Categories"
                position="center"
                color="secondary"
              />
            </div>

            <Link
              className="w-full  justify-center items-center flex"
              to={"/nominees"}
            >
              <Button title="Go Back" />
            </Link>

            {loading ? (
              <div className="flex justify-center items-center w-full mt-20">
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
              <div className="w-full max-w-6xl">
                <div className="absolute -z-10 inset-1 top-[40vh]"></div>
                {/* search bar */}
                <div className="flex justify-center items-center w-full mt-0">
                  <div className="grid grid-cols-1 w-full px-5 max-w-xl   gap-2 ">
                    {/* search */}

                    <input
                      type="text"
                      placeholder="Search"
                      className="border border-lightgray bg-white/20 rounded-2xl p-2 px-6 w-full"
                      onChange={(e) => {
                        let filtered = categories.filter((cat) => {
                          return cat?.name
                            .toLowerCase()
                            .includes(e.target.value.toLowerCase());
                        });
                        setFilteredCategories(filtered);
                      }}
                    />
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="
                  w-full flex justify-start items-center flex-col space-y-5 mt-5 mx-10
                  "
                >
                  {/* search */}

                  {filteredCategories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/nominees/${cat.id}`}
                      className=" relative
                         
                      backdrop-filter backdrop-blur-xl 
                      hover:brightness-105 flex-col  md:flex-row  w-full border-black/10 border text-start  hover:bg-lightPrimary/20 rounded-2xl flex mr"
                    >
                      <div className=" h-3/4 w-full lg:h-2/3  flex items-center justify-center">
                        <p className="text-base lg:text-2xl font-semibold text-white w-full p-10">
                          {/* number absolute large */}
                          <div className="absolute  overflow-hidden z-0 top-1 left-2 flex justify-center items-center">
                            <p className="text-white/40 text-8xl">
                              {categories.length <= 30 ? `${cat.id}` : ""}
                            </p>
                          </div>

                          {cat.name}
                        </p>
                      </div>
                      {/* number of nominees */}
                      <div className=" flex justify-center items-center">
                        <Link
                          to={`/nominees/${cat.id}`}
                          className=" rounded-full w-max flex  m-5 justify-center items-center"
                        >
                          <Button title="View Nominees" />
                        </Link>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </DashboardLayout>
    </>
  );
}

export default Categories;
