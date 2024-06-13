import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = (category: {
  id: number;
  title: string;
  description: string;
  icon: any;
}) => {
  return (
    <article>
      <Link href={"/"} className="flex flex-col items-center">
        <Image src={category.icon} alt={category.title}></Image>
        <p className="font-roboto text-sm leading-[20px] text-center text-[#161D25]">
          {category.title}
        </p>
        <p className="font-roboto text-sm leading-[20px] text-center text-[#959EAD]">
          {category.description}
        </p>
      </Link>
    </article>
  );
};

export default Card;
