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
    <div className="grid gap-4 grid-cols-[1fr,2fr]">
      {!image ? (
        <div className="h-full w-full flex justify-center items-center text-white text-xl bg-primary-yellow rounded-sm">{icon}</div>
      ) : (
        <Image
          src={image}
          alt={title}
          objectFit="cover"
          className="rounded-md w-full"
        />
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
