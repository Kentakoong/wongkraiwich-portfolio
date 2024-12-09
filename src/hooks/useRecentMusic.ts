import { create } from "zustand";

export interface RecentMusicProps {
  recentMusic?: Song;
  setRecentMusic: (recentMusic?: Song) => void;
}

export const useRecentMusic = create<RecentMusicProps>((set) => ({
  setRecentMusic: (recentMusic) => set({ recentMusic }),
}));
