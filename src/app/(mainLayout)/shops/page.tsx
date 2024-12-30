import Container from "@/components/shared/Container/Container";
import ShopCard from "@/components/Shops/ShopCard/ShopCard";


const Shops = () => {
    return (
        <Container>
            <h1 className="text-neutral-15 font-Sora text-[40px] md:text-[45px] font-semibold mt-9">
          All Shops You <span className="text-primary-10">May Follow</span>
        </h1>
        <p className="text-neutral-60 font-Inter font-medium max-w-[1000px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus iure ad necessitatibus eaque! Ducimus doloribus enim veniam necessitatibus perspiciatis, quia asperiores molestiae, culpa eos eius numquam iste soluta magnam impedit.
        </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  mt-10">
                <ShopCard />
            </div>
        </Container>
    );
};

export default Shops;