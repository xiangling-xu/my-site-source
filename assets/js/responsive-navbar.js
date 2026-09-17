(() => {
  const nav = document.querySelector('#site-header .navbar');
  if (!nav) return;
  const brand = nav.querySelector('.navbar-brand');
  const menu = nav.querySelector('#nav-menu');
  const toggle = nav.querySelector('#nav-toggle');
  const button = nav.querySelector('label[for="nav-toggle"]');
  const controls = nav.lastElementChild;
  if (!brand || !menu || !toggle || !button || !controls) return;

  button.setAttribute('role', 'button');
  button.setAttribute('tabindex', '0');
  button.setAttribute('aria-controls', 'nav-menu');

  function updateExpanded() {
    button.setAttribute('aria-expanded', String(toggle.checked));
    button.setAttribute('aria-label', toggle.checked ? 'Close navigation' : 'Open navigation');
  }

  function updateLayout() {
    // Measure the intrinsic row even while the menu is collapsed.
    nav.classList.add('nav-measuring');
    const style = getComputedStyle(nav);
    const available = nav.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
    const required = brand.getBoundingClientRect().width + menu.getBoundingClientRect().width
      + controls.getBoundingClientRect().width + 2 * parseFloat(style.columnGap) + 4;
    const mode = required <= available ? 'inline' : 'collapsed';
    nav.classList.remove('nav-measuring');

    const wasInline = nav.dataset.navMode === 'inline';
    const menuHadFocus = menu.contains(document.activeElement);
    nav.dataset.navMode = mode;
    if (mode === 'inline') toggle.checked = false;
    if (wasInline && mode === 'collapsed' && menuHadFocus && !toggle.checked) button.focus();
    updateExpanded();

    const header = document.querySelector('.page-header') || nav.closest('header');
    const height = `${header.getBoundingClientRect().height}px`;
    document.documentElement.style.setProperty('--navbar-height', height);
    document.documentElement.style.scrollPaddingTop = height;
  }

  let pending = false;
  function scheduleLayout() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => {
      pending = false;
      updateLayout();
    });
  }

  toggle.addEventListener('change', scheduleLayout);
  button.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle.checked = !toggle.checked;
      scheduleLayout();
    }
  });
  nav.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.checked) {
      toggle.checked = false;
      button.focus();
      scheduleLayout();
    }
  });
  menu.addEventListener('click', event => {
    if (event.target.closest('a')) {
      toggle.checked = false;
      scheduleLayout();
    }
  });
  const observer = new ResizeObserver(scheduleLayout);
  observer.observe(nav);
  observer.observe(controls);
  window.addEventListener('resize', scheduleLayout);
  if (document.fonts) document.fonts.ready.then(scheduleLayout);
  updateLayout();
})();
