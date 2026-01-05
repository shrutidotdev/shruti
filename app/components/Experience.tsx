"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  logo: string;
  description: string;
  skills: string[];
  expanded?: boolean;
}

const experiences: Experience[] = [
  {
    id: "1",
    company: "Grow2Viral",
    position: "Full stack developer",
    period: "March 2025 – May 2025",
    logo: "https://via.placeholder.com/48?text=ML",
    description: "Developed whole website.",
    skills: ["NextJs", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
];

export function ProfessionalExperience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 w-full py-2 mb-4 ">
          <Separator className="flex-1" />
          <h1 className="text-2xl sm:text-2xl  whitespace-nowrap text-center px-2 italic">
            Professional Experience
          </h1>
          <Separator className="flex-1" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-4 cursor-pointer">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group  bg-black border border-zinc-700 rounded-lg  transition-all duration-300 overflow-hidden"
            >
              {/* Card Header */}
              <button
                onClick={() => toggleExpand(exp.id)}
                className="w-full p-5 sm:p-6 flex items-center gap-4  transition-colors"
              >
                {/* Company Logo */}
                {/* <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-muted border border-border flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-black/20 to-black/10 flex items-center justify-center text-sm font-semibold text-black">
                    {exp.company.charAt(0)}
                  </div>
                </div> */}

                {/* Company Info */}
                <div className="flex-1 text-left min-w-0">
                  <h3 className="text-md sm:text-lg font-semibold text-white">
                    {exp.company}
                  </h3>
                  <p className="text-md sm:text-lg text-white ">
                    {exp.position}
                  </p>
                </div>

                {/* Right Section */}
                <div className="shrink-0 text-right flex flex-col sm:flex-row sm:items-center sm:gap-4">
                  <span className="text-md sm:text-sm text-white font-lora italic">
                    {exp.period}
                  </span>
                  {/* <ChevronDown
                    className={`w-5 h-5 text-muted-white transition-transform duration-300 ${
                      expandedId === exp.id ? "rotate-180" : ""
                    }`}
                  /> */}
                </div>
              </button>

              {/* Expanded Details */}
              {/* {expandedId === exp.id && (
                <div className="border-t border-border bg-black px-5 sm:px-6 py-4 sm:py-5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-black/10 text-black text-xs sm:text-sm font-medium border border-black/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )} */}
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm sm:text-base text-muted-white mb-4">
            Want to learn more about my work?
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-black text-black-white font-medium hover:bg-black/90 transition-colors"
          >
            View Full Resume
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
