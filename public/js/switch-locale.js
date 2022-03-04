const en = document.querySelector("#en");
const fr = document.querySelector("#fr");
let locale = navigator.language.split("-")[0];
if (sessionStorage.getItem("locale")) {
    locale = sessionStorage.getItem("locale");
}
locale === "en" ? (fr.style = "display:none") : (en.style = "display:none");
