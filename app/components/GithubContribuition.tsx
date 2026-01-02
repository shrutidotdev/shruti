"use client";

import useTheme from "next-theme";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


interface GithubContribuitionProps {
  username: string;
  compact?: boolean;
  className?: string;
}

const GithubContribuition = ({
  username,
  compact,
  className,
}: GithubContribuitionProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setmounted] = useState(false);

  useEffect(() => {
    setmounted(true);
  },[]);
//   Github official 
const theme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"], 
}
if(!mounted) {
    return (
        <div className={ `w-full ${compact ? 'h-30' : 'h-40'} 
        rounded-xl bg-muted animate-pulse`} />
    )
}
  return <div>
    <motion.div
    className="w-full overflow-hidden rounded-xl bg-transparent backdrop-blur-none border-0 hover:shadow-sm transition-shadow duration-300"
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{ duration: 0.5}}
    >
        <div></div>

    </motion.div>
  </div>;
};

export default GithubContribuition;
