import { categories } from "@/app/static-data/data";
import Card from "./Card";

const Categories = () => {
  return (
    <section className="container-custom">
      <div className="lg:w-[1110px]  flex flex-col border-t border-t-[#F4F6F8] mt-10 mx-auto pt-10 ">
        <div className="flex flex-row justify-between ">
          <h1 className="font-rubik font-bold text-[20px] md:text-[28px] md:leading-[44px] tracking-[0.2px] text-[#161D25]">
            Category
          </h1>
          <button
            type="button"
            className="font-roboto text-center text-sm md:text-base leading-[22px] text-[#5C6AC4] border
               border-[#5C6AC4] px-3 py-1 md:px-5 md:py-3 rounded-md"
          >
           View All
          </button>
        </div>

        <div className=" flex flex-row flex-wrap gap-2 justify-between p-10 md:mt-10 lg:mt-20">
        {categories.map((category) => (
          <Card key={category.id} {...category} />
        ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
