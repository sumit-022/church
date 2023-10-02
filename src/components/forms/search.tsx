import React from "react";
import { GoArrowRight } from "react-icons/go";

const Search = () => {
  return (
    <div className="border p-6 flex flex-col gap-6">
      <div className="flex overflow-hidden">
        <input type="text" className="border rounded-l-md focus:outline-none p-4 flex-1" placeholder="Search" />
        <div className="flex items-center justify-center bg-primary-yellow rounded-r-[5px] text-white px-4 text-xl cursor-pointer">
          <GoArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Search;
