// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind'

import vercel from '@astrojs/vercel';

export default defineConfig({
  server: {
    host: true,
    port: 4321 
  },

  integrations: [react(), tailwind({
    applyBaseStyles: false,
  })],

  adapter: vercel()
});