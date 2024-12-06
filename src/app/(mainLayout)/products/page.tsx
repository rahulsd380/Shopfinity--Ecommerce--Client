
import DetailsTab from "@/components/ProductDetails/DetailsTab/DetailsTab";
import Images from "@/components/ProductDetails/Images/Images";
import ProductDetails from "@/components/ProductDetails/ProductDetails/ProductDetails";
import Container from "@/components/shared/Container/Container";
// import Link from "next/link";

const Products = () => {
  return (
    <Container>
      <div className="mt-10">
        {/* <div>
          <Link href={"/"} className="font-Sora text-xs text-neutral-30/50 hover:underline">Home</Link>
        </div> */}
        <div className="flex flex-col lg:flex-row gap-7">
        <Images/>
        <ProductDetails/>
        </div>
        <DetailsTab/>
      </div>
    </Container>
  );
};

export default Products;
