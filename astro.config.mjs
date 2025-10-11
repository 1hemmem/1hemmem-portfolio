import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import rehypeSlug from "rehype-slug";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import rehypePrettyCode from "rehype-pretty-code";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [
    react(),
    mdx({
      syntaxHighlight: false,
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: "everforest-dark",
          },
        ],
      ],
    }),
    sitemap(),
    robotsTxt(),
    icon(),
  ],

  site: "https://1hemmem.site",

  vite: {
    plugins: [tailwindcss()],
  },
});
