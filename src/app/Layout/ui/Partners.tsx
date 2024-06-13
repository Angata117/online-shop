import { partnersImages } from "@/app/static-data/partners";
import Image from "next/image";

const Partners = () => {
  return (
    <article className="w-full">
      <div className="container-custom mx-auto lg:p-20">
        <div className="flex flex-row justify-between max-sm:justify-center max-sm:items-center gap-5 flex-wrap md:px-20">
          {partnersImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="partners"
              width={img.width}
              height={img.height}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Partners;
