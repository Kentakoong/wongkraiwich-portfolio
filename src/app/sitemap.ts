import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const defaultPages = [
    {
      url: "https://wongkraiwich.dev/",
      lastModified: new Date(),
      priority: 1,
    },
  ];

  const sitemap = [...defaultPages];

  return sitemap;
}
