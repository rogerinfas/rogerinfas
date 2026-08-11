import { MetadataRoute } from "next"

const root = "https://github.com/rogerinfas"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: root,
      lastModified: new Date(),
      priority: 1,
    },
  ]
}
