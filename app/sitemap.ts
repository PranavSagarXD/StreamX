import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModifiedDate = new Date("2025-07-05");
  return [
    // Homepage
    {
      url: "https://StreamX.com/",
      lastModified: lastModifiedDate,
      changeFrequency: "daily",
      priority: 1,
    },
    // Home page
    {
      url: "https://StreamX.com/home",
      lastModified: lastModifiedDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    // Movies section
    {
      url: "https://StreamX.com/movies",
      lastModified: lastModifiedDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    // Movies browse page
    {
      url: "https://StreamX.com/movies/browse",
      lastModified: lastModifiedDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    // TV Shows section
    {
      url: "https://StreamX.com/tvshows",
      lastModified: lastModifiedDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    // TV Shows browse page
    {
      url: "https://StreamX.com/tvshows/browse",
      lastModified: lastModifiedDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    // Search page
    {
      url: "https://StreamX.com/search",
      lastModified: lastModifiedDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Legal pages
    {
      url: "https://StreamX.com/privacy",
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://StreamX.com/terms",
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://StreamX.com/dmca",
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://StreamX.com/cookie-policy",
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
