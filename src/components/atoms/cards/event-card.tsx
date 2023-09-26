import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import Image from "next/image";
import eventimage from "@/assets/images/home/events/event-1.jpg";
import Link from "next/link";
import { TbClockHour8 } from "react-icons/tb";
import { IoMdWater } from "react-icons/io";

interface EventCardProps {
  image: string | StaticImport;
  date: string;
  time: string;
  title: string;
}

const EventCard = () => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <Image src={eventimage} alt="event" className="rounded-t-md" />
        <div className="absolute -bottom-14 left-4 rounded-md bg-[rgba(220,177,112,0.5)]">
          <div className="flex flex-col">
            <IoMdWater className="rotate-180 text-primary-yellow text-5xl absolute translate-x-[65%] -top-6" />
            <p className="text-xl text-white text-center px-6 py-7">Dec 18</p>
            <p className="text-white text-lg text-center rounded-b-md py-2 bg-primary-yellow px-3">
              8:00 AM
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white pt-20 pb-8 px-4 flex flex-col gap-10">
        <p className="font-bold text-[30px] leading-8">
          Event: Reflect The Community And Serving
        </p>
        <Link
          href="/events/1"
          className="text-primary-yellow text-2xl border-b-[3px] border-primary-yellow w-max"
        >
          Event Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
