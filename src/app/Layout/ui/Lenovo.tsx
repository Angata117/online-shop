import Image from "next/image";
import lenovo from "/public/home/lenovo.png";

const Lenovo = () => {
  return (
    <section className="container-custom">
      <div className="lg:w-[1110px]  max-md:w-[70%] mx-auto  bg-[#47C1BF] bg-opacity-30 ">
        <div className="flex flex-col max-md:items-center md:flex-row justify-center sm:gap-10 gap-5 md:gap-20 lg:gap-40">
          <div className="">
            <Image src={lenovo} alt="Lenovo"></Image>
          </div>
          <div className="flex max-sm:gap-2 flex-col max-md:p-2 text-start md:w-[38%] justify-center">
            <p className="font-roboto text-sm md:text-[14px] leading-[20px] text-[#47C1BF]">
              FLASH SALE 7.7.7
            </p>

            <h1
              className="font-rubik font-bold md:text-3xl sm:text-2xl text-xl lg:text-4xl 
            lg:leading-[52px] md:leading-[40px]  sm:leading-[30px] tracking-[0.2px]
           text-[#161D25]"
            >
              Lenovo Yoga X
            </h1>

            <p className="font-roboto w-[90%] sm:py-3 lg:py-5 text-base leading-[28px] text-[#959EAD]">
              Smarter and intuitive with the same expert design and detail. Plus
              combine innovative latest AI features
            </p>

            <div className="flex flex-row gap-3 lg:gap-5 items-center">
              <button
                type="button"
                className="font-roboto text-center text-sm md:text-base leading-[22px] py-1 px-3 md:px-5 md:py-3 rounded-md
               text-white bg-[#47C1BF]"
              >
                Buy Now for $750
              </button>

              <p className="font-roboto text-base md:text-[20px] md:leading-[28px] line-through text-[#959EAD]">
                $1500,0
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lenovo;
