require('./bootstrap');
import Vue from "vue";
import { createInertiaApp } from '@inertiajs/inertia-vue'
import VueLang from "@eli5/vue-lang-js";
import translations from "./lang.js";

import { Inertia } from "@inertiajs/inertia";

Vue.use(VueLang, {
    messages: translations, // Provide locale file
    locale: "en", // Set locale
    fallback: "en" // Set fallback lacale
});

Vue.mixin({
  computed: {
    getLocale() {
      return this.locale;
    },
  },
  beforeMount() {
    this.setLocale();
  },
  mounted() {
  
  },

  data() {
    return {
      locale:''
    }
  },

  methods: {
    changeLocale(locale) {
      Inertia.visit(`/locale/${locale}`, {
        preserveScroll: true,
        onSuccess: (page) => {
          this.locale = locale;
          const now = new Date();
          now.setDate(now.getDate() + 7);
          document.cookie = `locale=${locale};expires=${now.toUTCString()};SameSite=Lax;Secure`;
          this.$lang.setLocale(locale);
          location.reload()
        },
      });
    },

    setLocale() {
      if (
        document.cookie
          .split(";")
          .some((item) => item.trim().startsWith("locale=")) || item.startsWith(" locale=")
      ) {
        const lang = document.cookie
          .split(";")
          .find((item) => item.startsWith("locale=") || item.startsWith(" locale="))
          .split("=")[1];
        this.$lang.setLocale(lang);
        this.locale = lang;
      } else {
        this.$lang.setLocale(navigator.language.split("-")[0]);
        this.locale = navigator.language.split("-")[0];
      }
    },
  }
})

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    new Vue({
      render: h => h(App, props),
    }).$mount(el)
  },
})
