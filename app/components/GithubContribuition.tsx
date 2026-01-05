"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { GitHubCalendar } from "react-github-calendar"
import { WaveLoader } from "./WaveLoader"
import useCalenderSize from "../hooks/useCalenderSize"
import { Separator } from "@/components/ui/separator"

interface GithubStats {
  totalcontributions: number
  totalrepos: number
  followers: number
  following: number
  longestStreak: number
  currentStreak: number
  totalCommitments: number
}

interface GithubContributionProps {
  username: string
  compact?: boolean
  className?: string
}

const GithubContribution = ({ username, compact, className }: GithubContributionProps) => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [stats, setStats] = useState<GithubStats | null>(null)
  const [loading, setLoading] = useState(false)

  const isCompact = typeof window !== "undefined" && window.innerWidth < 1024
  const { block, margin } = useCalenderSize()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/github?username=${username}`)
        const data = await response.json()

        if (data.success) {
          setStats(data.stats)
        }
      } catch (error) {
        console.error("Error fetching GitHub stats:", error)
      } finally {
        setLoading(false)
      }
    }

    if (mounted) {
      fetchStats()
    }
  }, [username, mounted])

  // GitHub official theme colors
  const theme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  }

  if (!mounted) {
    return <WaveLoader />
  }

  return (
    <div className={`w-full max-w-3xl mx-auto `}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2 sm:p-4  flex flex-col items-center justify-center"
      >
        <div className="flex items-center justify-center gap-4 w-full py-2 mb-4 ">
          <Separator className="flex-10" />
          <h1 className="text-2xl sm:text-xl opacity-30 whitespace-nowrap text-center px-2 italic">Github Contributions</h1>
          <Separator className="flex-1" />
        </div>

        
        <div className="w-full flex justify-center items-center pb-4 overflow-x-auto lg:overflow-x-visible">
          <div className="w-full flex justify-center">
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
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default GithubContribution