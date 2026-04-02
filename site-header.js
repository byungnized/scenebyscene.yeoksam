(function () {
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 60);
    });
    header.classList.toggle('scrolled', window.scrollY > 60);
  }

  const mobileBtn = document.getElementById('mobile-btn');
  const nav = document.getElementById('nav');
  const navBackdrop = document.getElementById('nav-backdrop');

  function setMenuOpen(open) {
    if (!nav || !mobileBtn) return;
    nav.classList.toggle('active', open);
    mobileBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (navBackdrop) {
      navBackdrop.classList.toggle('is-active', open);
      navBackdrop.setAttribute('aria-hidden', open ? 'false' : 'true');
    }
    document.body.classList.toggle('menu-open', open);
  }

  if (mobileBtn && nav) {
    mobileBtn.setAttribute('aria-expanded', 'false');
    mobileBtn.setAttribute('aria-controls', 'nav');
    mobileBtn.addEventListener('click', function () {
      setMenuOpen(!nav.classList.contains('active'));
    });
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', function () {
      setMenuOpen(false);
    });
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) setMenuOpen(false);
  });

  if (nav) {
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        setMenuOpen(false);
      });
    });
  }

  const searchBtn = document.getElementById('search-btn');
  const searchModal = document.getElementById('search-modal');
  const searchClose = document.getElementById('search-close');

  if (searchBtn && searchModal) {
    searchBtn.addEventListener('click', function () {
      searchModal.classList.add('active');
      var input = searchModal.querySelector('input');
      if (input) setTimeout(function () { input.focus(); }, 300);
    });
  }

  if (searchClose && searchModal) {
    searchClose.addEventListener('click', function () {
      searchModal.classList.remove('active');
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (searchModal) searchModal.classList.remove('active');
      setMenuOpen(false);
    }
  });

  if (searchModal) {
    searchModal.querySelectorAll('.search-tag').forEach(function (tag) {
      tag.addEventListener('click', function () {
        var input = searchModal.querySelector('input');
        if (input) {
          input.value = tag.textContent;
          input.focus();
        }
      });
    });
  }
})();
