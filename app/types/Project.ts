export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    liveLink: string;
    githubLink: string;
    video: string;
    image: string;
    tweetUrl: string;
    tags: string[];
    featured: boolean;
    category: string;
    completedDate: string;
}