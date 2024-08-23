import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import path from "path";
import fs from "fs";
import VueJsx from "@vitejs/plugin-vue-jsx";
const environment = process.env.NODE_ENV == "development";

export default defineConfig({
  plugins: [vue(), UnoCSS(), VueJsx()],
  base: "/",
  envDir: "./env",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  server: {
    https: environment
      ? {
          key: fs.readFileSync("./certificates/localhost-key.pem"),
          cert: fs.readFileSync("./certificates/localhost.pem"),
        }
      : {},
    port: 9527,
    open: false,
    host: "0.0.0.0",
    hmr: true,
  },
});
