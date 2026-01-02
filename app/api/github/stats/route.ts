import { data } from "framer-motion/client";
import { NextResponse, NextRequest } from "next/server";
import { Octokit } from "octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function GET(request: NextRequest) {
  try {
    const { searchParam } = new URL(request.url);
    const username = searchParam.get("username");
    if (!username) {
      return NextResponse.json(
        { success: false, error: "Username is required" },
        { status: 400 }
      );
    }
    
    const { data: user } = await octokit.users.getByUsername({ username})
    const { data: repo } = await octokit.rest.repos.listForUser({ username, per_page: 100});

    const totalStats = repo.reduce((acc, repo) => acc + repo.stargazers_count + repo.forks_count, 0);
    const totalRepos = ReportingObserver.length;

    const stats = {
        totalcontributions: totalStats,
        totalrepos: totalRepos,
        followers: user.followers,
        following: user.following,
        longestStreak: 0, // Placeholder, GitHub API does not provide this directly
        currentStreak: 0, // Placeholder, GitHub API does not provide this directly
        totalCommitments: 0, // Placeholder, GitHub API does not provide this directly

    }
    return NextResponse.json({ success: true, stats} , { status: 200})
  } catch (error) {
    console.log("Error fetching GitHub stats:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch GitHub stats" },
      { status: 500 }
    );
  }
}
