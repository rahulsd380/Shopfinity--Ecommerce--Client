import { IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container/Container";

const Navbar = () => {
  return (
    <Container>
      <div>
        <Link href={"/"} className="flex items-center gap-3">
          <Image src={IMAGES.logo} alt="shopfinity" className="w-20" />
          <div>
            <h1 className="text-primary-10 font-Sora text-2xl font-bold">
              Shopfinity
            </h1>
            <h1 className="text-neutral-20 font-Inter text-xs">
              Find - Pick and Shop.
            </h1>
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default Navbar;
