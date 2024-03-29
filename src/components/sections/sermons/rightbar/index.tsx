import Search from "@/components/forms/search";
import React from "react";
import Categories from "./categories";
import PopularPosts from "./popular-posts";
import { categories, tags } from "@/data/sermons/types";
import Tags from "./tags";

const RightBar = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-[30%] mb-7 w-full">
      <Search />
      <Categories categories={categories} />
      <PopularPosts />
      <Tags tags={tags} />
    </div>
  );
};

export default RightBar;
