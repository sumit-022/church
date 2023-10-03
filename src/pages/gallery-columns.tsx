import BreadCrump from "@/components/atoms/breadcrump";
import GalleryCard from "@/components/atoms/cards/gallery-card";
import Section from "@/components/atoms/wrappers/section";
import Layout from "@/components/layout";
import React from "react";
import data from "@/data/gallery";

const GalleryColumnsPage = () => {
  return (
    <Layout>
      <BreadCrump />
      <Section>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {data.map((item, index) => (
            <GalleryCard key={index} {...item} />
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default GalleryColumnsPage;
