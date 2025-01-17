const include = [
  "qs",
  "mitt",
  "dayjs",
  "axios",
  "pinia",
  "vue-i18n",
  "@vueuse/core",
  "@pureadmin/utils",
  "responsive-storage"
];

const exclude = [
  "@iconify-icons/ep",
  "@iconify-icons/ri",
  "@pureadmin/theme/dist/browser-utils"
];

const esbuildOptions = {
  define: {
    global: "globalThis"
  }
};

export { include, exclude, esbuildOptions };
