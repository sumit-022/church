import React from "react";
import Image from "next/image";
import dove from "@/assets/images/pages/gallery/dove.png";
import bible from "@/assets/images/pages/gallery/bible.png";
import bgimage from "@/assets/images/pages/gallery/video-bg.jpg";
import { BsPlay } from "react-icons/bs";

const ImageContent = ({ description }: { description: string }) => {
  return (
    <div className="w-[65%]">
      <p className="text-primary-grey">{description}</p>
      <div className="flex gap-4 w-full mt-7">
        <div className="flex gap-4 bg-white shadow-md p-4 rounded-md">
          <div className="h-max">
            <Image src={dove} alt="dove" width={150} height={150} />
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-lg">Creative Design</p>
            <p className="text-primary-grey">
              Risus commodo maecenas accum san ucan lacus vel facilisis.
            </p>
          </div>
        </div>
        <div className="flex gap-4 bg-white shadow-md p-4 rounded-md">
          <div className="h-max">
            <Image src={bible} alt="dove" width={150} height={150} />
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-lg">Digital Strategy</p>
            <p className="text-primary-grey">
              Risus commodo maecenas accum san ucan lacus vel facilisis.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[200px] mt-8 overflow-hidden flex justify-center items-center relative">
        <Image
          src={bgimage}
          alt="bgimage"
          className="absolute h-full w-full -z-20"
          objectFit="cover"
        />
        <div className="absolute top-0 left-0 w-full h-full overlay-custom rounded-md -z-10"></div>
        <div className="rounded-full bg-primary-yellow p-5 pulse">
          <BsPlay className="text-white text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default ImageContent;
