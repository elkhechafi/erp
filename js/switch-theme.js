//script for switching theme start here
var themeSwitch = document.getElementById('themeSwitch');
if(themeSwitch) {
  themeSwitch.addEventListener('click', function(event){
    resetTheme(); // update color theme
  });

  function resetTheme() {
    if(themeSwitch.checked) { // dark theme has been selected
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('themeSwitch', 'dark'); // save theme selection 
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.removeItem('themeSwitch'); // reset theme selection 
    } 
  };
}
var themeSwitch = document.getElementById('themeSwitch');
if(themeSwitch) {
  initTheme(); // on page load, if user has already selected a specific theme -> apply it

  themeSwitch.addEventListener('click', function(event){
    resetTheme(); // update color theme
  });

  function initTheme() {
    var darkThemeSelected = (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark');
    // update checkbox
    themeSwitch.checked = darkThemeSelected;
    // update body data-theme attribute
    darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
  };

  function resetTheme() {
    if(themeSwitch.checked) { // dark theme has been selected
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('themeSwitch', 'dark'); // save theme selection 
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.removeItem('themeSwitch'); // reset theme selection 
    } 
  };
}
//script for switching theme end here