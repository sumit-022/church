import React from "react";
import { BsPlay } from "react-icons/bs";

const Audio = () => {
  return (
    <div className="w-full flex md:text-start text-center flex-col md:flex-row md:gap-12 gap-8 items-center justify-center p-11 rounded-md bg-[url(../assets/images/home/bg/bg-1.jpg)] bg-center bg-no-repeat bg-cover">
      <div className="rounded-full bg-primary-yellow p-5 pulse">
        <BsPlay className="text-white text-4xl" />
      </div>
      <p className="text-white text-2xl leading-tight font-bold">
        “Pray! And listen to God! You can do this alone, but find somebody to do
        it with you. We Still Worship the Same God”
      </p>
    </div>
  );
};

export default Audio;
