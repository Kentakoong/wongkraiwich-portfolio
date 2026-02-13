"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { twJoin } from "tailwind-merge";

import { MarqueeIfNeeded } from "@/components/text/MarqueeIfNeeded";
import { BackendRoutes } from "@/constants/routes/Backend";
import { axios } from "@/lib/axios";

export const AppleMusicProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const { data: recentMusic } = useQuery({
    queryKey: [BackendRoutes.GET_MUSIC_CURRENTLY_PLAYING],
    queryFn: async () =>
      await axios
        .get<{ data: Array<Song> }>(BackendRoutes.GET_MUSIC_CURRENTLY_PLAYING)
        .then((res) => res.data.data[0]),
  });

  return (
    <>
      {children}
      {recentMusic && (
        <div className="fixed bottom-4 z-20 w-full max-sm:px-4 sm:right-4 sm:max-w-md">
          <div className="w-full overflow-x-auto rounded-xl bg-neutral-200 px-4 py-2 drop-shadow-xl transition-all sm:p-4 dark:bg-neutral-800">
            <h1 className="font-semibold transition duration-[50ms] sm:text-lg">
              I&apos;m currently listening to...
            </h1>
            <div className={twJoin(!recentMusic && "h-24")}>
              {recentMusic && (
                <div className="mt-3 flex gap-x-2">
                  <Image
                    alt="Album artwork"
                    className="flex-shrink-0 rounded-lg"
                    height={80}
                    src={recentMusic?.attributes.artwork.url
                      .replace("{w}", "240")
                      .replace("{h}", "240")}
                    width={80}
                  />
                  <div className="flex w-full flex-col overflow-hidden whitespace-nowrap *:max-w-lg *:animate-marquee *:transition *:duration-75 sm:text-lg">
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
      )}
    </>
  );
};
