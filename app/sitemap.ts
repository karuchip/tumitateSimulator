import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tumitate-simulator.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://tumitate-simulator.vercel.app/coastFirePage",
      lastModified: new Date(),
    },
    {
      url: "https://tumitate-simulator.vercel.app/coast-fire-age",
      lastModified: new Date(),
    },
    {
      url: "https://tumitate-simulator.vercel.app/risyokuSavingSimulatiorPage",
      lastModified: new Date(),
    },
    {
      url: "https://tumitate-simulator.vercel.app/mensekiPage",
      lastModified: new Date(),
    },
    {
      url: "https://tumitate-simulator.vercel.app/feedbackForm",
      lastModified: new Date(),
    },
  ];
}
