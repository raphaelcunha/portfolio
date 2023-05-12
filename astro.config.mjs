import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel({
    analytics: true,
  }),
});
