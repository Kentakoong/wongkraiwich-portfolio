import Image from "next/image";
import Link from "next/link";

import { FlipWords } from "@/components/text/FlipWords";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-screen-2xl space-y-32 px-4">
      <section className="flex h-[75vh] max-h-max grid-cols-2 flex-col items-center gap-y-10 py-16 max-md:text-center md:grid md:max-h-[60rem] lg:py-32">
        <div className="max-w-lg lg:px-4">
          <FlipWords
            className="font-bold text-4xl max-md:text-center sm:text-6xl"
            words={[
              "Software Engineer.",
              "Music Integrations.",
              "Innovator.",
              "DevOps.",
              "Homelabber.",
            ]}
          />
          <h2 className="mt-2 md:text-xl">(pron.) audiophile / tech nerd</h2>
          <p className="mt-4 max-md:px-4 md:text-lg">
            I&apos;m a passionate software engineer driven by the fusion of
            creativity and technology. With expertise in full-stack web
            development, AI solutions, and cloud software deployment, I create
            seamless digital experiences that inspire and engage.
          </p>
        </div>
        <div className="max-md:order-first">
          <Image
            alt="Profile Picture"
            className="mx-auto rounded-full duration-500 max-lg:max-w-48"
            height={400}
            src="/profile.jpg"
            width={400}
          />
        </div>
      </section>
      <section className="mx-auto">
        <div className="mx-auto space-y-2.5 text-center text-neutral-600 max-sm:max-w-80 dark:text-neutral-400">
          <h3 className="font-medium text-xl leading-relaxed md:text-3xl">
            What happens when an Audiophile and Software Engineer
            <br />
          </h3>
          <h2 className="font-bold text-4xl text-black transition max-sm:px-4 md:text-5xl dark:text-white">
            combines into one person?
          </h2>
          <p className="text-lg md:text-xl">i guess that&apos;s me...</p>
        </div>
        <div className="relative mx-auto mt-16 flex max-w-screen-lg justify-center gap-8 max-md:flex-col md:max-lg:h-[40rem]">
          <div className="md:max-lg:trapezoid-effect-x-left top-0 bottom-0 left-32 mx-auto w-full max-w-xs transition-all max-lg:h-[32rem] md:max-lg:absolute md:max-lg:py-8">
            <div className="group relative h-full overflow-hidden rounded-xl bg-white px-4 py-8 text-center text-black shadow-lg transition duration-500 dark:bg-black dark:text-white dark:shadow-none">
              <Image
                alt="Mixr Icon"
                className="mx-auto w-16 rounded-xl shadow-[0_0_0.5rem_0px_rgba(255,255,255,0.5)] transition dark:shadow-none"
                height={128}
                src="/projects/mixr/icon.png"
                width={128}
              />
              <h3 className="mt-2 font-semibold text-2xl duration-75">mixr</h3>
              <p className="mt-1 px-8 leading-tight duration-75">
                Lightweight Virtual Mixer
              </p>
              <Link
                className="mx-auto mt-4 flex w-fit rounded-full bg-black px-4 py-1.5 font-medium text-sm text-white transition dark:bg-white dark:text-black"
                href="https://apps.apple.com/th/app/mixr-virtual-mixer/id6447314232"
                rel="noopener noreferrer"
                target="_blank"
              >
                Download
              </Link>
              <Image
                alt="Mixr Preview"
                className="group-hover:trapezoid-effect-y -bottom-52 group-hover:-bottom-[24rem] absolute right-0 left-0 mx-auto w-56 transform-gpu transition-all duration-[1s] ease-in-out group-hover:w-[26rem]"
                height={1887}
                src="/projects/mixr/preview.png"
                width={932}
              />
            </div>
          </div>
          <div className="group relative z-20 mx-auto max-w-xs overflow-hidden rounded-xl bg-black px-4 py-8 text-center text-white shadow-[0_0_0.5rem_0px_rgba(0,0,0,0.8)] transition duration-[400ms] ease-in-out hover:shadow-[0_0_1.5rem_0px_rgba(0,0,0,0.8)] max-md:order-first md:max-lg:absolute dark:bg-white dark:text-black dark:shadow-[0_0_0.5rem_0px_rgba(255,255,255,0.8)] dark:hover:shadow-[0_0_1.5rem_0px_rgba(255,255,255,0.8)]">
            <p className="mx-auto w-fit rounded-full border border-orange-500 bg-orange-800 px-2.5 py-0.5 font-bold text-xs uppercase transition duration-75 dark:bg-orange-100 dark:text-orange-500">
              Alpha
            </p>
            <Image
              alt="MusicBar Icon"
              className="mx-auto mt-4 w-16 rounded-xl shadow-[0_0_0.5rem_0px_rgba(255,255,255,0.5)] transition dark:shadow-none"
              height={128}
              src="/projects/musicbar/icon.png"
              width={128}
            />
            <h3 className="mt-2 font-semibold text-2xl duration-75">
              MusicBar
            </h3>
            <p className="mt-1 px-8 leading-tight duration-75">
              Easy, Lightweight Status Bar Media Visualizer
            </p>
            <Link
              className="mx-auto mt-4 flex w-fit rounded-full bg-white px-4 py-1.5 font-medium text-black transition dark:bg-black dark:text-white"
              href="https://github.com/inedible-dev/musicbar"
              rel="noopener noreferrer"
              target="_blank"
            >
              View More
            </Link>
            <Image
              alt="Alpha Preview"
              className="-translate-x-24 group-hover:-translate-x-[11.5rem] translate-y-24 scale-[200%] transition-all duration-500 ease-in-out group-hover:translate-y-32 group-hover:scale-[250%]"
              height={1696}
              src="/projects/musicbar/alpha-preview.png"
              width={2574}
            />
          </div>
          <div className="md:max-lg:trapezoid-effect-x-right top-0 right-32 bottom-0 mx-auto w-full max-w-xs transition-all max-lg:h-[32rem] md:max-lg:absolute md:max-lg:py-8">
            <div className="group relative h-full overflow-hidden rounded-xl bg-white px-4 py-8 text-center text-black shadow-lg transition duration-500 dark:bg-black dark:text-white dark:shadow-none">
              <Image
                alt="SiriSings Icon"
                className="mx-auto w-16 rounded-xl shadow-[0_0_0.5rem_0px_rgba(255,255,255,0.5)] transition dark:shadow-none"
                height={128}
                src="/projects/sirisings/icon.png"
                width={128}
              />
              <h3 className="mt-2 font-semibold text-2xl duration-75">
                SiriSings
              </h3>
              <p className="mt-1 px-8 leading-tight duration-75">
                From Speech, to a Singer!
              </p>
              <Link
                className="mx-auto mt-4 flex w-fit rounded-full bg-black px-4 py-1.5 font-medium text-sm text-white transition dark:bg-white dark:text-black"
                href="https://apps.apple.com/th/app/dubdubsings/id6451266026"
                rel="noopener noreferrer"
                target="_blank"
              >
                Download
              </Link>
              <Image
                alt="SiriSings Preview"
                className="group-hover:trapezoid-effect-y -bottom-52 group-hover:-bottom-[24rem] absolute right-0 left-0 mx-auto w-56 transform-gpu transition-all duration-[1s] ease-in-out group-hover:w-[26rem]"
                height={1887}
                src="/projects/sirisings/preview.png"
                width={932}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
