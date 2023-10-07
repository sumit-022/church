import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeText = () => {
  return (
    <div className="w-full flex justify-center">
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="w-full"
      >
        <p className="text-2xl text-primary-grey font-bold">
          ANNOUNCEMENTS COMING SOON!
        </p>
      </Marquee>
    </div>
  );
};

export default MarqueeText;
