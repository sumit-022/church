import React from "react";
import Layout from ".";
import News from "@/components/sections/home/blog/footer-news";
import image1 from "@/assets/images/home/blogs/blog_thumb1-80x80.jpg";
import image2 from "@/assets/images/home/blogs/blog_thumb2-80x80.jpg";

const LatestNews = () => {
  return (
    <Layout title="Latest News">
      <div className="flex flex-col h-full lg:justify-between lg:gap-0 gap-4">
        <News
          image={image1}
          date="June 12, 2021"
          title="Spirit Of The Lord Is, From The New Life"
        />
        <div className="h-[1px] w-full bg-[#3c4557]"></div>
        <News
          image={image2}
          date="June 12, 2021"
          title="Spirit Of The Lord Is, From The New Life"
        />
      </div>
    </Layout>
  );
};

export default LatestNews;
