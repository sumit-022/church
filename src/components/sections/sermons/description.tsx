import React from "react";

const Description = ({ description }: { description: string }) => {
  return (
    <div className="flex flex-col gap-4 mt-6">
      <p className="text-2xl font-bold">
        Sermon <span className="text-primary-yellow">Description</span>
      </p>
      <p className="text-primary-grey mb-6">{description}</p>
    </div>
  );
};

export default Description;
