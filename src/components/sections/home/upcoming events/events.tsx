import React from "react";
import Section from "../../../atoms/wrappers/section";
import EventCard from "@/components/atoms/cards/event-card";
import EventCarousel from "@/components/carousels/event-carousel";
import shapetop from "@/assets/svg/shape-top.svg";
import bgimage from "@/assets/images/home/bg/bg-4.jpg";
import Image from "next/image";

const Events = () => {
  return (
    <>
      <Section>
        <h3 className="text-2xl text-primary-yellow text-center font-semibold uppercase">
          Events
        </h3>
        <h1 className="text-4xl text-center my-7 font-bold">Upcoming Events</h1>
        <span className="border-line block my-7 mx-auto"></span>
        <div className="my-7">
          <EventCarousel />
        </div>
      </Section>
      <div className="relative overflow-hidden">
        <Image className="w-full" src={shapetop} alt="shape" />
        <div className="w-full h-full bg-[rgba(0,21,47,0.86)] absolute -z-10 top-0"></div>
        <div className="py-40">
          <h3 className="text-2xl text-primary-yellow text-center font-semibold uppercase">
            Events
          </h3>
          <h1 className="text-4xl text-center my-4 font-bold text-white">
            Upcoming Events
          </h1>
          <span className="border-line block my-7 mx-auto"></span>
        </div>
        <Image src={bgimage} alt="bg" className="w-full absolute top-0 -z-20" />
        <Image className="rotate-180 w-full" src={shapetop} alt="shape" />
      </div>
    </>
  );
};

export default Events;
