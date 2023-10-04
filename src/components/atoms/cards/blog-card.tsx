import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineCalendar } from "react-icons/ai";

const BlogCard: React.FC<BlogCardProps> = ({ date, image, title, id }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col max-w-[350px] h-max">
      <Image src={image} alt="blog image" />
      <div className="bg-white pt-6 border p-4 flex flex-col gap-1 relative w-[85%] mx-auto -m-4">
        <h3 className="text-xl leading-tight font-bold">{title}</h3>
        <p
          onClick={() => router.push(`/blog-details/${id}`)}
          className="text-primary-yellow cursor-pointer text-sm font-semibold underline"
        >
          Read More
        </p>
        <div className="py-1 px-3 rounded-sm items-center justify-center text-white bg-primary-yellow absolute -top-3 flex gap-1">
          <AiOutlineCalendar />
          <p className="text-xs font-semibold">OCT 21, 2021</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
