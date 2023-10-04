import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

interface Props {
  title: string;
  date: string;
  icon?: React.ReactNode;
  image?: string | StaticImport;
}

const PostCard = ({ title, date, icon, image }: Props) => {
  return (
    <div className="flex gap-4">
      {!image ? (
        <div className="h-20 w-28 flex justify-center items-center text-white text-xl bg-primary-yellow rounded-md">
          {icon}
        </div>
      ) : (
        <div className="h-20 w-28">
          <Image src={image} alt={title} className="rounded-md w-full h-full" />
        </div>
      )}
      <div className="flex flex-col">
        <p className="font-semibold text-[15px]">{title}</p>
        <p className="flex gap-1 items-center whitespace-nowrap text-primary-yellow">
          <AiOutlineClockCircle /> {date}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
