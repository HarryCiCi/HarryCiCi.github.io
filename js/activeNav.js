// which nav has active
let navs = document.querySelectorAll('.nav-item');
let bgs = document.querySelector('#bgs');
let pagePath = window.location.pathname;
for(let nav of navs) {
  let navPath = nav.getAttribute("data-path");
  if(navPath && navPath === pagePath) {
    nav.className = "nav-item active";
  }
  if(navPath=='/music/'){
    bgs.addClass("bgm");
  }
  if(navPath=='/about/'){
    bgs.addClass("bga");
  }
}

