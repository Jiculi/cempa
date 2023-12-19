import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()]
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