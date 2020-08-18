// which nav has active
let navs = document.querySelectorAll('.nav-item');
let bgs = document.querySelector('#bgs');
let pagePath = window.location.pathname;
for(let nav of navs) {
  let navPath = nav.getAttribute("data-path");
  if(navPath && navPath === pagePath) {
    nav.className = "nav-item active";
  }
  if(nav.key=='music'){
    bgs.style.width='100%';
    bgs.style.backgroundImage='url(/images/index.jpg)';
  }
  if(nav.key=='about'){
    bgs.style.width='100%';
    bgs.style.backgroundImage='url(images/pabout.jpg)';
  }
}

