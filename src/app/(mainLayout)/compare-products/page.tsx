import { IMAGES } from "@/assets";
import CompareProductCard from "@/components/CompareProducts/CompareProductCard/CompareProductCard";
import Banner from "@/components/reusable/Banner/Banner";
import Container from "@/components/shared/Container/Container";

const CompareProducts = () => {
  const compareProducts = [
    {
      _id: "1",
      name: "Sports Shoes",
      description: "High-quality sports shoes for running and athletics.",
      price: 120,
      category: "Footwear",
      brand: "Nike",
      stock: 50,
      images: [IMAGES.product],
      ratings: 4.5,
      reviews: [
        {
          userId: "60c72b2f9b1d8b1f2c3e4b75", // Example ObjectId
          reviewId: "60c72b3a9b1d8b1f2c3e4b76", // Example ObjectId
        },
      ],
      sellerName: "John's Sports Store",
      createdAt: new Date("2024-12-10T14:00:00Z"),
    },
    {
      _id: "2",
      name: "Tennis Racket",
      description: "Professional tennis racket for competitive play.",
      price: 85,
      category: "Sports Equipment",
      brand: "Wilson",
      stock: 30,
      images: [IMAGES.product],
      ratings: 4.7,
      reviews: [
        {
          userId: "60c72b3f9b1d8b1f2c3e4b77", // Example ObjectId
          reviewId: "60c72b409b1d8b1f2c3e4b78", // Example ObjectId
        },
      ],
      sellerName: "Sporty Joe",
      createdAt: new Date("2024-12-09T10:00:00Z"),
    },
    {
      _id: "3",
      name: "Cricket Bat",
      description: "Wooden cricket bat for professional cricket players.",
      price: 150,
      category: "Sports Equipment",
      brand: "Adidas",
      stock: 20,
      images: [IMAGES.product],
      ratings: 4.8,
      reviews: [
        {
          userId: "60c72b479b1d8b1f2c3e4b79",
          reviewId: "60c72b4e9b1d8b1f2c3e4b7a",
        },
      ],
      sellerName: "Cricket Hub",
      createdAt: new Date("2024-12-08T08:00:00Z"),
    },
  ];

  return (
    <Container>
      <Banner
        bgColor="bg-gradient-to-bl from-[#ffe4e6]  to-[#ccfbf1]"
        title={` Compare, Choose, Decide, Win!`}
        description="Easily Compare Features, Prices, and Reviews to Make the Best Choice"
      />

      <div className="mt-[100px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
        {compareProducts.map((product) => (
          <CompareProductCard key={product?._id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default CompareProducts;
