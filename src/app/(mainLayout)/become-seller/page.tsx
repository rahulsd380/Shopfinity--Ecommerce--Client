import { IMAGES } from "@/assets";
import SellerApplyForm from "@/components/BecomeASeller/SellerApplyForm/SellerApplyForm";
import Banner from "@/components/reusable/Banner/Banner";
import Container from "@/components/shared/Container/Container";
import Image from "next/image";

const BecomeASeller = () => {
  return (
    <Container>
      <Banner
        bgColor="bg-gradient-to-bl from-[#ffe4e6]  to-[#ccfbf1]"
        title={`Join Us Today!`}
        description="Discover Opportunities, Connect, Grow – Start Your Journey Today!"
      />
      <div className="mt-14 flex flex-col lg:flex-row gap-8 w-full">
        <div className=" w-full lg:w-[30%] h-full">
          {/* Left side container */}
          {/* <div className="bg-neutral-55 p-5 rounded-xl h-[490px]">
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
          </div> */}

          <div className="group hidden lg:block relative w-full overflow-hidden bg-gradient-to-r bg-gradient-to-r from-green-400 to-teal-600 px-6 py-6 text-white shadow rounded-xl">
            <span className="absolute left-[-40%] top-[30%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-emerald-500 to-lime-600 duration-300 group-hover:top-[-30%] group-hover:blur-sm"></span>
            <span className="absolute right-[-40%] top-[-40%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-teal-400 to-green-500 duration-300 group-hover:top-[40%] group-hover:blur-sm"></span>
            <div className="relative z-20 space-y-6">
              <h1 className="text-2xl font-bold">Have any queries?</h1>
              <p>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                atque natus reprehenderit quis deserunt voluptatibus, nam
                officiis cum beatae impedit ipsam cupiditate porro quidem
                assumenda fuga.
                <a href="#" className="border-b">
                  {" "}
                  What for?
                </a>
              </p>
              <button className="bg-primary-10 rounded px-6 py-2">
                Got it!
              </button>
            </div>
          </div>
        </div>

        {/* Right side container */}
        <div className="bg-neutral-55 rounded-xl w-full lg:w-[70%] max-h-full xl:max-h-[800px] overflow-y-auto">
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
