import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Heading from "../../ui/heading/Heading";
import WinnerTabMenu from "../../components/winner-tab-menu/WinnerTabMenu";
import DashboardLayout from "../../components/layout/index";
import Button from "../../ui/button/Button";

function Categories(props) {
  const [categories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/website/categories`, {
      headers: {
        api_key: process.env.REACT_APP_API_KEY,
        api_secret: process.env.REACT_APP_API_SECRET,
      },
    }).then((res) => {
      if (res.status === 200) {
        setCategories(res.data.fob_categories);
        setLoading(false);
      } else {
        setLoading(true);
      }
    });
  }, []);

  return (
    <>
      <DashboardLayout>
        <section className="flex py-10 mt-16 lg:mt-0 md:py-20 min-h-screen  flex-cols justify-center  items-start">
          <div className="md:flex z-50 md:flex-col md:justify-center max-w-7xl  grid grid-cols-1 gap-5 md:gap-4 lg:gap-6">
            <div className="px-10 md:px-20 lg:px-20 flex text-start md:text-center flex-col gap-y-3 lg:gap-y-5">
              <Heading
                heading="Faces of Boating"
                position="center"
                color="secondary"
              />
            </div>

            <Link
              className="w-full justify-center items-center flex"
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
              <>
                <div className="w-screen h-fit absolute -z-10 inset-1 top-[40vh]"></div>
                <div
                  data-aos="fade-up"
                  className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-10 lg:mt-16 px-5 lg:px-20"
                >
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/nominees/${cat.id}`}
                      className="h-[90px] lg:h-[120px] bgsj hover:brightness-105 bg-gradient-to-t  bg-white/20 to-white border border-lightgray shadow-md text-center  hover:bg-lightPrimary/40 rounded-2xl flex flex-col justify-center items-center"
                    >
                      <div className=" h-3/4 lg:h-2/3  flex flex-col items-center justify-center">
                        <p className="text-xl lg:text-2xl font-semibold text-white w-full p-10">
                          <span className="text-lg text-primary">
                            {categories.length >= 13 ? `${cat.id}. ` : ""}
                          </span>
                          {cat.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </DashboardLayout>
    </>
  );
}

export default Categories;
