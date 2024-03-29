import React from "react";
import Image from "next/image";
import { BsBook, BsPlay, BsHeadphones } from "react-icons/bs";
import { LuMusic2 } from "react-icons/lu";
import { TfiDownload } from "react-icons/tfi";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const SermonBanner = ({ image }: { image: StaticImport | string }) => {
  return (
    <div className="relative">
      <Image src={image} alt="banner" layout="responsive" />
      <div className="flex p-5 -mt-10 slant relative w-[85%] mx-auto z-10 bg-primary-yellow rounded-md">
        <div className="flex justify-between w-full flex-col sm:flex-row">
          <div className="flex flex-col gap-4">
            <p className="text-white font-bold md:text-2xl text-lg">Watch Now</p>
            <div className="flex gap-4 md:text-lg text-sm">
              <div className="flex items-center justify-center bg-white md:p-4 p-2 rounded-md">
                <BsHeadphones className="text-[#252525]" />
              </div>
              <div className="flex items-center justify-center bg-white md:p-4 p-2 rounded-md">
                <LuMusic2 className="text-[#252525]" />
              </div>
              <div className="flex items-center justify-center bg-white md:p-4 p-2 rounded-md">
                <BsBook className="text-[#252525]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            <p className="text-white font-bold md:text-2xl text-lg">Download</p>
            <div className="flex gap-4">
              <div className="flex items-center justify-center bg-white md:p-4 p-2 rounded-md">
                <BsPlay className="text-[#252525] text-lg" />
              </div>
              <div className="flex items-center justify-center bg-white md:p-4 p-2 rounded-md">
                <LuMusic2 className="text-[#252525] text-lg" />
              </div>
              <div className="flex items-center justify-center bg-white md:p-4 p-2 rounded-md">
                <TfiDownload className="text-[#252525] text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SermonBanner;
