import React from "react";
import Input from "../atoms/input";

const BlogReply = () => {
  return (
    <div className="w-full">
      <p className="font-bold text-2xl">Leave a Reply</p>
      <p className="text-primary-grey my-2">
        Your email address will not be published. Required fields are marked*
      </p>
      <div className="flex w-full gap-6 my-6">
        <Input
          type="text"
          name="name"
          placeholder="Name*"
          className="px-3 py-2 bg-transparent rounded-sm"
        />
        <Input
          type="email"
          name="email"
          placeholder="Email*"
          className="px-3 py-2 bg-transparent rounded-sm"
        />
      </div>
      <div className="flex items-center gap-2 my-4">
        <input type="checkbox" name="save" id="save" />
        <label htmlFor="save" className="text-primary-grey">
          Save my name, email, and website in this browser for the next time I
          comment.
        </label>
      </div>
      <Input
        type="textarea"
        name="message"
        placeholder="Message"
        className="px-3 py-2 w-full bg-transparent rounded-sm"
      />
      <button className="bg-primary-yellow mt-2 text-white px-8 py-3 rounded">
        Send
      </button>
    </div>
  );
};

export default BlogReply;
