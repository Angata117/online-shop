import Image from "next/image";
import arrowDown from "/public/home/hero/arrow-down.svg";
import headphones from "/public/home/hero/headphones.svg";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Hero = () => {
  return (
    <section className="w-full bg-[#F9FAFB]">
      <div className="container-custom mx-auto md:px-10 lg:px-20 flex flex-col md:flex-row pt-10 md:pt-20 justify-between md:pb-10">
        <div className="flex flex-col md:w-[40%]">
          <p className="font-roboto text-[12px] sm:text-[14px] leading-[20px] text-[#47C1BF]">
            SONY WH-H910N
          </p>

          <h1
            className="font-rubik mt-5 font-bold max-sm:text[20px] sm:text-[36px] md:text-[48px] lg:text-[56px]
           text-[#161D25] md:leading-[50px] lg:leading-[72px] tracking-[0.2px]"
          >
            Best in Hi-Res and Noise Cancelling
          </h1>

          <p className="font-roboto w-[90%] py-2 md:py-5 text-base leading-[28px] text-[#959EAD]">
            Experience finely tuned noise-canceling performance in a comfortable
            headphone. Long-lasting battery life plus quick charging keeps you
            listening for up to 35 hours since start.
          </p>

          <div className="flex flex-row gap-3 sm:gap-5">
            <button
              type="button"
              className="font-roboto text-center text-sm sm:text-base leading-[22px]  px-4 sm:px-12 py-2 sm:py-3 rounded-lg
               text-white bg-[#43467F] hover:bg-white hover:text-[#43467F] "
            >
              Buy Now
            </button>

            <button
              type="button"
              className="font-roboto text-center text-sm sm:text-base leading-[22px] text-[#5C6AC4] border
               border-[#5C6AC4] px-3 sm:px-7 py-2 sm:py-3 rounded-lg hover:text-white hover:bg-[#43467F] "
            >
              Learn More
            </button>
          </div>

          <div className=" mt-7 sm:mt-10 md:mt-20 cursor-pointer">
            <Image
              src={arrowDown}
              alt={arrowDown.alt}
              width={arrowDown.width}
              height={arrowDown.height}
            ></Image>
          </div>
          
        </div>
        <div className="flex pr-10 flex-row gap-3 md:gap-10 max-sm:scale-75 ">
          <Image
            src={headphones}
            alt={headphones.alt}
            width={headphones.width}
            height={headphones.height}
          ></Image>
          <div className="flex items-center ">
          <div
            className="p-6 flex items-center cursor-pointer hover:text-white hover:bg-[#43467F]
         rounded-full bg-white text-black"
          >
            <FontAwesomeIcon icon={faAngleRight} width={24} height={24} />
          </div>
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
