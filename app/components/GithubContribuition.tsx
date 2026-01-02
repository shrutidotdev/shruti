"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { WaveLoader } from "./WaveLoader";
import useCalenderSize from '../../app/hooks/useCalenderSize';

interface GithubStats {
  totalcontributions: number;
  totalrepos: number;
  followers: number;
  following: number;
  longestStreak: number;
  currentStreak: number;
  totalCommitments: number;
}

interface GithubContributionProps {
  username: string;
  compact?: boolean;
  className?: string;
}

const GithubContribution = ({
  username,
  compact,
  className,
}: GithubContributionProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [stats, setStats] = useState<GithubStats | null>(null);
  const [loading, setLoading] = useState(false);

  const isCompact = typeof window !== "undefined" && window.innerWidth < 1024;
  const { block , margin } = useCalenderSize();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/github?username=${username}`);
        const data = await response.json();

        if (data.success) {
          setStats(data.stats);
        }
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      } finally {
        setLoading(false);
      }
    };

    if (mounted) {
      fetchStats();
    }
  }, [username, mounted]);

  // GitHub official theme colors
  const theme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  if (!mounted) {
    return (
      <WaveLoader />
    );
  }

  return (
    <div className={className}>
        {loading && <WaveLoader />}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className=" mb-10 mr-10"
      >
        <GitHubCalendar
          username={username}
          blockSize={block}
          blockMargin={margin}
          theme={{
            light: theme.light,
            dark: theme.dark,
          }}
          colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
        />
     
      </motion.div>
    </div>
  );
};

export default GithubContribution;
