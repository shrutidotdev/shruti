import { NextResponse, NextRequest } from "next/server";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username");
    
    if (!username) {
      return NextResponse.json(
        { success: false, error: "Username is required" },
        { status: 400 }
      );
    }

    // Fetch user data
    const { data: user } = await octokit.users.getByUsername({ 
      username 
    });
    
    // Fetch repositories
    const { data: repos } = await octokit.repos.listForUser({ 
      username, 
      per_page: 100,
      sort: "updated"
    });

    // Calculate total stars and forks
    const totalStats = repos.reduce(
      (acc, repo) => acc + (repo.stargazers_count ?? 0) + (repo.forks_count ?? 0), 
      0
    );
    
    const totalRepos = repos.length;

    const stats = {
      totalcontributions: totalStats,
      totalrepos: totalRepos,
      followers: user.followers,
      following: user.following,
      longestStreak: 0, // Requires GraphQL API for accurate data
      currentStreak: 0, // Requires GraphQL API for accurate data
      totalCommitments: 0, // Requires GraphQL API for accurate data
    };

    return NextResponse.json(
      { success: true, stats }, 
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch GitHub stats" },
      { status: 500 }
    );
  }
}