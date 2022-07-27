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
    Axios.get(`${process.env.REACT_APP_API_URL}/website/downloads`, {
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
      <section className="flex flex-col pt-24 py-10 w-screen md:py-20 min-h-screen  flex-cols justify-start  items-start">
        <div className="px-10 w-full md:px-20 lg:px-20 flex text-start md:text-center flex-col gap-y-5">
          <Heading heading="Downloads" position="center" color="secondary" />

        </div>
        <div className="w-screen min-h-screen px-8 lg:px-0  flex justify-start  items-center text-start md:text-center flex-col gap-y-5">
          <div className="grid max-w-7xl grid-cols-1 gap-2 mt-10">
            {getPaginatedData().map((pr, idx) => (
              <div key={idx} data={pr}>
                <div className="p-3">
                  <div className="rounded-3xl flex justify-between flex-col overflow-hidden h-auto lg:h-[340px] border border-primary hover:cursor-pointer hover:bg-lightPrimary transition-all p-5">
                    <div>
                      <div className="flex flexx-row justify-start items-center">
                        <svg
                          className="text-primary h-8 w-8 mr-2 lg:mr-6"
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
                        <h1 className="text-secondary text-sm lg:text-base font-semibold">
                          {pr.heading}
                        </h1>
                      </div>
                      <hr className="w-full mt-3 border text-lightgray" />
                      <div className="p-2 text-xs lg:text-sm text-start text-secondary">
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
                      className="yes"
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
        </div>
      </section>
    </DashboardLayout>
  );
}

export default PressReleases;
