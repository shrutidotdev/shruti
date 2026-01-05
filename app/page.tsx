import Image from "next/image";
import OverlappingCard from "./components/OverlappingCard";
import GithubContribution from "./components/GithubContribuition";
import FooterSection from "./components/FooterSection";
import ProjectSection from "./components/ProjectSection";
import Link from "next/link";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className=" min-h-screen w-full bg-black text-white font-sans overflow-hidden">
      <div className="relative mx-auto max-w-4xl">
       <div className="absolute inset-0 opacity-[0.18] bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(255,255,255,0.4)_2px,rgba(255,255,255,0.4)_3px,transparent_3px,transparent_6px)]" />
      <div className="absolute inset-0 opacity-[0.14] bg-[repeating-linear-gradient(-45deg,transparent,transparent_2px,rgba(255,255,255,0.35)_2px,rgba(255,255,255,0.35)_3px,transparent_3px,transparent_6px)]" />

      {/* Noise texture overlay - ENHANCED for texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 result=%22noise%22/></filter><rect width=%22100%22 height=%22100%22 filter=%22url(%23noise)%22 opacity=%220.35%22/></svg>')",
          backgroundSize: "100px 100px",
        }}
      />

        <Header />

        <main className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Image
            src={"/quote.svg"}
            alt="quote"
            width={1000}
            height={1000}
            className="w-full h-auto rounded-b-4xl mb-2 sm:mb-10 object-cover object-top"
          />

          <div className="border-t-0 b">
            <Link href="/about" className="text-white text-3xl hover:text-zinc-400">
              About
            </Link>
          </div>

          <div className="flex justify-center mb-8 sm:mb-10">
            <OverlappingCard />
          </div>

          <div className="w-full mb-12 sm:mb-16">
            <div className="lg:-mx-24 xl:-mx-32">
              <GithubContribution username="shrutidotdev" />
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
            <p className="text-lg sm:text-xl leading-relaxed text-white">
              <span className="font-semibold font-">
                I build things that didn&apos;t exist yesterday.
              </span>{" "}
              AI-powered products, full-stack apps, tools that make
              people&apos;s lives easier—I take them from idea to deployment
              without asking for a roadmap.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-zinc-400">
              I care about one thing: does it work, and do people love it?
              Everything else is noise. From frontend to backend to deployment,
              I work across the entire stack and deliver results that matter.
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

          <div className="w-full flex justify-center">
            <div className="w-full max-w-6xl px-4">
              <ProjectSection />
            </div>
          </div>

          <div className="h-px bg-zinc-800 mb-12 sm:mb-16 mt-12 sm:mt-16"></div>

          <FooterSection />
        </main>
      </div>
    </div>
  );
}
