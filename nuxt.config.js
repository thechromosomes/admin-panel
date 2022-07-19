export default {
  // ssr: false,
  head: {
    title: "cdp-admin",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://unpkg.com/@tabler/core@1.0.0-beta10/dist/css/tabler.min.css",
      },

      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://preview.tabler.io/dist/css/tabler.min.css",
      },
      
      
    ],

    script: [
      {
        src: "https://unpkg.com/@tabler/core@latest/dist/js/tabler.min.js",
      },

      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/list.js/2.3.1/list.min.js",
      },

      { src: "/js/apexMinChart.js" },
      { src: "/js/funnelChart.js" },
    ],
  },

  css: ["~/static/css/myCustomStyle.css"],

  plugins: [
    "@/plugins/globalErrorhandler",
    "@/plugins/globalVars",
    "@/plugins/thirdPartModule",
    "@/plugins/fetchCookies",
    "@/plugins/globalFilter",
  ],

  components: true,
  build: {
    babel: {
      compact: true,
    },
  },

  modules: ["@nuxtjs/axios"],
};
