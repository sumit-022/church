import React from "react";
import Image from "next/image";
import { AiOutlineCalendar } from "react-icons/ai";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface NewsProps {
  image: string | StaticImport;
  title: string;
  date: string;
}

const News: React.FC<NewsProps> = ({ image, title, date }) => {
  return (
    <div className="flex gap-4 items-center">
      <Image src={image} alt="blog" width={100} height={100} className="rounded-sm" />
      <div className="flex flex-col gap-1">
        <p className="font-bold">{title}</p>
        <div className="flex text-xs gap-1 items-center">
          <AiOutlineCalendar className="text-primary-yellow text-sm" />
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default News;
