import Image from "next/image";


const CategoryCard = ({category, bgColor}) => {
    return (
        <div className="p-4 text-center font-Inter rounded flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:border hover:border-primary-10" style={{ backgroundColor: bgColor }}>
            <Image src={category.img} className="size-[100px]" alt=""/>
            <h1 className="text-neutral-10 text-lg font-semibold mt-4">{category.name}</h1>
            <p className="text-neutral-40 text-sm font-medium mt-1">{category.length} Items</p>
        </div>
    );
};

export default CategoryCard;