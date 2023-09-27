import React from "react";
import Section from "../../../atoms/wrappers/section";
import EventCarousel from "@/components/carousels/event-carousel";
import data from "@/data/events/events";
import Countdown from "./countdown";

const Events = () => {
  return (
    <>
      <Section>
        <h3 className="text-xl text-primary-yellow text-center font-semibold uppercase">
          Events
        </h3>
        <h1 className="text-3xl text-center my-7 font-bold">Upcoming Events</h1>
        <span className="border-line block my-7 mx-auto"></span>
        <div className="my-7">
          <EventCarousel data={data} />
        </div>
      </Section>
      <Countdown />
    </>
  );
};

export default Events;
