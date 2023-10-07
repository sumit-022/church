import BreadCrump from "@/components/atoms/breadcrump";
import BlogCard from "@/components/atoms/cards/blog-card";
import Section from "@/components/atoms/wrappers/section";
import Layout from "@/components/layout";
import RightBar from "@/components/sections/sermons/rightbar";
import data from "@/data/blog/blog";
import React from "react";

const NewsPage = () => {
  return (
    <Layout>
      <BreadCrump />
      <Section>
        <div className="flex lg:flex-row flex-col gap-14">
          <RightBar />
          <div className="lg:w-[70%] w-full justify-center grid md:grid-cols-2 grid-cols-1 gap-14 h-max">
            {data.map((item, index) => (
              <BlogCard key={index} {...item} />
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default NewsPage;
