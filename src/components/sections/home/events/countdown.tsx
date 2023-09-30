import React from "react";
import Image from "next/image";
import shapetop from "@/assets/svg/shape-top.svg";
import bgimage from "@/assets/images/home/bg/bg-4.jpg";
import Timer from "@/components/timer";

const Countdown = () => {
  return (
    <div className="relative overflow-hidden">
      <Image className="w-full" src={shapetop} alt="shape" />
      <div className="w-full h-full bg-[rgba(0,21,47,0.86)] absolute -z-10 top-0"></div>
      <div className="py-20">
        <h3 className="text-xl text-primary-yellow text-center font-semibold uppercase">
          Events
        </h3>
        <h1 className="text-3xl text-center my-4 font-bold text-white">
          Free Family Event Countdown
        </h1>
        <span className="border-line block my-7 mx-auto"></span>
        <Timer date={new Date("Dec 24, 2024 00:00:00")} />
        <p className="text-center text-white mt-8 text-lg">
          Dec 24, 2022 - Wednesday 12 am to 4 am
        </p>
      </div>
      <Image
        src={bgimage}
        alt="bg"
        className="w-full h-full absolute top-0 -z-20"
        objectFit="cover"
      />
      <Image className="rotate-180 w-full" src={shapetop} alt="shape" />
    </div>
  );
};

export default Countdown;
