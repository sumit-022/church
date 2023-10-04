import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import BreadCrump from "@/components/atoms/breadcrump";
import Section from "@/components/atoms/wrappers/section";
import RightBar from "@/components/sections/sermons/rightbar";
import LeftContent from "@/components/sections/blog/left";
import authoricon from "@/assets/images/pages/blog/author-icon.jpg";
import data from "@/data/blog/blog";

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog = data.find((item) => item.id === Number(id));

  return (
    blog && (
      <Layout>
        <BreadCrump />
        <Section>
          <div className="flex gap-14 my-7">
            <LeftContent {...blog} />
            <RightBar />
          </div>
        </Section>
      </Layout>
    )
  );
};

export default BlogDetails;
