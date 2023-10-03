import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdWater } from "react-icons/io";
import { LuClock8 } from "react-icons/lu";

const EventCard: React.FC<EventCardProps> = ({
  image,
  date,
  time,
  title,
  id,
}) => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <Image src={image} alt="event" className="rounded-t-md w-full" />
        <div className="absolute -bottom-14 left-4 rounded-md bg-[rgba(220,177,112,0.5)]">
          <div className="flex flex-col">
            <div className="absolute w-full flex items-center justify-center -top-5">
              <LuClock8 className=" text-xl text-white absolute top-[21%] z-10" />
              <IoMdWater className="rotate-180 text-5xl text-primary-yellow" />
            </div>
            <p className="text text-white text-center px-6 py-7">{date}</p>
            <p className="text-white text text-center rounded-b-md py-2 bg-primary-yellow px-3">
              {time}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white pt-20 pb-8 px-4 flex flex-col gap-10">
        <p className="font-bold text-xl leading-8">{title}</p>
        <Link
          href={`/event-details/${id}`}
          className="text-primary-yellow border-b-[3px] border-primary-yellow w-max"
        >
          Event Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
