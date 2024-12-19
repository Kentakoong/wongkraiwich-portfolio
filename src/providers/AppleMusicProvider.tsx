"use client";

import { MarqueeIfNeeded } from "@portfolio/components/Text/MarqueeIfNeeded";
import { env } from "@portfolio/env";
import { useRecentMusic } from "@portfolio/hooks/useRecentMusic";
import { getCookie, setCookie } from "cookies-next";
import Image from "next/image";
import { useEffect } from "react";
import { twJoin } from "tailwind-merge";

export const AppleMusicProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const { recentMusic, setRecentMusic } = useRecentMusic();

  useEffect(() => {
    (async () => {
      const delayUntil = Number(getCookie("apple-music-fetch-delay-until"));

      if (delayUntil && delayUntil > Date.now()) return;

      console.log("fetching");

      const {
        token,
      }: {
        token: string;
      } = await fetch("/api/apple-music/token", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      const res = await fetch(
        "https://api.music.apple.com/v1/me/recent/played/tracks?" +
          new URLSearchParams({
            limit: "1",
          }),
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Music-User-Token": env.NEXT_PUBLIC_APPLE_MUSIC_USER_TOKEN,
          },
        },
      ).then((res) => res.json());

      setRecentMusic(res.data[0]);
      setCookie("apple-music-fetch-delay-until", Date.now() + 30000);
    })();
  }, [setRecentMusic]);

  return (
    <>
      {children}
      <div className="fixed bottom-4 z-20 w-full sm:right-4 sm:max-w-md">
        <div className="w-full overflow-x-auto rounded-xl bg-neutral-200 p-4 drop-shadow-xl transition-all dark:bg-neutral-800">
          <h1 className="text-lg font-semibold transition duration-[50ms]">
            I&apos;m currently listening to...
          </h1>
          <div className={twJoin(!recentMusic && "h-24")}>
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
                <div className="*:animate-marquee flex w-full flex-col overflow-hidden whitespace-nowrap text-lg *:max-w-lg *:transition *:duration-75">
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
    </>
  );
};
