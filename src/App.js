import React, { useEffect } from "react";
import Banner from "./components/banner/Banner";
import VideoPlayer from "./components/video-player/VideoPlayer";
// Import Components
import NavBar from "./components/nav-bar/NavBar";
import About from "./pages/About/About";
import Winners from "./pages/Winners/Winners";
import Category from "./pages/Categories/Category";
import Nominate from "./pages/Nominate/Nominate";
import "aos/dist/aos.css"; // You can also use <link> for styles

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <VideoPlayer />
      <About />
      <Winners />
      <Category />
      <Nominate />
    </div>
  );
}

export default App;
