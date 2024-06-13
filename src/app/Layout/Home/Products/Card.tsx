import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = (product: {
  id: number;
  heading: string;
  price: string;
  rating: string;
  star: any;
  icon: any;
}) => {
  return (
    <div className="flex flex-col mt-5 lg:mt-10">
     
        <Link href={"/"} className="mb-4 flex flex-row items-center">
          <Image
            src={product.icon}
            alt={product.heading}
            width={50}
            height={50}
          />
          <div className="ml-4 h-full w-full font-roboto">
            <p className="text-base font-bold mb-2 text-[#161D25]">{product.heading}</p>
            <div className="flex flex-row gap-10">
              <p className="text-sm leading-[20px]  text-[#5C6AC4]">{product.price}</p>
              <div className="flex items-center">
                <Image src={product.star} alt="star" width={16} height={16} />
                <p className="ml-2 text-sm leading-[20px] text-[#959EAD]">{product.rating}</p>
              </div>
            </div>
          </div>
        </Link>
      
    </div>
  );
};

export default Card;
