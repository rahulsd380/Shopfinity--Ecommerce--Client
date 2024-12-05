
import Images from "@/components/ProductDetails/Images/Images";
import ProductDetails from "@/components/ProductDetails/ProductDetails/ProductDetails";
import Container from "@/components/shared/Container/Container";

const Products = () => {
  return (
    <Container>
      <div className="mt-10">
        <div className="flex gap-7">
        <Images/>
        <ProductDetails/>
        </div>
      </div>
    </Container>
  );
};

export default Products;
