import React from "react";
import Layout from ".";

const Newsletter = () => {
  return (
    <Layout title="Newsletter">
      <p className="">
        Sign up for our weekly newsletter to stay updated on all news and events
        at Zegen Church. Email updates on new product Announcements, Gift Ideas,
        Special Promotions and More.
      </p>
      <form className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 border border-gray-300 rounded-l-md w-full"
        />
        <button className="p-3 bg-yellow-500 text-white rounded-r-md">
          Subscribe
        </button>
      </form>
    </Layout>
  );
};

export default Newsletter;
