"use client";

import { MarqueeIfNeeded } from "@portfolio/components/Text/MarqueeIfNeeded";
import { useRecentMusic } from "@portfolio/hooks/useRecentMusic";
import Image from "next/image";
import { twJoin } from "tailwind-merge";

export const CurrentMusic = () => {
  const { recentMusic } = useRecentMusic();

  return (
    <div className="absolute bottom-12 w-full px-4 sm:right-6 sm:max-w-md">
      <div className="w-full overflow-x-auto rounded-xl bg-neutral-200 p-4 drop-shadow-xl transition-all dark:bg-neutral-800">
        <h1 className="text-lg font-semibold">
          I&apos;m currently listening to...
        </h1>
        <div className={twJoin(!recentMusic && "h-20 animate-pulse")}>
          {recentMusic && (
            <div className="mt-3 flex gap-x-2">
              <Image
                className="flex-shrink-0 rounded-lg"
                src={recentMusic?.attributes.artwork.url
                  .replace("{w}", "240")
                  .replace("{h}", "240")}
                alt="Album artwork"
                width={80}
                height={80}
              />
              <div className="*:animate-marquee flex w-full flex-col overflow-hidden whitespace-nowrap text-lg *:max-w-lg">
                <MarqueeIfNeeded
                  className="font-bold"
                  text={recentMusic.attributes.name}
                />
                <MarqueeIfNeeded text={recentMusic.attributes.artistName} />
                <MarqueeIfNeeded text={recentMusic.attributes.albumName} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
