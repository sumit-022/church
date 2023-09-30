import React from "react";
import Image from "next/image";
import aboutimage from "@/assets/images/home/sermons/about-us.png";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsBook } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className="grid md:grid-cols-[45%,55%] md:grid-rows-none grid-rows-[auto,auto] grid-cols-none w-[95%] mx-auto gap-7 md:place-items-center md:gap-14">
      <Image src={aboutimage} alt="about-image" className="w-full" />
      <div className="flex-col flex gap-2 md:items-start items-center">
        <h3 className="text-lg text-primary-yellow font-bold">ABOUT US</h3>
        <p className="text-3xl font-bold leading-tight md:text-left text-center">
          We are Taking Small Steps to Make Earth Better Planet
        </p>
        <p className="border-line mt-4"></p>
        <p className="text-primary-grey my-7 leading-relaxed md:text-left text-center">
          We welcome you with great joy to Zegen Church. We are here to share
          the great news of Jesus Christ to all that will listen.
        </p>
        <div className="my-7 grid grid-cols-2 md:gap-0 gap-2">
          <div className="flex flex-col md:items-start items-center gap-4">
            <div className="w-max rounded-full bg-primary-yellow p-4">
              <IoIosHeartEmpty className="text-white text-xl" />
            </div>
            <p className="text-2xl md:text-start text-center font-bold">
              Place Of Heaven
            </p>
            <p className="text-primary-grey md:text-left text-center">
              In Zegen you will feel divinity, piety, goodness, faith or right
              beliefs.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-start items-center">
            <div className="w-max rounded-full bg-primary-yellow p-4">
              <BsBook className="text-white text-xl" />
            </div>
            <p className="text-2xl md:text-start text-center font-bold">
              Place Of Heaven
            </p>
            <p className="text-primary-grey md:text-left text-center">
              In Zegen you will feel divinity, piety, goodness, faith or right
              beliefs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
