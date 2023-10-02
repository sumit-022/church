import RightLayout from "@/components/atoms/wrappers/rightbar";
import React from "react";

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <RightLayout title="Tags">
      <div className="flex flex-wrap gap-3">
        {tags.map((item, index) => (
          <div key={index} className="px-3 py-1 border text-sm">
            {item}
          </div>
        ))}
      </div>
    </RightLayout>
  );
};

export default Tags;
