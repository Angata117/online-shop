import rating from "/public/home/bestSellers/rating.svg";
import loved from "/public/home/bestSellers/Loved.svg";
import unLoved from "/public/home/bestSellers/unLoved.svg";
import Image from "next/image";

const Card = (product: {
  id: number;
  sale?: string;
  category: string;
  title: string;
  price: string;
  icon: any;
}) => {
  return (
    <article className="flex flex-col justify-center w-fit group sm:p-5 rounded-xl 
    relative hover:shadow-lg max-sm:scale-90">
      <div className="flex flex-row justify-between items-center ">
        {product.sale ? (
          <p className="font-roboto text-[12px] leading-[18px] text-center text-[#DE3618] 
            bg-[#DE3618] bg-opacity-15 rounded-lg py-2 px-3 uppercase font-bold">
            {product.sale}
          </p>
        ) : (
          <p></p>
        )}

        {product.id == 1 ? (
          <Image src={loved} alt="Loved" />
        ) : (
          <Image src={unLoved} alt="unLoved" className="right-0" />
        )}
      </div>

      <div className="flex mt-5 items-center justify-center">
        <Image src={product.icon} alt={product.title}></Image>
      </div>

      <p className="font-roboto text-[12px] leading-[18px] text-[#959EAD] mt-5">{product.category}</p>
      <p className="font-roboto font-bold text-sm sm:text-base leading-[22px] text-[#161D25] mt-2">{product.title}</p>

      <div className="flex flex-col-reverse sm:flex-row sm:gap-5 justify-center items-start sm:items-center">
        <p className="font-roboto text-[14px] leading-[20px] text-[#5C6AC4] mt-2">{product.price}</p>
        <Image src={rating} alt="rating" className="mt-1"></Image>
      </div>

      <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="font-bold text-base text-white bg-[#5C6AC4] px-5 py-2 rounded-xl shadow-md mb-2">
          Add to cart
        </button>
        <button className="font-bold text-base text-white bg-[#212B36] px-5 py-2 rounded-xl shadow-md">
          Quick view
        </button>
      </div>
    </article>
  );
};

export default Card;
