import DetailsTab from "@/components/ProductDetails/DetailsTab/DetailsTab";
import Images from "@/components/ProductDetails/Images/Images";
import ProductDetails from "@/components/ProductDetails/ProductDetails/ProductDetails";
import SellerCard from "@/components/ProductDetails/SellerCard/SellerCard";
import Container from "@/components/shared/Container/Container";

const page = () => {
  return (
    <Container>
      <div className="mt-10">
        {/* <div>
          <Link href={"/"} className="font-Sora text-xs text-neutral-30/50 hover:underline">Home</Link>
        </div> */}
        <div className="flex flex-col lg:flex-row gap-7 bg-white border border-neutral-45 rounded-lg p-5">
          <Images />
          <ProductDetails />
          <SellerCard/>
        </div>
        <DetailsTab />
      </div>
    </Container>
  );
};

export default page;
