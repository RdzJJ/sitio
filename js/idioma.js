import i18next from './i18n.js';

document.addEventListener('DOMContentLoaded', () => {
  const btn_en = document.getElementById("btn_en");
  const btn_es = document.getElementById("btn_es");

  btn_en.addEventListener("click", () => changeLanguage('en'));
  btn_es.addEventListener("click", () => changeLanguage('es'));

  updateContent();
});

function changeLanguage(language) {
  i18next.changeLanguage(language, (err, t) => {
    if (err) {
      console.error('Error changing language:', err);
    } else {
      updateContent();
    }
  });
}

function updateContent() {
  document.getElementById("inicio").innerText = i18next.t("inicio");
  document.getElementById("portafolio").innerText = i18next.t("portafolio");
  document.getElementById("about").innerText = i18next.t("about");
  document.getElementById("contact").innerText = i18next.t("contact");
  document.getElementById("networks").innerText = i18next.t("networks");
  document.getElementById("welcome").innerText = i18next.t("welcome");
  document.getElementById("welcome-text").innerText = i18next.t("welcome-text");
  document.getElementById("portraits").innerText = i18next.t("portraits");
  document.getElementById("nature").innerText = i18next.t("nature");
  document.getElementById("urban").innerText = i18next.t("urban");
  document.getElementById("experimental").innerText = i18next.t("experimental");
  document.getElementById("about-text").innerText = i18next.t("about-text");
  document.getElementById("nameread").innerText = i18next.t("name");
  document.getElementById("emailread").innerText = i18next.t("email");
  document.getElementById("messageread").innerText = i18next.t("message");
  document.getElementById("submit").innerText = i18next.t("send");
  document.getElementById("footerd").innerText = i18next.t("footerd");
}