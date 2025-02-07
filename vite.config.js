import { defineConfig } from "vite";
import injectScriptPlugin from "./vite-plugin-inject";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html", // Основная точка входа
        injected: "js/index.js", // Файл, в который объединятся все скрипты
      },
      output: {
        entryFileNames: "assets/injected.js", // Отключает хеш и фиксирует имя
      },
    },
  },
  plugins: [injectScriptPlugin()],
});
