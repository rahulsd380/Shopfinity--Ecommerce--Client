import Image from "next/image";

type TCategoryCardProps = {
  category: {
    _id: string;
    name: string;
    description: string;
    image: string;
  };
  bgColor: string;
};
const CategoryCard: React.FC<TCategoryCardProps> = ({ category, bgColor }) => {
  return (
    <div
      className="p-4 text-center font-Inter rounded flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:border hover:border-primary-10"
      style={{ backgroundColor: bgColor }}
    >
      <div className="relative size-[100px]">
        <Image
          src={category.image}
          className="size-[100px]"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <h1 className="text-neutral-10 text-lg font-semibold mt-4">
        {category.name}
      </h1>
      <p className="text-neutral-40 text-sm font-medium mt-1">
        {/* {category.length} Items */}
      </p>
    </div>
  );
};

export default CategoryCard;
