import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vite-tood-list",
  plugins: [react()],
  server: {
    port: 3001,
  },
});
