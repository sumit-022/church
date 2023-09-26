import Section from "@/components/atoms/wrappers/section";
import React from "react";
import data from "@/data/sermons/sermon-cards";
import SermonCard from "@/components/atoms/cards/sermon-card";
import AboutUs from "./about-us";
import Audio from "./audio";

const Sermons = () => {
  return (
    <Section>
      <h3 className="text-2xl text-primary-yellow text-center font-semibold uppercase">
        Sermons
      </h3>
      <h1 className="text-4xl text-center my-7 font-bold">Our Sermons</h1>
      <span className="border-line block my-7 mx-auto"></span>
      <div className="flex gap-8 my-10">
        {data.map((sermon, index) => (
          <SermonCard key={index} {...sermon} />
        ))}
      </div>
      <div className="my-7">
        <AboutUs />
        <Audio />
      </div>
    </Section>
  );
};

export default Sermons;
