import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModifiedDate = new Date("2025-07-05");
  return [
    // Homepage
    {
      url: "https://stream.rexd.space/",
      lastModified: lastModifiedDate,
      changeFrequency: "daily",
      priority: 1,
    },
    // Home page
    {
      url: "https://stream.rexd.space/home",
      lastModified: lastModifiedDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    // Movies section
    {
      url: "https://stream.rexd.space/movies",
      lastModified: lastModifiedDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    // Movies browse page
    {
      url: "https://stream.rexd.space/movies/browse",
      lastModified: lastModifiedDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    // TV Shows section
    {
      url: "https://stream.rexd.space/tvshows",
      lastModified: lastModifiedDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    // TV Shows browse page
    {
      url: "https://stream.rexd.space/tvshows/browse",
      lastModified: lastModifiedDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    // Search page
    {
      url: "https://stream.rexd.space/search",
      lastModified: lastModifiedDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Legal pages
    {
      url: "https://stream.rexd.space/privacy",
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://stream.rexd.space/terms",
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://stream.rexd.space/dmca",
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://stream.rexd.space/cookie-policy",
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
