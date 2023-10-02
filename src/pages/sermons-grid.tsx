import BreadCrump from "@/components/atoms/breadcrump";
import Section from "@/components/atoms/wrappers/section";
import Layout from "@/components/layout";
import Sermons from "@/components/sections/sermons";
import React from "react";

const SermonsGridPage = () => {
  return (
    <Layout>
          <BreadCrump />
          <Section>
              <Sermons />
          </Section>
    </Layout>
  );
};

export default SermonsGridPage;
