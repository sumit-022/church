import PostCard from "@/components/atoms/cards/post-card";
import RightLayout from "@/components/atoms/wrappers/rightbar";
import React from "react";
import data from "@/data/sermons/posts";

const PopularPosts = () => {
  return (
    <RightLayout title="Popular Posts">
      <div className="flex flex-col gap-3">
        {data.map((item, index) => (
          <PostCard key={index} {...item} />
        ))}
      </div>
    </RightLayout>
  );
};

export default PopularPosts;
