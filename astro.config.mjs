import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://Jiculi.github.io',
  base: '/',

});



/* se supne que es para astro-icons
export default {
  vite: {
    ssr: {
      external: ["svgo"],
    },
  }
}
*/