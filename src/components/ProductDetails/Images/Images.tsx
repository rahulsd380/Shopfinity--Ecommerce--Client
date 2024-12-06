import { IMAGES } from "@/assets";
import Image from "next/image";

const Images = () => {
    return (
        
        <div className="border border-neutral-10/20 rounded-xl p-2 w-[50%]">
        <Image src={IMAGES.img} alt="" className="object-cover"/>
        </div>
    );
};

export default Images;