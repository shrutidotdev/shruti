"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const OverlappingCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col md:flex-row gap-8 md:gap-16  justify-between"
    >
      <div className=" items-center justify-between">
        {/* <div className="absolute ">
        
      </div> */}
        <Image
          src={"/shruti.jpg"}
          alt="me"
          width={100}
          height={20}
          className="w-28 h-28 min-[475px]:w-32 min-[475px]:h-32 min-[500px]:w-36 min-[500px]:h-36 border border-[#f5f0f0] rounded-md overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.09)]  hover:shadow-none hover:-translate-y-1 hover:rotate-0 transition duration-200 ease-in-out -rotate-10  "
        />
        <div className="flex flex-col items-start justify-center ml-4 border border-dotted border-white/20 px-4 py-2 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.09)]  hover:shadow-none hover:translate-y-1 hover:rotate-0 transition duration-200 ease-in-out rotate-6 bg-black">
          <h1 className="italic text-2xl sm:text-4xl tracking-[0.01em] font-medium mb-0">
            Shruti
          </h1>
          <p className="opacity-40 text-xs sm:text-sm">
            23 • engineer • developer • builder
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default OverlappingCard;
