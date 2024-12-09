import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    APPLE_MUSIC_SECRET: z.string(),
    APPLE_MUSIC_KEY_ID: z.string(),
    APPLE_MUSIC_TEAM_ID: z.string(),
  },
  client: { NEXT_PUBLIC_APPLE_MUSIC_USER_TOKEN: z.string() },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_APPLE_MUSIC_USER_TOKEN:
      process.env.NEXT_PUBLIC_APPLE_MUSIC_USER_TOKEN,
  },
});
