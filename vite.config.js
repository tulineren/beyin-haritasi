import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages için: repo adın "beyin-haritasi" ise bu satır doğru
  // Değiştirmek istersen: base: "/REPO-ADIN/"
  base: "/beyin-haritasi/",
});
