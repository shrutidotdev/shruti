"use client";
import Image from "next/image";

const OverlappingCard = () => {
  return (
    <div className="flex flex-row">
    
      <Image
        src={"/shruti.jpg"}
        alt="me"
        width={100}
        height={20}
        className="w-28 h-28 min-[475px]:w-32 min-[475px]:h-32 min-[500px]:w-36 min-[500px]:h-36 grayscale  border border-[#f5f0f0] rounded-md overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_6px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition duration-200 ease-in-out -rotate-10"
      />
    </div>
  );
};

export default OverlappingCard;
