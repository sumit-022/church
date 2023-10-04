import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import BreadCrump from "@/components/atoms/breadcrump";
import Section from "@/components/atoms/wrappers/section";
import SermonBanner from "@/components/sections/sermons/banner";
import Image from "next/image";
import image1 from "@/assets/images/sermons/pictures/sermon-single2.jpg";
import image2 from "@/assets/images/sermons/pictures/sermon-single3.jpg";
import Details from "@/components/sections/sermons/details";
import Description from "@/components/sections/sermons/description";
import data from "@/data/sermons/sermon-cards";

const SermonDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const sermon = data.find((item) => item.id === Number(id));

  return (
    sermon && (
      <Layout>
        <BreadCrump />
        <Section>
          <SermonBanner image={sermon.image} />
          <Details
            categories={sermon.categories}
            content={sermon.content}
            date={sermon.date}
            preacher={sermon.preacher}
          />
          <div className="flex lg:flex-row flex-col gap-4 mt-8">
            <Image src={image1} alt="image1" className="rounded-[8px]" />
            <Image src={image2} alt="image2" className="rounded-[8px]" />
          </div>
          <Description description={sermon.description} />
        </Section>
      </Layout>
    )
  );
};

export default SermonDetailsPage;
