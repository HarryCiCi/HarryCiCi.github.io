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
    bgs.width='100%'.backgroundImage='url(theme.avatar.bgp)';
  }
  if(nav.key=='about'){
    bgs.width='100%'.backgroundImage='url(/images/pabout.jpg)';
  }
}

