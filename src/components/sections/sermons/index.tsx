import React from "react";
import SermonGallery from "./sermon-gallery";
import RightBar from "./rightbar";

const Sermons = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-16">
      <SermonGallery />
      <RightBar />
    </div>
  );
};

export default Sermons;
