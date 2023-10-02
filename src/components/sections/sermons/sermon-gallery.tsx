import SermonCard from "@/components/atoms/cards/sermon-card";
import React from "react";
import image from "@/assets/images/home/sermons/sermon1.jpg";
import data from "@/data/sermons/sermon-cards";

const SermonGallery = () => {
  return (
    <div className="flex gap-6 w-[70%] flex-wrap h-max">
          {data.map((item, index) => (
              <SermonCard key={index} {...item} />
            ))}
    </div>
  );
};

export default SermonGallery;
