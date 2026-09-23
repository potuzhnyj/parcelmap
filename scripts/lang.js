const languageSelect = document.querySelector("#languageSelect");

let translations;

async function load() {
  const response = await fetch("data/languages.json");
  translations = await response.json();
  const savedLanguage = localStorage.getItem("language") || "en";

  languageSelect.value = savedLanguage;
  setLanguage(savedLanguage);
}

function setLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((e) => {
    const key = e.dataset.i18n;
    e.textContent = translations[lang][key];
  });

  localStorage.setItem("language", lang);
}

languageSelect.addEventListener("change", () => {
  setLanguage(languageSelect.value);
});

load();
