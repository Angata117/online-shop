import { footerLogos } from "@/app/static-data/data";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="w-full">
      <div className="container-custom mx-auto max:sm:mt-5 mt-10 md:px-20 pb-10">
        <div className="flex flex-col sm:flex-row justify-between ">
            <p className="font-roboto text-sm leading-[20px] text-[#5A7184]">Store © Copyright 2024, Inc. All rights reserved</p>
        <div className="flex flex-row max-sm:mt-2 gap-4">
            {footerLogos.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
