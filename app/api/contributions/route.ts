import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_CLASSIC_TOKEN;

  const query = `
    query($username: String!) {
    user(login: $username) {
        contributionsCollection {
        contributionCalendar {
            totalContributions{
                week {
                    contributionDays {
                    contributionCount
                        date
                        weekday
                    }
                }
            }}
    }}
    `;
  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query,
        variables: { username: username },
      }),
    });

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
