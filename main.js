(function () {
  // Mobile navigation
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close' : 'Menu';
    });
  }

  // Ideas page: filter entries by theme
  var buttons = document.querySelectorAll('.filters button');
  var entries = document.querySelectorAll('.entry[data-theme]');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var theme = btn.getAttribute('data-filter');
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
      entries.forEach(function (e) {
        var show = theme === 'all' || e.getAttribute('data-theme').split(' ').indexOf(theme) !== -1;
        e.hidden = !show;
      });
      document.querySelectorAll('.group').forEach(function (g) {
        var any = g.querySelectorAll('.entry:not([hidden])').length > 0;
        g.hidden = !any;
      });
    });
  });

  // Footer year
  var yr = document.getElementById('year');
  if (yr) { yr.textContent = new Date().getFullYear(); }
})();
