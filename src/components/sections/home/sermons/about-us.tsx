import React from "react";
import Image from "next/image";
import aboutimage from "@/assets/images/home/sermons/about-us.png";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsBook } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-[45%,55%] w-[95%] mx-auto place-items-center gap-14">
      <Image src={aboutimage} alt="about-image" className="w-full" />
      <div className="flex-col flex gap-2">
        <h3 className="text-2xl text-primary-yellow font-bold">ABOUT US</h3>
        <p className="text-[42px] font-bold leading-tight">
          We are Taking Small Steps to Make Earth Better Planet
        </p>
        <p className="border-line mt-4"></p>
        <p className="text-primary-grey text-xl my-7 leading-relaxed">
          We welcome you with great joy to Zegen Church. We are here to share
          the great news of Jesus Christ to all that will listen.
        </p>
        <div className="my-7 grid grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="w-max rounded-full bg-primary-yellow p-4">
              <IoIosHeartEmpty className="text-white text-3xl" />
            </div>
            <p className="text-3xl font-bold">Place Of Heaven</p>
            <p className="text-primary-grey text-xl">
              In Zegen you will feel divinity, piety, goodness, faith or right
              beliefs.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-max rounded-full bg-primary-yellow p-4">
              <BsBook className="text-white text-3xl" />
            </div>
            <p className="text-3xl font-bold">Place Of Heaven</p>
            <p className="text-primary-grey text-xl">
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
