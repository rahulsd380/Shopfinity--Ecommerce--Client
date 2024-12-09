import Banner from "@/components/reusable/Banner/Banner";
import Container from "@/components/shared/Container/Container";
import WishlistProduct from "@/components/Wishlist/WishlistProduct/WishlistProduct";

const Wishlist = () => {
  return (
    <div>
      <Container>
        <Banner
        bgColor="bg-gradient-to-r from-green-100 to-green-300"
          title={` Your Wishlist Products (${10})`}
          description="Your curated collection of desired items, ready for you to explore."
        />
        <WishlistProduct />
      </Container>
    </div>
  );
};

export default Wishlist;
