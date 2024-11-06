import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import node from '@astrojs/node';
import dotenv from 'dotenv';

// https://astro.build/config

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
  site: "https://navigo-git-main-antonio-rochneans-projects.vercel.app",
  compressHTML: true
});
