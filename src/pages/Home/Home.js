import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../components/layout/index";
import Banner from "../../components/banner/Banner";
import About from "../../pages/About/About";
import Partners from "../Partners/index";
import Axios from "axios";

function Home() {
  const { id } = useParams();
  const [pageData, setPageData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/website/home`, {
      headers: {
        api_key: process.env.REACT_APP_API_KEY,
        api_secret: process.env.REACT_APP_API_SECRET,
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setPageData(res.data);
        setLoading(false);
      } else {
        setLoading(true);
      }
    });
  }, []);

  return (
    <DashboardLayout>
      {!loading && (
        <>
          <div id="1">
            {pageData != null && <Banner data={pageData.banner} />}
          </div>

          {/* <VideoPlayer /> */}
          <div id="2" className="">
            {pageData != null && <About data={pageData?.about} />}
          </div>
          <div id="3" className="pt-5">
            {pageData != null && <Partners data={pageData.sponsors} />}
          </div>
        </>
      )}
      {loading && <div className="min-h-screen" />}
    </DashboardLayout>
  );
}

export default Home;
