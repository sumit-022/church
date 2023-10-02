import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

interface Props {
  preacher: string;
  categories: string[];
  date: string;
  content: string;
}

const Details = ({ preacher, categories, date, content }: Props) => {
  return (
    <div className="flex flex-col gap-4 mt-6">
      <div className="flex gap-3">
        <p className="text-primary-grey">
          Sermon by: <span className="text-primary-yellow">{preacher}</span>
        </p>
        <p className="text-primary-grey">
          Categories:{" "}
          <span className="text-primary-yellow">{categories.join(", ")}</span>
        </p>
        <p className="text-primary-yellow flex items-center gap-1">
          <AiOutlineClockCircle /> {date}
        </p>
      </div>
      <p className="text-primary-grey">{content}</p>
    </div>
  );
};

export default Details;
