// which nav has active
let navs = document.querySelectorAll('.nav-item');
let bgs = document.getElementById('bgs');
let pagePath = window.location.pathname;
for(let nav of navs) {
  let navPath = nav.getAttribute("data-path");
  if(navPath && navPath === pagePath) {
    nav.className = "nav-item active";
  }
  if(nav.getAttribute(key) == 'music'){
    bgs.addClass('bgm');
  }
  if(nav.getAttribute(key) == 'about'){
    bgs.addClass('bga');
  }
}

