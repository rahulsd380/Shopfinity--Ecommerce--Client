import Banner from "@/components/reusable/Banner/Banner";
import Container from "@/components/shared/Container/Container";

const CompareProducts = () => {
  return (
    <Container>
      <Banner
      bgColor="bg-gradient-to-bl from-[#ffe4e6]  to-[#ccfbf1]"
        title={` Compare, Choose, Decide, Win!`}
        description="Easily Compare Features, Prices, and Reviews to Make the Best Choice"
      />
    </Container>
  );
};

export default CompareProducts;
