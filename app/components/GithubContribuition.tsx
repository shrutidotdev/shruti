"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {GitHubCalendar} from "react-github-calendar";

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
  const [loading, setLoading] = useState(true);

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
      <div className={`flex justify-center items-center p-8 ${className}`}>
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        {/* Stats Display */}
        {loading ? (
          <div className="animate-pulse">Loading stats...</div>
        ) : stats ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
              <div className="text-2xl font-bold">{stats.totalrepos}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Repositories</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
              <div className="text-2xl font-bold">{stats.totalcontributions}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Stars + Forks</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
              <div className="text-2xl font-bold">{stats.followers}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Followers</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
              <div className="text-2xl font-bold">{stats.following}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Following</div>
            </div>
          </div>
        ) : null}

        {/* GitHub Contribution Calendar */}
        <div className="github-calendar-container">
          <GitHubCalendar
            username={username}
            blockSize={compact ? 12 : 15}
            blockMargin={compact ? 2 : 5}
            theme={{
              light: theme.light,
              dark: theme.dark,
            }}
            colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default GithubContribution;