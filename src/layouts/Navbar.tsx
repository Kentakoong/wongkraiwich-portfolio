"use client";

import { Macintosh } from "@portfolio/components/icons/mode/Macintosh";
import { GitHub } from "@portfolio/components/icons/social/GitHub";
import { LinkedIn } from "@portfolio/components/icons/social/LinkedIn";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twJoin } from "tailwind-merge";

const ThemeSwitcher = dynamic(
  () => import("@portfolio/components/action/ThemeSwitcher"),
  { ssr: false },
);

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="grid items-center justify-center gap-x-10 gap-y-4 px-8 py-2 uppercase md:grid-cols-3">
      <div className="group relative max-md:mx-auto">
        <Link href="/" className="text-lg tracking-wide">
          WONGKRAIWICH CHUENCHOMPHU
        </Link>
        <div className="absolute flex w-full origin-top-left scale-50 gap-x-2 py-2 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100 max-md:hidden">
          {socialLinks.map((link, idx) => (
            <Link key={idx} href={link.href} target="_blank" rel="noopener">
              <link.icon className="size-8 fill-neutral-500 transition-all ease-in-out hover:fill-black dark:hover:fill-white" />
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto flex gap-x-8 font-normal text-neutral-500 transition-all ease-in-out">
        {navLinks.map(({ href, label }, idx) => (
          <Link
            key={idx}
            href={href}
            className={twJoin(
              "group relative inline-block transition-all duration-300 ease-in-out",
              pathname === href
                ? "font-medium text-black hover:opacity-80 dark:text-white"
                : "hover:font-medium hover:text-black dark:hover:text-white",
            )}
          >
            {label}
            <span
              className={twJoin(
                "absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full dark:bg-white",
                pathname === href ? "w-full group-hover:w-0" : "w-0",
              )}
            />
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-x-4 md:justify-end">
        <ThemeSwitcher />
        <button>
          <Macintosh className="size-6 fill-neutral-500 transition-all ease-in-out hover:fill-black dark:hover:fill-white" />
        </button>
      </div>
    </nav>
  );
};

const socialLinks = [
  { href: "https://github.com/kentakoong", label: "GitHub", icon: GitHub },
  {
    href: "https://www.linkedin.com/in/wongkraiwich",
    label: "LinkedIn",
    icon: LinkedIn,
  },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/projects", label: "Projects" },
  { href: "/tools", label: "Tools" },
];
