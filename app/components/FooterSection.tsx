"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

export default function FooterSection() {
  const socialLinks = [
    { name: "Twitter", href: "#", icon: "X" },
    { name: "LinkedIn", href: "#", icon: "in" },
    { name: "GitHub", href: "#", icon: "gh" },
  ];

  return (
    <footer className="w-full space-y-8 relative mx-auto max-w-4xl rounded-lg px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Contact Section */}
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Get in Touch</h1>
        <p className="text-zinc-400 text-lg">
          Have a project in mind? Let&apos;s build something amazing together.
        </p>

        {/* Social Links */}
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-label={link.name}
              className="w-8 h-8 rounded-full border border-zinc-600 flex items-center justify-center transition-colors text-xs font-bold"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full p-2 sm:p-4  flex flex-col items-center justify-center"
      >
        <div className="z-0 flex items-center justify-center gap-4 w-full py-2 mb-4 ">
          <Separator className="flex-1" />
          <h1 className="text-2xl font-bold tracking-wider sm:text-xl opacity-30 text-white whitespace-nowrap text-center px-2 italic">
            © 2026 Shruti — Singing off (🎶- spotify)
          </h1>
          <Separator className="flex-1" />
        </div>
      </motion.div>
    </footer>
  );
}
