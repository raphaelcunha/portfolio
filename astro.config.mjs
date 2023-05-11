import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  integrations: [tailwind(), image(), react()],
});
