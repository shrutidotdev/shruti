import Image from "next/image";
import OverlappingCard from "./components/OverlappingCard";
import GithubContribution from "./components/GithubContribuition";
import FooterSection from "./components/FooterSection";
import Pattern from "./components/Pattern";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black max-w-300 w-full text-white font-sans overflow-hidden">
  {/* Left stripe pattern - fixed */}
  <div className="fixed left-0 top-0 w-80 h-full opacity-[0.09] text-white border-r border-[#ffffff] bg-[repeating-linear-gradient(-45deg,transparent,transparent_2px,currentcolor_2px,currentcolor_3px,transparent_3px,transparent_6px)]"></div>

  {/* Right stripe pattern - fixed */}
  <div className="fixed right-0 top-0 w-80 h-full opacity-[0.09] text-white border-l border-[#ffffff] bg-[repeating-linear-gradient(-45deg,transparent,transparent_2px,currentcolor_2px,currentcolor_3px,transparent_3px,transparent_6px)]"></div>

    {/* rest of your content */}

      <main className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Image
          src={"/quote.svg"}
          alt="quote"
          width={1000}
          height={1000}
          className="w-full h-auto rounded-b-4xl mb-2 sm:mb-10 object-cover object-top"
        />

        <div className="flex justify-center mb-8 sm:mb-10">
          <OverlappingCard />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 tracking-tight">
          Shruti
        </h1>

        <div className="w-full mb-12 sm:mb-16">
          <div className="lg:-mx-24 xl:-mx-32">
            <GithubContribution username="shruti" />
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
          <p className="text-lg sm:text-xl leading-relaxed text-white">
            <span className="font-semibold">
              I build things that didn&apos;t exist yesterday.
            </span>{" "}
            AI-powered products, full-stack apps, tools that make people&apos;s
            lives easier—I take them from idea to deployment without asking for
            a roadmap.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-400">
            I care about one thing: does it work, and do people love it?
            Everything else is noise. From frontend to backend to deployment, I
            work across the entire stack and deliver results that matter.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-16">
          <a
            href="#contact"
            className="flex h-11 items-center justify-center rounded-lg bg-white text-black font-medium hover:bg-zinc-100 transition-colors px-6"
          >
            Get in Touch
          </a>
          <a
            href="#work"
            className="flex h-11 items-center justify-center rounded-lg border border-zinc-600 hover:border-zinc-400 transition-colors px-6 font-medium"
          >
            View Work
          </a>
        </div>

        <ProjectSection />

        <div className="h-px bg-zinc-800 mb-12 sm:mb-16"></div>

        <FooterSection />
      </main>
    </div>
  );
}
