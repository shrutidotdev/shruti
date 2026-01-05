import { Project } from "../types/Project"

export const AI_PROJECTS: Project[] = [
  {
    id: "llm-persona-chat",
    title: "LLM Persona Chat",
    description: "Intelligent chat application featuring multiple AI personas (tech educators/YouTubers) with real-time streaming responses powered by OpenAI API.",
    longDescription: "Built an intelligent chat application with multiple AI personas using OpenAI API and Next.js. Features real-time streaming responses for smooth, natural conversations.\n\nImplemented secure authentication system using NextAuth 5.0 for robust user management and session handling.\n\nDesigned modern, intuitive UI with shadcn/ui components for seamless persona selection and chat interface.\n\nOptimized API calls and response handling for minimal latency and excellent user experience.",
    liveLink: "https://llm-persona-chat-demo.vercel.app",
    githubLink: "https://github.com/yourusername/llm-persona-chat",
    video: "llm-persona-chat",
    image: "/images/llm-persona-chat.png",
    tweetUrl: "",
    tags: [
      "TypeScript",
      "Next.js",
      "OpenAI API",
      "TailwindCSS",
      "NextAuth 5.0",
      "shadcn/ui",
      "Vercel AI SDK",
      "Streaming Responses",
      "PostgreSQL",
      "Prisma"
    ],
    featured: true,
    category: "AI/GenAI",
    completedDate: "July 2025"
  }
]


export const CONTENT_TOOLS: Project[] = [
  {
    id: "pov-thumbnail-generator",
    title: "POV Thumbnail Generator",
    description: "Fast POV thumbnail creator with automatic background removal and ready-to-use layouts for content creators.",
    longDescription: "Built a POV thumbnail creator with Next.js that delivers fast, polished thumbnails using automatic background removal and professional, ready-to-use layouts.\n\nIntegrated Clerk authentication and Prisma ORM with PostgreSQL for secure user management and efficient template storage.\n\nImplemented drag-and-drop image uploads with instant previews and reusable POV-style templates to ensure consistent branding for content creators.\n\nOptimized image processing pipeline for quick thumbnail generation without compromising quality.",
    liveLink: "https://pov-thumbnail-gen.vercel.app",
    githubLink: "https://github.com/yourusername/pov-thumbnail-generator",
    video: "pov-thumbnail",
    image: "/images/pov-thumbnail.png",
    tweetUrl: "",
    tags: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Clerk Auth",
      "PostgreSQL",
      "Prisma ORM",
      "Image Processing",
      "Drag & Drop",
      "shadcn/ui"
    ],
    featured: true,
    category: "Content Tools",
    completedDate: "February 2025"
  }
]


export const CLIENT_PROJECTS: Project[] = [
  {
    id: "grow2viral",
    title: "Grow2Viral",
    description: "Performance-optimized website rebuild achieving 97/100 Lighthouse score with modern, responsive design.",
    longDescription: "Developed and rebuilt an existing website with comprehensive performance optimizations achieving an impressive 97/100 Lighthouse performance score.\n\nCollaborated closely with client requirements to deliver a modern, responsive website that meets business objectives and user needs.\n\nImplemented industry best practices for performance optimization, SEO, and exceptional user experience across all devices.\n\nSuccessfully delivered the project within the specified timeline and budget constraints while exceeding quality expectations.",
    liveLink: "https://grow2viral.com",
    githubLink: "",
    video: "grow2viral",
    image: "/images/grow2viral.png",
    tweetUrl: "",
    tags: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Performance Optimization",
      "SEO",
      "Responsive Design",
      "Lighthouse 97/100"
    ],
    featured: true,
    category: "Client Work",
    completedDate: "March 2025",
    isPaidProject: true
  },
  {
    id: "house-of-x",
    title: "House of X",
    description: "Complete website redesign achieving exceptional performance metrics and accessibility standards.",
    longDescription: "Redesigned and rebuilt existing website achieving 97/100 Lighthouse Performance Score, demonstrating mastery in modern web optimization techniques.\n\nEnhanced accessibility score to 88/100, ensuring the website is usable by people with diverse abilities and needs.\n\nAchieved perfect 100/100 score for best practices, implementing industry-standard security and code quality measures.\n\nImplemented comprehensive SEO improvements resulting in 91/100 Lighthouse SEO Score for better search engine visibility and organic reach.",
    liveLink: "https://houseofx.com",
    githubLink: "",
    video: "house-of-x",
    image: "/images/house-of-x.png",
    tweetUrl: "",
    tags: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Performance: 97/100",
      "Accessibility: 88/100",
      "Best Practices: 100/100",
      "SEO: 91/100",
      "Responsive Design"
    ],
    featured: true,
    category: "Client Work",
    completedDate: "December 2024",
    isPaidProject: true
  }
]