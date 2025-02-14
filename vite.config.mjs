import { defineConfig } from "vite";
import injectScriptPlugin from "./vite-plugin-inject";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html", // Основная точка входа
        main_js_injected: "js/index.js", // Файл, в который объединятся все скрипты
        survey: "survey.html",
        survey_js_injected: "survey_js/index.js",
      },
      output: {
        entryFileNames: "assets/[name].js", // Отключает хеш и фиксирует имя
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
