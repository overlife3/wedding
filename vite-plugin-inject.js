export default function injectScriptPlugin() {
  return {
    name: "inject-script",
    transformIndexHtml(html) {
      return html.replace(
        "</body>",
        `<script src="/assets/injected.js"></script></body>`
      );
    },
  };
}
