"use client";

import { Separator } from "@/components/ui/separator";
import React from "react";
import { motion } from "framer-motion";
import CardGroupDemo from "@/components/shadcn-studio/card/card-15";

const ProjectSection = () => {
  return (
    <div className={`w-full  mx-auto `}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full rounded-lg p-2 sm:p-4 flex flex-col items-center justify-center"
      >
        <div className="flex items-center justify-center gap-4 w-full py-2 mb-4 ">
          <Separator className="flex-1 " />
          <h1 className="text-2xl sm:text-2xl opacity-30 whitespace-nowrap text-center px-2 italic">
            Projects 
          </h1>
          <Separator className="flex-1" />
        </div>

        <div className="w-full max-w-8xl">
        <CardGroupDemo />
      </div>

        {/* project */}
      </motion.div>
    </div>
  );
};

export default ProjectSection;
