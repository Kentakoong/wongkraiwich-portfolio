export default {
  "**/*.{js,jsx,ts,tsx,json,md,mdx}": ["biome check --write"],
  "**/*.{ts,tsx}": [() => "tsgo --noEmit"],
};
