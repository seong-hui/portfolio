import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/notion": {
        target: "https://api.notion.com/v1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/notion/, ""),
        headers: {
          "Notion-Version": "2022-02-22",
        },
      },
    },
  },
});
