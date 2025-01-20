"use client";

import { MarqueeIfNeeded } from "@portfolio/components/Text/MarqueeIfNeeded";
import { BackendRoutes } from "@portfolio/constants/routes/Backend";
import { axios } from "@portfolio/lib/axios";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { twJoin } from "tailwind-merge";

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
      <div className="fixed bottom-4 z-20 w-full max-sm:px-4 sm:right-4 sm:max-w-md">
        <div className="w-full overflow-x-auto rounded-xl bg-neutral-200 px-4 py-2 drop-shadow-xl transition-all sm:p-4 dark:bg-neutral-800">
          <h1 className="font-semibold transition duration-[50ms] sm:text-lg">
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
                <div className="*:animate-marquee flex w-full flex-col overflow-hidden whitespace-nowrap *:max-w-lg *:transition *:duration-75 sm:text-lg">
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
