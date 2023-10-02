import RightLayout from "@/components/atoms/wrappers/rightbar";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const Categories = ({ categories }: { categories: string[] }) => {
  return (
    <RightLayout title="Categories">
      <div className="flex flex-col gap-3">
        {categories.map((category, index) => (
          <>
            <div key={index} className="flex items-center gap-2 text-gray-600">
              <AiOutlineStar className="text-primary-yellow text-lg" />
              <p>{category}</p>
            </div>
            {index !== categories.length - 1 && <hr />}
          </>
        ))}
      </div>
    </RightLayout>
  );
};

export default Categories;
