import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsPlay, BsBook } from "react-icons/bs";
import { LuMusic2 } from "react-icons/lu";
import { useRouter } from "next/router";
import clsx from "clsx";
import Link from "next/link";

const SermonCard: React.FC<SermonCardProps> = ({
  title,
  preacher,
  image,
  categories,
  date,
  id,
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <div className="relative">
        <Image src={image} alt={title} className="rounded-t-md" />
        <div
          className={clsx(
            router.pathname === "/"
              ? "absolute -bottom-4 left-1/2 right-1/2"
              : "bg-white w-full pt-8"
          )}
        >
          <div
            className={clsx(
              router.pathname === "/"
                ? "flex gap-3 justify-center items-center"
                : "flex gap-3 pl-4"
            )}
          >
            <div className="flex items-center justify-center bg-primary-yellow p-4 rounded-md">
              <BsPlay className="text-white text-lg" />
            </div>
            <div className="flex items-center justify-center bg-primary-yellow p-4 rounded-md">
              <LuMusic2 className="text-white text-lg" />
            </div>
            <div className="flex items-center justify-center bg-primary-yellow p-4 rounded-md">
              <BsBook className="text-white text-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white px-5 py-8 gap-3">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <div className="flex flex-col gap-1">
          <p className="text-gray-500">
            Sermon by: <span className="text-primary-yellow">{preacher}</span>
          </p>
          <div className="flex gap-3">
            <p className="text-gray-500">
              Categories:{" "}
              <span className="text-primary-yellow">
                {categories.join(", ")}
              </span>
            </p>
            <p className="flex gap-1 items-center whitespace-nowrap text-primary-yellow">
              <AiOutlineClockCircle /> {date}
            </p>
          </div>
        </div>
        <div>
          {router.pathname === "/" ? (
            <button
              className="bg-primary-yellow text-white py-2 px-5 rounded-md"
              onClick={() => router.push(`/sermon-details/${id}`)}
            >
              Read More
            </button>
          ) : (
            <p
              onClick={() => router.push(`/sermon-details/${id}`)}
              className="text-primary-yellow underline underline-offset-4 cursor-pointer font-semibold"
            >
              Read More
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SermonCard;
