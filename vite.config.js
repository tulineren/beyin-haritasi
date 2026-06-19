import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/beyin-haritasi/',  // repo adın ne ise
  plugins: [react()],
})
