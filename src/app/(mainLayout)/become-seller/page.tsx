import { IMAGES } from "@/assets";
import SellerApplyForm from "@/components/BecomeASeller/SellerApplyForm/SellerApplyForm";
import Container from "@/components/shared/Container/Container";
import Image from "next/image";

const BecomeASeller = () => {
  return (
    <Container>
      <div className="mt-14 flex flex-col lg:flex-row gap-8 w-full">
        {/* Left side container */}
        <div className="bg-neutral-55 p-5 rounded-xl w-full lg:w-[30%] max-h-[500px]">
          {/* Shop logo */}
          <div className="size-28 rounded-full border border-neutral-45 p-1 flex items-center justify-center">
            <Image src={IMAGES.logo} alt="" className="size-24" />
          </div>
          <h1 className="text-neutral-10 text-2xl font-semibold font-Sora mt-4">
            The Grocery Hunt
          </h1>
          <p className="font-Inter text-neutral-10 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
            nemo.
          </p>
        </div>

        {/* Right side container */}
        <div className="bg-neutral-55 rounded-xl w-full lg:w-[70%] max-h-[800px] overflow-y-auto">
          <Image
            src={IMAGES.bgImg}
            alt="bg-img"
            className="w-full max-h-[200px] object-cover rounded-t-xl"
          />
          <SellerApplyForm />
        </div>
      </div>
    </Container>
  );
};

export default BecomeASeller;
