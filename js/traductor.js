document.getElementById('translateButton').addEventListener('click', function () {
    const googleTranslateCombo = document.querySelector('.goog-te-combo');
    const currentLang = googleTranslateCombo.value;
    const newLang = currentLang === 'es' ? 'en' : 'es';

    // Forzar el cambio de idioma
    googleTranslateCombo.value = newLang;
    googleTranslateCombo.dispatchEvent(new Event('change'));

    // Esperar a que Google Translate procese el cambio antes de forzar un segundo cambio si es necesario
    setTimeout(() => {
        if (googleTranslateCombo.value !== newLang) {
            googleTranslateCombo.value = newLang;
            googleTranslateCombo.dispatchEvent(new Event('change'));
        }
    }, 100);
});