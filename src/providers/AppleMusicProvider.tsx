"use client";

import { env } from "@portfolio/env";
import { useRecentMusic } from "@portfolio/hooks/useRecentMusic";
import { getCookie, setCookie } from "cookies-next";
import { useEffect } from "react";

export const AppleMusicProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const { setRecentMusic } = useRecentMusic();

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

  return children;
};
