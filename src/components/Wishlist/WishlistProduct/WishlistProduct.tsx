import NoProducts from "@/components/NoProducts/NoProducts";
import WishlistProductCard from "./WishlistProductCard";

type TWishlistItem = {
  _id: string;
  name: string;
  image: string;
  price: string;
  brand: string;
  rating: number;
};

type TWishlistProduct = {
  products: TWishlistItem[];
  handleRemoveFromWishlist: (productId: string) => void;
};

const WishlistProduct: React.FC<TWishlistProduct> = ({
  products,
  handleRemoveFromWishlist,
}) => {
  return (
    <div>
      {products?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7 gap-7 mt-[50px]">
          {products.map((product: TWishlistItem) => (
            <WishlistProductCard
              key={product._id}
              {...product}
              handleRemoveFromWishlist={handleRemoveFromWishlist}
            />
          ))}
        </div>
      ) : (
        <NoProducts />
      )}
    </div>
  );
};

export default WishlistProduct;
