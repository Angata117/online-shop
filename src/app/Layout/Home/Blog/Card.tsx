import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = (blog: {
  id: number;
  date: string;
  title: string;
  description: string;
  image: any;
}) => {
  return (
    <article className="flex flex-col">
      <Link href='/'>
        <Image src={blog.image} alt={blog.title}></Image>
        <div className="flex flex-col mt-4 text-start">
          <p className="font-roboto text-sm leading-[20px] text-[#5C6AC4]">
            {blog.date}
          </p>
          <h1 className="sm:mt-5 mt-2 font-rubik font-bold sm:text-base sm:text-[18px]  leading-[20px] tracking-[0.2px] text-[#161D25]">
            {blog.title}
          </h1>
          <p className="font-roboto text-sm leading-[20px] text-[#959EAD] max-sm:w-full w-[80%] mt-2 sm:mt-4">
            {blog.description}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default Card;
