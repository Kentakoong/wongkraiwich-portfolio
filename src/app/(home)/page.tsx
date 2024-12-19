import { FlipWords } from "@portfolio/components/Text/FlipWords";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-screen-2xl space-y-32 px-4">
      <section className="flex h-[75vh] max-h-max grid-cols-2 flex-col items-center gap-y-10 py-32 max-md:text-center md:grid md:max-h-[60rem]">
        <div className="max-w-lg lg:px-4">
          <FlipWords
            className="text-4xl font-bold max-md:text-center sm:text-6xl"
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
            className="mx-auto rounded-full duration-500 max-lg:max-w-64"
            src="/profile.jpg"
            alt="Profile Picture"
            width={400}
            height={400}
          />
        </div>
      </section>
      <section className="mx-auto">
        <div className="mx-auto space-y-2.5 text-center text-neutral-600 max-sm:max-w-80 dark:text-neutral-400">
          <h3 className="text-xl font-medium leading-relaxed md:text-3xl">
            What happens when an Audiophile and Software Engineer
            <br />
          </h3>
          <h2 className="text-4xl font-bold text-black transition max-sm:px-4 md:text-5xl dark:text-white">
            combines into one person?
          </h2>
          <p className="text-lg md:text-xl">i guess that&apos;s me...</p>
        </div>
        <div className="relative mx-auto mt-16 flex max-w-screen-lg justify-center gap-8 max-md:flex-col md:max-lg:h-[40rem]">
          <div className="md:max-lg:trapezoid-effect-x-left bottom-0 left-32 top-0 mx-auto w-full max-w-xs transition-all max-lg:h-[32rem] md:max-lg:absolute md:max-lg:py-8">
            <div className="group relative h-full overflow-hidden rounded-xl bg-white px-4 py-8 text-center text-black shadow-lg transition duration-500 dark:bg-black dark:text-white dark:shadow-none">
              <Image
                className="mx-auto w-16 rounded-xl shadow-[0_0_0.5rem_0px_rgba(255,255,255,0.5)] transition dark:shadow-none"
                src="/projects/mixr/icon.png"
                alt="Mixr Icon"
                width={128}
                height={128}
              />
              <h3 className="mt-2 text-2xl font-semibold duration-75">mixr</h3>
              <p className="mt-1 px-8 leading-tight duration-75">
                Lightweight Virtual Mixer
              </p>
              <Link
                href="https://apps.apple.com/th/app/mixr-virtual-mixer/id6447314232"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto mt-4 flex w-fit rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white transition dark:bg-white dark:text-black"
              >
                Download
              </Link>
              <Image
                className="group-hover:trapezoid-effect-y absolute -bottom-52 left-0 right-0 mx-auto w-56 transform-gpu transition-all duration-[1s] ease-in-out group-hover:-bottom-[24rem] group-hover:w-[26rem]"
                src="/projects/mixr/preview.png"
                alt="Mixr Preview"
                width={932}
                height={1887}
              />
            </div>
          </div>
          <div className="group relative z-20 mx-auto max-w-xs overflow-hidden rounded-xl bg-black px-4 py-8 text-center text-white shadow-[0_0_0.5rem_0px_rgba(0,0,0,0.8)] transition duration-[400ms] ease-in-out hover:shadow-[0_0_1.5rem_0px_rgba(0,0,0,0.8)] max-md:order-first md:max-lg:absolute dark:bg-white dark:text-black dark:shadow-[0_0_0.5rem_0px_rgba(255,255,255,0.8)] dark:hover:shadow-[0_0_1.5rem_0px_rgba(255,255,255,0.8)]">
            <p className="mx-auto w-fit rounded-full border border-orange-500 bg-orange-800 px-2.5 py-0.5 text-xs font-bold uppercase transition duration-75 dark:bg-orange-100 dark:text-orange-500">
              Alpha
            </p>
            <Image
              className="mx-auto mt-4 w-16 rounded-xl shadow-[0_0_0.5rem_0px_rgba(255,255,255,0.5)] transition dark:shadow-none"
              src="/projects/musicbar/icon.png"
              alt="MusicBar Icon"
              width={128}
              height={128}
            />
            <h3 className="mt-2 text-2xl font-semibold duration-75">
              MusicBar
            </h3>
            <p className="mt-1 px-8 leading-tight duration-75">
              Easy, Lightweight Status Bar Media Visualizer
            </p>
            <Link
              href="https://github.com/inedible-dev/musicbar"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-4 flex w-fit rounded-full bg-white px-4 py-1.5 font-medium text-black transition dark:bg-black dark:text-white"
            >
              View More
            </Link>
            <Image
              className="-translate-x-24 translate-y-24 scale-[200%] transition-all duration-500 ease-in-out group-hover:-translate-x-[11.5rem] group-hover:translate-y-32 group-hover:scale-[250%]"
              src="/projects/musicbar/alpha-preview.png"
              alt="Alpha Preview"
              width={2574}
              height={1696}
            />
          </div>
          <div className="md:max-lg:trapezoid-effect-x-right bottom-0 right-32 top-0 mx-auto w-full max-w-xs transition-all max-lg:h-[32rem] md:max-lg:absolute md:max-lg:py-8">
            <div className="group relative h-full overflow-hidden rounded-xl bg-white px-4 py-8 text-center text-black shadow-lg transition duration-500 dark:bg-black dark:text-white dark:shadow-none">
              <Image
                className="mx-auto w-16 rounded-xl shadow-[0_0_0.5rem_0px_rgba(255,255,255,0.5)] transition dark:shadow-none"
                src="/projects/sirisings/icon.png"
                alt="SiriSings Icon"
                width={128}
                height={128}
              />
              <h3 className="mt-2 text-2xl font-semibold duration-75">
                SiriSings
              </h3>
              <p className="mt-1 px-8 leading-tight duration-75">
                From Speech, to a Singer!
              </p>
              <Link
                href="https://apps.apple.com/th/app/dubdubsings/id6451266026"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto mt-4 flex w-fit rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white transition dark:bg-white dark:text-black"
              >
                Download
              </Link>
              <Image
                className="group-hover:trapezoid-effect-y absolute -bottom-52 left-0 right-0 mx-auto w-56 transform-gpu transition-all duration-[1s] ease-in-out group-hover:-bottom-[24rem] group-hover:w-[26rem]"
                src="/projects/sirisings/preview.png"
                alt="SiriSings Preview"
                width={932}
                height={1887}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
