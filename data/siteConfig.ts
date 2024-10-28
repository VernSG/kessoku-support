import type { SiteConfig } from "../lib/types";
const siteConfig: SiteConfig = {
  avatar: "/1.png",
  siteUrl: "https://kessoku-support.vercel.app",
  siteName: "Kessoku Support",
  siteDescription:
    "Starter for Ryo website blog, built with Next.js, MDX, and Tailwind CSS.",
  siteThumbnail: "/2.png",
  nav: [{ label: "Posts", href: "/posts" }],
  social: {
    github: "https://github.com/vernsg",
    discord: "https://discord.gg/",
    linkedin: "https://linkedin.com/",
    instagram: "https://www.instagram.com/",
  },
};
export default siteConfig;
