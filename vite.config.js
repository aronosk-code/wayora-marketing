import path from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// Wayora-vefurinn (wayoratour.com): venjulegt Vite-React verkefni, hýst á
// Cloudflare Pages. Engin Base44-tenging lengur.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
