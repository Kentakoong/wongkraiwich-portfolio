import { GitHub } from "@portfolio/components/icons/social/GitHub";
import { LinkedIn } from "@portfolio/components/icons/social/LinkedIn";
import Link from "next/link";

export default function ExperiencesPage() {
  return (
    <main>
      <div className="mx-auto mt-20 px-4 text-center">
        <h1 className="font-bold text-5xl sm:text-6xl">It&apos;s Coming...</h1>
        <p className="mx-auto mt-6 max-w-[75%] text-lg sm:text-xl">
          In the meanwhile, you can check out my LinkedIn and GitHub profiles.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-2">
          {socialLinks.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              rel="noopener"
              target="_blank"
            >
              <link.icon className="size-16 fill-neutral-500 transition-all ease-in-out hover:fill-black dark:hover:fill-white" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

const socialLinks = [
  { href: "https://github.com/kentakoong", label: "GitHub", icon: GitHub },
  {
    href: "https://www.linkedin.com/in/wongkraiwich",
    label: "LinkedIn",
    icon: LinkedIn,
  },
];
