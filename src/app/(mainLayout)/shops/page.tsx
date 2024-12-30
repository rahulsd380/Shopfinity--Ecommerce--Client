import Container from "@/components/shared/Container/Container";
import ShopCard from "@/components/Shops/ShopCard/ShopCard";


const Shops = () => {
    return (
        <Container>
            <h1 className="text-neutral-15 font-Sora text-[40px] md:text-[45px] font-semibold mt-[50px]">
          All Shops You May Follow
        </h1>
        <p className="text-neutral-60 font-Inter font-medium">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus iure ad necessitatibus eaque! Ducimus doloribus enim veniam necessitatibus perspiciatis, quia asperiores molestiae, culpa eos eius numquam iste soluta magnam impedit.
        </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10  mt-8">
                <ShopCard />
            </div>
        </Container>
    );
};

export default Shops;