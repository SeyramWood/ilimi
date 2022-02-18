require("./bootstrap");
import Vue from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue";
import VueLang from "@eli5/vue-lang-js";
import translations from "./lang.js";
import axios from "axios";

import { Inertia } from "@inertiajs/inertia";

Vue.use(VueLang, {
    messages: translations, // Provide locale file
    locale: "en", // Set locale
    fallback: "en", // Set fallback lacale
});
Object.defineProperty(Vue.prototype, "$axios", { value: axios });

Vue.mixin({
    computed: {
        getLocale() {
            return this.locale;
        },
    },
    beforeMount() {
        this.setLocale();
    },
    mounted() {},

    data() {
        return {
            locale: "",
            toast: false,
            toastMsg: "",
        };
    },

    methods: {
        changeLocale(locale) {
            Inertia.visit(`/locale/${locale}`, {
                preserveScroll: true,
                onSuccess: (page) => {
                    this.locale = locale;
                    sessionStorage.setItem("locale", locale);
                    this.$lang.setLocale(locale);
                    location.reload();
                },
            });
        },

        setLocale() {
            if (sessionStorage.getItem("locale")) {
                const lang = sessionStorage.getItem("locale");
                this.$lang.setLocale(lang);
                this.locale = lang;
            } else {
                this.$lang.setLocale(navigator.language.split("-")[0]);
                this.locale = navigator.language.split("-")[0];
            }
        },

        showToast(msg) {
            this.toastMsg = msg;
            this.$nextTick(() => (this.toast = true));
        },
    },
});

createInertiaApp({
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        new Vue({
            render: (h) => h(App, props),
        }).$mount(el);
    },
});
