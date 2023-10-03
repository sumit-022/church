import BreadCrump from "@/components/atoms/breadcrump";
import Section from "@/components/atoms/wrappers/section";
import Layout from "@/components/layout";
import React from "react";
import data from "@/data/events/events";
import EventCard from "@/components/atoms/cards/event-card";

const EventsPage = () => {
  return (
    <Layout>
      <BreadCrump />
      <Section>
        <div className="flex gap-6 flex-wrap justify-center">
          {data.map((item, index) => (
            <EventCard key={index} {...item} />
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default EventsPage;
