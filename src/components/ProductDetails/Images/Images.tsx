import { IMAGES } from "@/assets";
import Image from "next/image";

const Images = () => {
    return (
        
        <div className="w-full xl:w-[35%] h-fit">
            <div className="border border-neutral-10/20 rounded-xl p-2 w-full">
        <Image src={IMAGES.img} alt="" className="object-cover"/>
        </div>

        <div className="flex items-center gap-3 mt-3">
        <div className="border border-neutral-10/20 rounded-xl p-2 size-[80px]">
        <Image src={IMAGES.img} alt="" className="object-cover"/>
        </div>
        <div className="border border-neutral-10/20 rounded-xl p-2 size-[80px]">
        <Image src={IMAGES.img} alt="" className="object-cover"/>
        </div>
        <div className="border border-neutral-10/20 rounded-xl p-2 size-[80px]">
        <Image src={IMAGES.img} alt="" className="object-cover"/>
        </div>
        <div className="border border-neutral-10/20 rounded-xl p-2 size-[80px]">
        <Image src={IMAGES.img} alt="" className="object-cover"/>
        </div>
        <div className="border border-neutral-10/20 rounded-xl p-2 size-[80px]">
        <Image src={IMAGES.img} alt="" className="object-cover"/>
        </div>
        </div>
        </div>
    );
};

export default Images;