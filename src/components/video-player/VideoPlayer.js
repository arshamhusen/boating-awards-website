import React from "react";

function VideoPlayer() {
  return (
    <section className="bg-black mb-10">
      <div>
        <div className="relative pb-9/1 w-full ">
          <video className="my-video" muted autoPlay loop>
            <source
              src={window.location.origin + `/uploads/video/video.mp4`}
              type="video/mp4"
            />{" "}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default VideoPlayer;
