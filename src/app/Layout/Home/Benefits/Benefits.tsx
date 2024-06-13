import React from "react";
import { benefitsData } from "@/app/static-data/data";
import Card from "./Card";
const Benefits = () => {
  return (
    <section className="w-full">
      <div className="container-custom  mx-auto p-5 md:p-10 lg:p-20 border-b  border-b-[#F4F6F8]">
        <div className="flex flex-row max-sm:items-center max-sm:py-2 flex-wrap justify-between">
        {benefitsData.map((benefit) => (
          <Card {...benefit} key={benefit.id}/>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
