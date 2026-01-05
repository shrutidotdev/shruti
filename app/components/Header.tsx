"use client"

import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 w-full border-b bg-black text-white backdrop-blur-2xl transition-shadow">
      <div className="mx-auto flex h-full w-full items-center justify-center px-0">
        {/* Logo and Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-auto mx-4 md:mx-0">
          {/* Logo */}
          {/* <Link
            href="/"
            className="font-heading hover:bg-muted flex items-center justify-center gap-2 px-5 text-lg font-semibold leading-none transition"
            tabIndex={-1}
          >
            <svg className="w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 280 280">
              <g clipPath="url(#a)">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="m284.66-4.72 1.107-.997-18.581-16.725L152 81.242V-1.999h-25v80.54L14.814-22.441-3.715-5.764l-.002-.003-.027.029-.023.021.002.002-16.678 18.529L80.54 125H.115v25h83.127L-20.444 265.186l16.726 18.581L126.594 139-3.266-5.265 141 124.595 274.725 4.223 153.405 139l130.312 144.767 16.726-18.581L196.758 150h83.127v-25h-80.426L300.443 12.814 284.66-4.72Zm1.107 290.438L141 155.406-3.767 285.718l18.58 16.725L127 201.459V280h25v-81.241l115.186 103.684 18.581-16.725Z"
                  clipRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h280v280H0z" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-white text-xl font-semibold leading-none">
              <span className="font-mono ">AI</span>hero
            </span>
          </Link> */}

          {/* Divider */}
         

          {/* Navigation Menu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-black text-md tracking-wide">Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2 lg:w-150">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1  rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-white focus-visible:bg-accent focus-visible:text-accent-white"
                          href="/features/ai-powered"
                        >
                          <div className="text-sm font-semibold">AI-Powered</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-white">
                            Advanced AI capabilities to boost your productivity
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-white focus-visible:bg-accent focus-visible:text-accent-white"
                          href="/features/real-time"
                        >
                          <div className="text-sm font-semibold">Real-time</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-white">
                            Instant updates and synchronization
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-white focus-visible:bg-accent focus-visible:text-accent-white"
                          href="/solutions/enterprise"
                        >
                          <div className="text-sm font-semibold">Enterprise</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-white">
                            Scalable solutions for large organizations
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-white focus-visible:bg-accent focus-visible:text-accent-white"
                          href="/solutions/startup"
                        >
                          <div className="text-sm font-semibold">Startup</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-white">
                            Flexible plans for growing teams
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="/pricing"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-white focus-visible:bg-accent focus-visible:text-accent-white focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-transparent data-[state=open]:bg-transparent"
                  >
                    Pricing
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="/docs"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-white focus-visible:bg-accent focus-visible:text-accent-white focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-transparent data-[state=open]:bg-transparent"
                  >
                    Docs
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>    
      </div>
    </header>
  )
}
