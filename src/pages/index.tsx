import React from "react";
import Layout from "@/components/layout";
import Carousel from "@/components/carousels/home-carousel";
import Sermons from "@/components/sections/home/sermons/sermons";
import Events from "@/components/sections/home/events/events";

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <Sermons />
      <Events />
    </Layout>
  );
}
