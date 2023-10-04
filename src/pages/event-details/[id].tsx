import BreadCrump from "@/components/atoms/breadcrump";
import Layout from "@/components/layout";
import Image from "next/image";
import React from "react";
import bannerimage from "@/assets/images/pages/events/events-single.jpg";
import LeftContent from "@/components/sections/events/left";
import RightContent from "@/components/sections/events/right";
import Section from "@/components/atoms/wrappers/section";
import { useRouter } from "next/router";
import data from "@/data/events/events";

const EventDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const event = data.find((event) => event.id === Number(id));

  return (
    event && (
      <Layout>
        <BreadCrump />
        <Section>
          <Image
            src={event.image}
            alt="banner"
            className="rounded-md h-[500px] w-full mb-4"
          />
          <div className="flex lg:flex-row flex-col gap-14 my-7">
            <LeftContent {...event} />
            <RightContent {...event} />
          </div>
        </Section>
      </Layout>
    )
  );
};

export default EventDetails;
