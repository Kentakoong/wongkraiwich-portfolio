"use client";

import { env } from "@portfolio/env";
import { useRecentMusic } from "@portfolio/hooks/useRecentMusic";
import { useEffect } from "react";

export const AppleMusicProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const { setRecentMusic } = useRecentMusic();

  useEffect(() => {
    (async () => {
      const tokenRes: {
        token: string;
        exp: number;
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
            Authorization: `Bearer ${tokenRes.token}`,
            "Music-User-Token": env.NEXT_PUBLIC_APPLE_MUSIC_USER_TOKEN,
          },
        },
      ).then((res) => res.json());

      setRecentMusic(res.data[0]);
    })();
  }, [setRecentMusic]);

  return children;
};
