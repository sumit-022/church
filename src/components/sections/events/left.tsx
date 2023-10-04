import React from "react";
import Image from "next/image";
import image1 from "@/assets/images/pages/events/events-md1.jpg";
import image2 from "@/assets/images/pages/events/events-md2.jpg";
import Audio from "../home/sermons/audio";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
  about: string;
  description: string;
  images: string[] | StaticImport[];
}

const LeftContent: React.FC<Props> = ({
  about,
  description,
  images,
}: Props) => {
  return (
    <div className=" lg:w-[70%] w-full">
      <p className="text-primary-grey">{about}</p>
      <p className="font-bold my-4 text-3xl">
        Event <span className="text-primary-yellow">Description</span>
      </p>
      <p className="text-primary-grey">{description}</p>
      <div className="grid grid-cols-2 w-full gap-4 my-4">
        <Image src={image1} alt="image1" className="rounded-md" />
        <Image src={image2} alt="image2" className="rounded-md" />
      </div>
      <p className="font-bold my-4 text-3xl">
        Event <span className="text-primary-yellow">Gallery</span>
      </p>
      <p className="text-primary-grey my-4">
        We have a strong sense of community with parishioners. People and
        children of all ages here are encouraged to learn about their own faith
        and the role of the church in our community and worldwide.
      </p>
      <div className="flex gap-6 flex-wrap my-7">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="eventimage1"
            className="rounded-md"
            width={235}
          />
        ))}
      </div>
      <Audio />
    </div>
  );
};

export default LeftContent;
