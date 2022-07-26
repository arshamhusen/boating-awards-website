import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/layout/index";
import Heading from "../../ui/heading/Heading";
import Axios from "axios";
import moment from "moment";
import Fuse from "fuse.js";
import { SearchIcon } from "@heroicons/react/outline";

function PressReleases() {
  const [prMedia, setPrMedia] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataLimit, setDataLimit] = useState(6);
  const [pageLimit, setPageLimit] = useState(3);
  const [pageArray, setPageArray] = useState([]);
  const [query, updateQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [pages] = useState(Math.round(prMedia.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  const dateComponent = (date) => {
    const newDate = moment(`${date}`, "YYYY-MM-DD HH:mm:ss Z").format(
      "Do MMMM YYYY"
    );
    return <p>{newDate.toString()}</p>;
  };

  // Posted time and date render
  const RenderedDate = (today) => {
    const postedTimeDate = moment(
      `${today}`,
      "YYYY-MM-DD HH:mm:ss Z"
    ).fromNow();
    return <p>Posted {postedTimeDate}</p>;
  };

  const options = {
    isCaseSensitive: false,
    includeScore: false,
    shouldSort: true,
    includeMatches: false,
    findAllMatches: false,
    minMatchCharLength: 1,
    location: 0,
    threshold: 0.6,
    distance: 100,
    useExtendedSearch: false,
    ignoreLocation: false,
    ignoreFieldNorm: false,
    fieldNormWeight: 1,
    keys: ["heading", "description"],
  };

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/website/press-releases`, {
      headers: {
        api_key: process.env.REACT_APP_API_KEY,
        api_secret: process.env.REACT_APP_API_SECRET,
      },
    }).then((res) => {
      if (res.status === 200) {
        setPrMedia(res.data[0].media);
        setLoading(false);
      } else {
        setLoading(true);
      }
    });
    generateArrayOfNumbers(pages);
  }, []);

  function goToNextPage() {
    if (currentPage < pages) {
      setCurrentPage((page) => page + 1);
    }
  }

  function goToPreviousPage() {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  }

  function generateArrayOfNumbers(pages) {
    setPageArray(Array.from(Array(pages).keys(), (n) => n + 1));
    console.log(pageArray);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return prMedia.slice(startIndex, endIndex);
  };

  return (
    <DashboardLayout>
      <section className="flex flex-col py-10 w-screen md:py-20 min-h-screen  flex-cols justify-start  items-start">
        <div className="px-10 w-full md:px-20 lg:px-20 flex text-start md:text-center flex-col gap-y-5">
          <Heading
            heading="Press Releases"
            position="center"
            color="secondary"
          />
          <p className="text-sm md:text-base text-gray ">
            Here is our latest news feeds
          </p>
        </div>
        <div className="w-screen min-h-screen  flex justify-start  items-center text-start md:text-center flex-col gap-y-5">
          {/* <div className="flex items-center justify-center">
            <div className="border-borderGray bg-white focus:border-primary focus:outline ring-offset-primary outline-primary  border rounded-full flex flex-row items-center px-5">
              <SearchIcon className="w-4 h-4 text-secondary" />
              <input
                onChange={(e) => searchWithFuse(e.target.value)}
                className="border-none focus:border-none focus:ring-0 w-full  ring-primary focus:outline-none text-sm  px-4 p-2"
                placeholder="Search for media"
                type={"search"}
              />
            </div>
          </div> */}
          <div className="grid grid-cols-3 gap-2 mt-10">
            {getPaginatedData().map((pr, idx) => (
              <div key={idx} data={pr}>
                <div className="p-2 max-w-[380px]">
                  <div className="rounded-3xl flex justify-between flex-col overflow-hidden h-[340px] border border-primary hover:cursor-pointer hover:bg-lightPrimary transition-all p-5">
                    <div>
                      <div className="flex flexx-row justify-start items-center">
                        <svg
                          className="text-primary h-8 w-8 mr-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <h1 className="text-secondary font-semibold">
                          {pr.heading}
                        </h1>
                      </div>
                      <hr className="w-full mt-3 border text-lightgray" />
                      <div className="p-2 text-sm text-start text-secondary">
                        <p>{pr.description}</p>
                        <p className="mt-3 font-medium text-gray text-xs">
                          {RenderedDate(pr.createdAt)}
                        </p>
                      </div>
                    </div>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={pr.media_URI}
                      className=""
                    >
                      <button className="w-full hover:brightness-150 text-white uppercase hover:bg-gradient-to-b border-2 border-secondary via-secondary from-secondary to-secondary text-xs md:text-sm  font-medium bg-secondary px-2 p-1.5 rounded-full ">
                        Download
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          {/* <div className="w-full flex justify-center items-center py-10 lg:px-0 sm:px-6 ">
            <div className="lg:w-5/5 w-2/3 flex items-center justify-between border-t border-darkGray">
              <div
                onClick={() => goToPreviousPage()}
                className="flex items-center pt-3 text-darkGray hover:text-secondary cursor-pointer"
              >
                <svg
                  width={14}
                  height={8}
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.1665 4H12.8332"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.1665 4L4.49984 7.33333"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.1665 4.00002L4.49984 0.666687"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="sm:flex hidden">
                {pageArray.map((page) => (
                  <div
                    className="flex items-center"
                    onClick={() => setCurrentPage(page)}
                  >
                    <p
                      className={`text-sm font-medium leading-none cursor-pointer hover:text-secondary border-t-2 border-white hover:border-indigo-400 pt-3 mr-4 px-2 ${
                        currentPage == page
                          ? "text-secondary border-t-secondary"
                          : "text-black"
                      }`}
                    >
                      {page}
                    </p>
                  </div>
                ))}
              </div>

              <div
                onClick={() => goToNextPage()}
                className="flex items-center pt-3 text-darkGray hover:text-secondary cursor-pointer"
              >
                <svg
                  width={14}
                  height={8}
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.1665 4H12.8332"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 7.33333L12.8333 4"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 0.666687L12.8333 4.00002"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </DashboardLayout>
  );
}

export default PressReleases;
