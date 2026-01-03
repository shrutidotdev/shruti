"use client";
import Image from "next/image";

const OverlappingCard = () => {
  return (
    
    <div className="flex flex-row relative items-center justify-center -mt-10 inset-0">
      {/* <div className="absolute ">
        
      </div> */}
      <Image
        src={"/shruti.jpg"}
        alt="me"
        width={100}
        height={20}
        className="w-28 h-28 min-[475px]:w-32 min-[475px]:h-32 min-[500px]:w-36 min-[500px]:h-36   border border-[#f5f0f0] rounded-md overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.09)]  hover:shadow-none hover:-translate-y-1 hover:rotate-0 transition duration-200 ease-in-out -rotate-10"
      />
    </div>
  );
};

export default OverlappingCard;
