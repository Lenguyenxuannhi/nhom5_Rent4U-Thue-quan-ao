(function(){
  try {
    var t = localStorage.getItem('theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = t || 'system';
    var resolved = (theme === 'system') ? (prefersDark ? 'dark' : 'light') : theme;
    if (resolved === 'dark'){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  } catch (e) {
    // ignore
  }
})();
