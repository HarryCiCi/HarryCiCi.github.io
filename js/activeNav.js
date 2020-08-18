// which nav has active
let navs = document.querySelectorAll('.nav-item');
let bgs = document.querySelector('.header');
let pagePath = window.location.pathname;
for(let nav of navs) {
  let navPath = nav.getAttribute("data-path");
  if(navPath && navPath === pagePath) {
    nav.className = "nav-item active";
  }
  if(navPath=='/music/'){
    bgs.css("backgroundImage","url(/source/images/index.jpg)");
  }
  if(navPath=='/about/'){
    bgs.css("fontSize","30px");
    bgs.css("backgroundImage","url(images/pabout.jpg)");
  }
}

