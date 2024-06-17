import Image from "next/image";
import { products } from "@/app/static-data/data";
import Card from "./Card";

const BestSellers = () => {
  return (
    <section className="w-full">
      <div className="container-custom mx-auto md:pt-10 pt-5 lg:pt-20 lg:px-20 md:px-10">
        <div className="flex flex-col sm:items-center">
          <h1 className="font-rubik font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:leading-[52px] md:leading-[40px]
           tracking-[0.2px] text-[#161D25]">Best Seller Products</h1>
          <p className="font-roboto pr-3 mt-2 text-sm md:text-base md:leading-[22px] text-[#959EAD]">Check our best seller products on Elma website right now</p>
        </div>
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5 sm:p-5">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
     </div>
      </div>
    </section>
  );
};

export default BestSellers;
