import { IMAGES } from "@/assets";
import Container from "@/components/shared/Container/Container";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import Image from "next/image";
import { ReactNode } from "react";
import { Toaster } from "sonner";

type TAuthLayoutProps = {
  children: ReactNode;
};
const AuthLayout: React.FC<TAuthLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container>
        <div className="mt-16 flex flex-col-reverse xl:flex-row items-center gap-10 w-full">
          <div className="bg-gradient-to-br from-[#14b8a6] via-primary-10 to-[#57811f] w-full xl:w-[65%] h-screen rounded-3xl flex items-center flex-row-reverse px-5">
            <div className="size-96 rounded-full bg-primary-20/10">
              <Image
                src={IMAGES.modelVector}
                alt="shopfinity"
                className="w-[400px] h-[500px]"
              />
            </div>
            <Image
              src={IMAGES.text}
              alt="text"
              className="size-80 opacity-45"
            />
          </div>

          <div className="w-full md:w-[50%] lg:w-[35%]">
            {children}
          </div>
        </div>
      </Container>

      <Footer />
      <Toaster position="top-center" richColors/>
    </div>
  );
};

export default AuthLayout;
