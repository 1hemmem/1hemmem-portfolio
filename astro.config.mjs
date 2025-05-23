// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";
// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  adapter: vercel({
    webAnalytics: {
      enabled: true, // set to false when using @vercel/analytics@1.4.0
    },
  }),
});
// // @ts-check
// import { defineConfig } from "astro/config";

// import react from "@astrojs/react";

// import tailwind from "@astrojs/tailwind";

// import vercel from "@astrojs/vercel";

// export default defineConfig({
//   output: "server",
//   adapter: vercel({
//     webAnalytics: {
//       enabled: true,
//     },
//   }),
//   server: {
//     host: true,
//     port: 4321,
//   },

//   integrations: [
//     react(),
//     tailwind({
//       applyBaseStyles: false,
//     }),
//   ],

//   // adapter: vercel()
// });
