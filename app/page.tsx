import Image from "next/image";
import OverlappingCard from "./components/OverlappingCard";
import GithubContribution from "./components/GithubContribuition";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black text-white font-sans dark:bg-black">
      <div className="absolute left-50 top-0 dark:opacity-[0.06] opacity-[0.09] inset-10 w-10 h-full text-white border dark:border-[#ffffff] border-[#ffffff] bg-[repeating-linear-gradient(-45deg,transparent,transparent_2px,currentcolor_2px,currentcolor_3px,transparent_3px,transparent_6px)]"></div>

      {/* bg-stripes absolute bottom-0 left-0 top-0 flex h-full min-h-screen w-2 flex-col sm:w-4 */}

      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between mt-[0.1]  text-white dark:bg-black sm:items-start">
        <Image
          src={"/quote.svg"}
          alt="me"
          width={1000}
          height={1000}
          className="w-full h-auto rounded-b-4xl"
        />

        <OverlappingCard />

        {/* 
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> */}

        <h1 className="text-4xl font-bold py-10">Shruti</h1>
        <div className="w-2.5 h-full  bg-[rgba(231,230,229,0.12)] shadow-[1px_0px_0px_white] z-0"></div>
        <GithubContribution username="shruti" />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1
            className=" text-3xl font-semibold leading-10  tracking-wide
 text-white dark:text-zinc-50"
          >
            Hey 👋🏻 I&apos;m Shruti. I build things that didn&apos;t exist
            yesterday. AI-powered products, full-stack apps, tools that make
            people&apos;s lives easier—I take them from idea to deployment
            without asking for a roadmap. I care about one thing: does it work,
            and do people love it? Everything else is noise.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
        </div>

        <FooterSection />
      </main>
      <div className="absolute bottom-0 right-50 top-0 opacity-[0.10] w-10 h-full border dark:border-[#eee] border-[#ffffff] bg-[repeating-linear-gradient(-45deg,transparent,transparent_2px,currentcolor_2px,currentcolor_3px,transparent_3px,transparent_6px)]"></div>
    </div>
  );
}
