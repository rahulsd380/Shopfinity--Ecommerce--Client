import Container from "@/components/shared/Container/Container";
import WishlistHero from "@/components/Wishlist/WishlistHero/WishlistHero";
import WishlistProduct from "@/components/Wishlist/WishlistProduct/WishlistProduct";

const Wishlist = () => {
  return (
    <div>
      <WishlistHero />
      <Container>
        <WishlistProduct/>
      </Container>
    </div>
  );
};

export default Wishlist;
