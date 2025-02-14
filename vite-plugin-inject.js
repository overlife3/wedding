export default function injectScriptPlugin() {
  return {
    name: "inject-script",
    transformIndexHtml(html, { filename }) {
      let scriptTag = "";

      if (filename.includes("survey.html")) {
        scriptTag = `<script type="module" src="/assets/survey_js_injected.js"></script>`;
      } else {
        scriptTag = `<script src="/assets/main_js_injected.js" type="module"></script>`;
      }
      return html.replace("</body>", `${scriptTag}</body>`);
    },
  };
}
