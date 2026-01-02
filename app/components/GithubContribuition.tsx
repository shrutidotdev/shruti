"use client";

import useTheme from "next-theme";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";

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
  }, []);
  //   Github official
  const theme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };
  if (!mounted) {
    return (
      <div
        className={`w-full ${compact ? "h-30" : "h-40"} 
        rounded-xl bg-muted animate-pulse`}
      />
    );
  }
  return (
    <div>
      <motion.div
        className="w-full overflow-hidden rounded-xl bg-transparent backdrop-blur-none border-0 hover:shadow-sm transition-shadow duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`${
            compact ? "p-2" : "p-4"
          } hover:scale-95 transition-transform duration-200`}
        >
          <GitHubCalendar
            username={username}
            colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
            fontSize={compact ? 14 : 12}
            blockMargin={compact ? 2 : 4}
            showWeekdayLabels={!compact}
            theme={theme}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default GithubContribuition;
