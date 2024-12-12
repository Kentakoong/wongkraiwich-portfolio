import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface RecentMusicProps {
  recentMusic?: Song;
  setRecentMusic: (recentMusic?: Song) => void;
}

export const useRecentMusic = create(
  persist<RecentMusicProps>(
    (set) => ({
      setRecentMusic: (recentMusic) => set({ recentMusic }),
    }),
    {
      name: "recent-music",
    },
  ),
);
