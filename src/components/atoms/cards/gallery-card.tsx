import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import Image from "next/image";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";

const GalleryCard = ({
  image,
  title,
}: {
  image: StaticImport;
  title: string;
}) => {
  return (
    <div className="relative max-h-[550px] overflow-hidden max-w-[550px]">
      <Image
        src={image}
        alt="image"
        className="w-full h-full"
        objectFit="cover"
      />
      <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white absolute left-0 right-0 p-4 bottom-0 top-0 opacity-0 hover:opacity-70 transition-all duration-300 cursor-pointer border flex flex-col justify-end items-start gap-1">
          <p className="text-black text-2xl font-bold">{title}</p>
          <div className="rounded-full text-white flex items-center justify-center p-3 bg-primary-yellow">
            <HiMagnifyingGlassPlus className="text-2xl opacity-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
