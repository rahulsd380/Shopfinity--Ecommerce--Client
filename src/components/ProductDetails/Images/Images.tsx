import { IMAGES } from "@/assets";
import Image from "next/image";

const Images = () => {
    return (
        <div className="flex gap-5">
        {/* Verical images */}
        <div className="flex flex-col gap-5">
        <div className="border border-neutral-10/20 rounded-xl p-2 size-[160px]">
        <Image src={IMAGES.img} alt="" className="size-[160px] object-cover"/>
        </div>
        <div className="border border-neutral-10/20 rounded-xl p-2 size-[160px]">
        <Image src={IMAGES.img} alt="" className="size-[160px] object-cover"/>
        </div>
        <div className="border border-neutral-10/20 rounded-xl p-2 size-[160px]">
        <Image src={IMAGES.img} alt="" className="size-[160px] object-cover"/>
        </div>
        </div>

        {/* Main image */}
        <div className="border border-neutral-10/20 rounded-xl p-2 size-[520px]">
        <Image src={IMAGES.img} alt="" className="size-[520px] object-cover"/>
        </div>
      </div>
    );
};

export default Images;