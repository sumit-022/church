import BreadCrump from "@/components/atoms/breadcrump";
import Section from "@/components/atoms/wrappers/section";
import Layout from "@/components/layout";
import DonateNow from "@/components/sections/donate";
import React from "react";

const DonateNowPage = () => {
  return (
    <Layout>
      <BreadCrump />
      <Section>
        <DonateNow />
      </Section>
    </Layout>
  );
};

export default DonateNowPage;
