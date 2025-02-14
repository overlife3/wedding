import { defineConfig } from "vite";
import injectScriptPlugin from "./vite-plugin-inject";
import { viteStaticCopy } from "vite-plugin-static-copy";

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
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "api", // Исходная папка
          dest: "", // Корневая директория в dist
        },
      ],
    }),
    injectScriptPlugin(),
  ],
});
