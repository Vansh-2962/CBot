import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindCss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindCss()],
  build: {
    lib: {
      entry: "./src/App.tsx",
      name: "CBot",
      fileName: "ChatBot",
      formats: ["es", "umd", "iife"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
