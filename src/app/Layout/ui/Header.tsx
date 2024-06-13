// import Image from "next/image";
// import { headerImages1, headerImages2 } from "@/app/static-data/data";
// import usaImg from "/public/header/usa.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import Link from "next/link";
// const Header = () => {
//   return (
//     <article className="w-full">
//       <div className="container-custom mx-auto md:px-10 lg:px-20">
//         <div className="flex flex-col mt-5 lg:mt-10">
//           <div className="flex flex-row justify-between items-center border-b pb-5">

//             <div className="flex flex-row gap-5 items-center ">
//               {headerImages1.map((img, index) => (
//                 <Image
//                   key={index}
//                   src={img}
//                   alt="header image"
//                   width={img.width}
//                   height={img.height}
//                 />
//               ))}
//             </div>

//             <div className="flex flex-row gap-5 items-center">
//               <a href="#" className="font-rubik  text-base leading-[20px] trakicing-[0.18px] text-[#637381]">
//                 Order tracking
//               </a>
//               <a href="#" className="font-rubik  text-base leading-[20px] trakicing-[0.18px] text-[#637381]">
//                 Help
//               </a>

//               <div className="flex gap-1">
//                 <Image
//                   src={usaImg}
//                   alt="usa"
//                   width={usaImg.width}
//                   height={usaImg.height}
//                 ></Image>
//                 <select className="font-rubik font-semibold text-base leading-[20px] trakicing-[0.18px] text-[#161D25]">
//                   <option>English (US)</option>
//                   <option>Bulgarian</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-row justify-between items-center mt-5">
//           <Link href={"/"} className="font-rubik font-bold text-[28px] leading-[44px] tracking-[0.2px] text-center">
//             STORE
//           </Link>

//           <div className="bg-[#F9FAFB]  rounded-lg pl-2 lg:pl-3 flex flex-row lg:gap-2">
//             <input
//               type="text"
//               placeholder="Search something.."
//               className="bg-[#F9FAFB] focus:outline-none placeholder:text-[#637381] text-[#637381] font-Rubik"
//             ></input>

//             <select className="bg-[#F9FAFB] focus:outline-none placeholder:text-[#637381] text-[#637381] font-Rubik">
//               <option>All categories</option>
//               <option>Phones</option>
//             </select>

//             <div className="p-2 lg:p-3 bg-[#212B36] rounded-lg cursor-pointer">
//               <FontAwesomeIcon
//                 icon={faSearch}
//                 className="text-white"
//                 width={20}
//                 height={20}
//               />
//             </div>

//           </div>

//           <div className="flex flex-row gap-5 items-center ">
//             <div className="flex flex-row gap-5 sm:max-lg:scale-75">
//             {headerImages2.map((img, index) => (
//               <Link href='/' key={index} className="relative">
//                 <Image
//                   src={img}
//                   alt={img.alt}
//                   width={img.width}
//                   height={img.height}
//                 />
//                 {index === 0 && (
//                   <span className="absolute font-roboto top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-700 rounded-full">
//                     3
//                   </span>
//                 )}
//               </Link>
//             ))}
//             </div>
//             <div className="flex flex-col text-start">
//               <p className="font-rubik max-lg:text-sm text-base leading-[20px] trakicing-[0.18px] text-[#637381]">
//                 Ivan Todorov
//               </p>
//               <select className="font-rubik max-lg:text-sm text-base leading-[20px] trakicing-[0.18px] text-[#161D25]">
//                 <option>My Account</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default Header;
"use client";
import { useState } from "react";
import Image from "next/image";
import { headerImages1, headerImages2 } from "@/app/static-data/data";
import usaImg from "/public/header/usa.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="w-full">
      <div className="container-custom mx-auto md:px-10 lg:px-20">
        <div className="flex flex-col mt-5 lg:mt-10">
          <div className="flex flex-row justify-between items-center border-b pb-5">
            <div className="flex flex-row gap-5 items-center">
              {headerImages1.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt="header image"
                  width={img.width}
                  height={img.height}
                />
              ))}
            </div>

            <div className="hidden md:flex flex-row gap-5 items-center">
              <a
                href="#"
                className="font-rubik text-base leading-[20px] tracking-[0.18px] text-[#637381]"
              >
                Order tracking
              </a>
              <a
                href="#"
                className="font-rubik text-base leading-[20px] tracking-[0.18px] text-[#637381]"
              >
                Help
              </a>

              <div className="flex gap-1">
                <Image
                  src={usaImg}
                  alt="usa"
                  width={usaImg.width}
                  height={usaImg.height}
                ></Image>
                <select className="font-rubik font-semibold text-base leading-[20px] tracking-[0.18px] text-[#161D25]">
                  <option>English (US)</option>
                  <option>Bulgarian</option>
                </select>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-black">
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-5">
          <Link
            href={"/"}
            className="font-rubik font-bold text-[28px] leading-[44px] tracking-[0.2px] text-center"
          >
            STORE
          </Link>

          <div className="bg-[#F9FAFB] sm:max-md:w[80%]  rounded-lg pl-2 lg:pl-3 flex flex-row lg:gap-2">
            <input
              type="text"
              placeholder="Search something.."
              className="bg-[#F9FAFB] max-sm:w-[70%] focus:outline-none placeholder:text-[#637381] text-[#637381] font-Rubik"
            ></input>

            <select className="bg-[#F9FAFB] focus:outline-none placeholder:text-[#637381] text-[#637381] font-Rubik">
              <option>All categories</option>
              <option>Phones</option>
            </select>

            <div className="p-2 lg:p-3 bg-[#212B36] hover:bg-[#43467F] rounded-lg cursor-pointer">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-white"
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className="hidden md:flex flex-row gap-5 items-center">
            <div className="flex flex-row gap-5 sm:max-lg:scale-75">
              {headerImages2.map((img, index) => (
                <Link href="/" key={index} className="relative">
                  <Image
                    src={img}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                  />
                  {index === 0 && (
                    <span className="absolute font-roboto top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-700 rounded-full">
                      3
                    </span>
                  )}
                </Link>
              ))}
            </div>
            <div className="flex flex-col text-start">
              <p className="font-rubik max-lg:text-sm text-base leading-[20px] tracking-[0.18px] text-[#637381]">
                Ivan Todorov
              </p>
              <select className="font-rubik max-lg:text-sm text-base leading-[20px] tracking-[0.18px] text-[#161D25]">
                <option>My Account</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-0 right-0 w-full bg-white shadow-lg  flex flex-col px-5">
          <div className="flex flex-row justify-between mt-5">
            <div className="flex flex-row gap-5 ">
              {headerImages1.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt="header image"
                  width={img.width}
                  height={img.height}
                />
              ))}
            </div>

            <button onClick={toggleMenu} className="self-end  text-black">
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </button>
          </div>
          <div className="flex flex-row justify-between gap-2">
            <div className="flex flex-col gap-2">
            <a
              href="#"
              className="font-rubik text-base leading-[20px] tracking-[0.18px] text-[#637381]"
            >
              Order tracking
            </a>
            <a
              href="#"
              className="font-rubik text-base leading-[20px] tracking-[0.18px] text-[#637381]"
            >
              Help
            </a>
            </div>
            <div className="flex gap-1">
              <Image
                src={usaImg}
                alt="usa"
                width={usaImg.width}
                height={usaImg.height}
              ></Image>
              <select className="font-rubik font-semibold text-base leading-[20px] tracking-[0.18px] text-[#161D25]">
                <option>English (US)</option>
                <option>Bulgarian</option>
              </select>
            </div>
          </div>
          <div className="mt-5 flex flex-row gap-5 items-center justify-between">
            <div className="flex flex-row gap-5">
              {headerImages2.map((img, index) => (
                <Link href="/" key={index} className="relative">
                  <Image
                    src={img}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                  />
                  {index === 0 && (
                    <span className="absolute font-roboto top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-700 rounded-full">
                      3
                    </span>
                  )}
                </Link>
              ))}
            </div>
            <div className="flex flex-col text-start mt-5">
              <div>
                <p className="font-rubik text-base leading-[20px] tracking-[0.18px] text-[#637381]">
                  Ivan Todorov
                </p>
                <select className="font-rubik text-base leading-[20px] tracking-[0.18px] text-[#161D25]">
                  <option>My Account</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Header;
