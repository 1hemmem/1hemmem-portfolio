import {
  type Article,
  type Person,
  type WebSite,
  type WithContext,
} from "schema-dts";
import avatar from "../assets/avatar.png";
import type { CollectionEntry } from "astro:content";

export const thoughtsWebsite: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: `${import.meta.env.SITE}/thoughts/`,
  name: "1hemmem • Thoughts",
  description: "Thoughts, writings from CHAREN Bahaeddine Hemmem",
  inLanguage: "en_US",
};

export const mainWebsite: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: import.meta.env.SITE,
  name: "1hemmem",
  description: "CHAREN Bahaeddine hemmem's personal portfolio website",
  inLanguage: "en_US",
};

export const personSchema: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "CHAREN Bahaeddine hemmem",
  url: `${import.meta.env.SITE}`,
  image: `${import.meta.env.SITE}${avatar.src}`,
  sameAs: [
    "https://www.twitter.com/CharenHemmem",
    "https://www.linkedin.com/in/baha-eddine-hemmem-charen-123231268/",
  ],
};

export function getArticleSchema(post: CollectionEntry<"thoughts">) {
  const articleStructuredData: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.data.title,
    url: `${import.meta.env.SITE}/thoughts/${post.id}/`,
    image: {
      "@type": "ImageObject",
      url: `${import.meta.env.SITE}${post.data.cover.src}/`,
    },
    description: post.data.excerpt,
    datePublished: post.data.date.toString(),
    publisher: {
      "@type": "Person",
      name: "CHAREN Bahaeddine Hemmem",
      url: import.meta.env.SITE,
      image: import.meta.env.SITE + avatar.src,
    },
    author: {
      "@type": "Person",
      name: "Lakshay Bhushan",
      url: import.meta.env.SITE,
      image: import.meta.env.SITE + avatar.src,
    },
  };
  return articleStructuredData;
}
