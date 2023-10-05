import SermonCard from "@/components/atoms/cards/sermon-card";
import React from "react";
import data from "@/data/sermons/sermon-cards";
import useMediaQuery from "@/hooks/use-media-query";

const SermonGallery = () => {
  const isBigScreen = useMediaQuery("(min-width: 2000px)");
  const isTablet = useMediaQuery("(min-width: 1200px)");
  const isMobile = useMediaQuery("(min-width: 640px)");
  return (
    <div
      className={`grid grid-cols-${
        isBigScreen ? 3 : isTablet ? 2 : isMobile ? 1 : 1
      } gap-6 lg:w-[70%] w-full h-max mb-7`}
    >
      {data.map((item, index) => (
        <SermonCard key={index} {...item} />
      ))}
    </div>
  );
};

export default SermonGallery;
