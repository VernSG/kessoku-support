import type { SiteConfig } from "../lib/types";
const siteConfig: SiteConfig = {
  avatar: "/umkt.png",
  siteUrl: "https://nextjs-mdx-blog-theme.vercel.app",
  siteName: "UMKT TI",
  siteDescription:
    "Starter template for a personal website blog, built with Next.js, MDX, and Tailwind CSS.",
  siteThumbnail: "/og-image.png",
  nav: [
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
  ],
  social: {
    github: "https://github.com/aethereye",
    discord: "https://discord.gg/G56JNVjPtJ",
    linkedin: "https://linkedin.com/",
    instagram: "https://www.instagram.com/ti-umkt",
  },
};
export default siteConfig;
