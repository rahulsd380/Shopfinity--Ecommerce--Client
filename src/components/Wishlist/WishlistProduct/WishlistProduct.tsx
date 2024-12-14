import WishlistProductCard from "./WishlistProductCard";

type TWishlistItem= {
  _id: string;
  name: string;
  image: string;
  price: string;
  brand: string;
  rating: number;
}

type TWishlistProduct = {
  products : TWishlistItem[];
  handleRemoveFromWishlist : (productId: string) => void
}
const WishlistProduct:React.FC<TWishlistProduct> = ({products, handleRemoveFromWishlist}) => {
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7 gap-7 mt-[50px]">
      {products?.length > 0 ? (
        products?.map((product:TWishlistItem) => (
          <WishlistProductCard key={product._id} {...product} handleRemoveFromWishlist={handleRemoveFromWishlist} />
        ))
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default WishlistProduct;
