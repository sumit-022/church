import React from "react";
import Section from "@/components/atoms/wrappers/section";
import Layout from "@/components/layout";
import image1 from "@/assets/images/pages/gallery/1.jpg";
import Image from "next/image";
import BreadCrump from "@/components/atoms/breadcrump";
import ImageContent from "@/components/sections/gallery/image-content";
import Details from "@/components/sections/gallery/details";
import { useRouter } from "next/router";
import data from "@/data/gallery";

const GalleryStandardPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const gallery = data.find((item) => item.id === Number(id));
  return (
    gallery && (
      <Layout>
        <BreadCrump />
        <Section>
          <div className="mb-4 w-full">
            <Image
              src={gallery.image}
              alt="image1"
              className="w-full rounded-md"
              objectFit="cover"
            />
          </div>
          <div className="flex gap-14 my-10">
            <ImageContent description={gallery.description} />
            <Details {...gallery} />
          </div>
        </Section>
      </Layout>
    )
  );
};

export default GalleryStandardPage;
