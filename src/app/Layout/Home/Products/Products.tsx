import {
  productList1,
  productList2,
  productList3,
} from "@/app/static-data/data";
import Card from "./Card";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Products = () => {
  return (
    <section className="w-full">
      <div className="container-custom mx-auto lg:p-20 lg:pt-16">
        <ul className="flex flex-row flex-wrap  gap-10 md:gap-20 lg:gap-40  justify-center">
          <li className="">
            <h1 className="font-rubik font-bold text-lg sm:text-[22px] leading-[30px] tracking-[0.2px] text-[#161D25]">
              Product list 1
              {productList1.map((product) => (
                <Card key={product.id} {...product} />
              ))}
            </h1>
            {}
            <Link href={"/"} className="mt-5 md:mt-10 flex flex-row justify-between">
              <p className="text-[#006FBB] font-roboto text-base leading-[22px] font-bold ">
                View More Products...
              </p>
              <div className="text-[#5C6AC4]">
                <FontAwesomeIcon icon={faAngleRight} width={16} height={16} />
              </div>
            </Link>
          </li>
          <li>
            <h1 className="font-rubik font-bold text-lg sm:text-[22px] leading-[30px] tracking-[0.2px] text-[#161D25]">
              Product list 2
            </h1>
            {productList2.map((product) => (
              <Card key={product.id} {...product} />
            ))}
             <Link href={"/"} className="mt-5 md:mt-10 flex flex-row justify-between">
              <p className="text-[#006FBB] font-roboto text-base leading-[22px] font-bold ">
                View More Products...
              </p>
              <div className="text-[#5C6AC4]">
                <FontAwesomeIcon icon={faAngleRight} width={16} height={16} />
              </div>
            </Link>
          </li>
          <li>
            <h1 className="font-rubik font-bold text-lg sm:text-[22px] leading-[30px] tracking-[0.2px] text-[#161D25]">
              Product list 3
            </h1>
            {productList3.map((product) => (
              <Card key={product.id} {...product} />
            ))}
            <Link href={"/"} className="mt-5 md:mt-10 flex flex-row justify-between">
              <p className="text-[#006FBB] font-roboto text-base leading-[22px] font-bold ">
                View More Products...
              </p>
              <div className="text-[#5C6AC4]">
                <FontAwesomeIcon icon={faAngleRight} width={16} height={16} />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Products;
