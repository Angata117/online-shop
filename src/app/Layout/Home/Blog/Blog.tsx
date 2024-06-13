import { blogs } from "@/app/static-data/data";
import Card from "./Card";
const Blog = () => {
  return (
    <section className="w-full">
      <div className="container-custom mx-auto  max-sm:mt-5 sm:p-10 p-5 lg:p-20">
        <div className="flex flex-row justify-between items-center">
          <div className="max-sm:w-[65%] sm:max-md:w-[70%]">
            <h1 className="font-rubik font-bold md:text-3xl sm:text-2xl text-xl lg:text-4xl 
            lg:leading-[52px] md:leading-[46px] tracking-[0.2px] text-[#161D25]">
              Read our blog
            </h1>
            <p className="font-roboto  text-sm sm:text-base leading-[22px] text-[#959EAD] mt-2 sm:mt-5">
              Check our latest article to get meaningfull content or tips for
              shopping
            </p>
          </div>

          <div>
            <button
              type="button"
              className="font-roboto text-center text-sm sm:text-base leading-[22px] text-[#5C6AC4] border
               border-[#5C6AC4] p-1 sm:p-3 rounded-lg"
            >
              More on blogs
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between mt-5 gap-5 lg:mt-10 
         ">
          {blogs.map((blog) => (
            <Card key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
