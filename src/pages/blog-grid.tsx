import BreadCrump from "@/components/atoms/breadcrump";
import Section from "@/components/atoms/wrappers/section";
import Layout from "@/components/layout";
import RightBar from "@/components/sections/sermons/rightbar";
import data from "@/data/blog/blog";
import BlogCard from "@/components/atoms/cards/blog-card";
import React from "react";

const BlogGrid = () => {
  return (
    <Layout>
      <BreadCrump />
      <Section>
        <div className="flex gap-14">
          <div className="w-[70%] flex flex-wrap gap-14 h-max">
            {data.map((item, index) => (
              <BlogCard key={index} {...item} />
            ))}
          </div>
          <RightBar />
        </div>
      </Section>
    </Layout>
  );
};

export default BlogGrid;
