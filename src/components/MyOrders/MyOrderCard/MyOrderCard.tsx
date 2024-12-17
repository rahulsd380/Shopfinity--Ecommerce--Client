/* eslint-disable @next/next/no-img-element */
interface MyOrderCardProps {
    name: string;
    price: number;
    description: string;
    images: string[];
    category: string;
    brand: string;
    stock: number;
  }
  
  const MyOrderCard: React.FC<MyOrderCardProps> = ({ name, price, description, images, category, brand, stock }) => {
    return (
      <div className="bg-neutral-55/20 p-4 rounded-xl border border-neutral-45 flex flex-col lg:flex-row items-center gap-5">
        <div className="w-full lg:w-[30%] rounded-md border border-neutral-40/60 flex items-center justify-center">
          <img src={images && images[0]} alt={name} className="w-full" />
        </div>
  
        <div className="w-full lg:w-[70%]">
          <div className="flex items-center justify-between">
            <h1 className="font-Inter text-lg font-semibold leading-5 text-neutral-15">
              {name}
            </h1>
            <h1 className="font-Inter text-lg font-semibold leading-5 text-neutral-15">
              ${price}
            </h1>
          </div>
          <p className="text-neutral-20 font-normal mt-2">
            {description}
          </p>
          <p className="text-neutral-20 font-semibold mt-4">
            Category : <span className="font-normal">{category}</span>, Brand :{" "}
            <span className="font-normal">{brand}</span>
          </p>
          <p className="text-neutral-20 font-semibold mt-1">
            Stock : <span className="font-normal">{stock} Items</span>
          </p>
        </div>
      </div>
    );
  };
  
  export default MyOrderCard;
  