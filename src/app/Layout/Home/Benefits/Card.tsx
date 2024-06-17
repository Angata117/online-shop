import Image from "next/image";
import React from "react";

const Card = (benefit: {
  id: number;
  heading: string;
  description: string;
  icon: any;
}) => {
  return (
    <article className="flex flex-row max-sm:items-center max-sm:py-2 gap-2 sm:gap-3 lg:gap-5">
      <div>
        <Image src={benefit.icon} alt={benefit.heading}></Image>
      </div>
      <div className="flex flex-col">
        <p className="font-rubik font-bold  sm:text-sm md:text-base lg:text-lg md:leading-[20px] tracking-[0.2px] text-[#161D25]">
          {benefit.heading}
        </p>
        <p className="font-rubik  text-sm md:text-base leading-[22px] text-[#5A7184]">
          {benefit.description}
        </p>
      </div>
    </article>
  );
};

export default Card;
