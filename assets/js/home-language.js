// Only the homepage biography has translations; other pages remain in English.
(() => {
  const root = document.querySelector('.resume-biography');
  const control = root?.querySelector('.home-language-switch');
  if (!control) return;
  const texts = root.querySelectorAll('[data-home-language]');
  const buttons = control.querySelectorAll('[data-set-home-language]');
  const apply = (language) => {
    texts.forEach((element) => {
      element.hidden = element.dataset.homeLanguage !== language;
    });
    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.setHomeLanguage === language));
    });
  };
  let language = 'en';
  try {
    if (localStorage.getItem('home-language') === 'zh') language = 'zh';
  } catch (_) { /* The switch also works when browser storage is unavailable. */ }
  apply(language);
  control.hidden = false;
  buttons.forEach((button) => button.addEventListener('click', () => {
    const language = button.dataset.setHomeLanguage;
    apply(language);
    try { localStorage.setItem('home-language', language); } catch (_) {}
  }));
})();
