// which nav has active
let navs = document.querySelectorAll('.nav-item');
let bgs = document.getElementById('topt');

let pagePath = window.location.pathname;
for(let nav of navs) {
  let navPath = nav.getAttribute("data-path");
  if(navPath && navPath === pagePath) {
    nav.className = "nav-item active";
  }
  if(nav.getAttribute('keys')==='music'){
    bgs.className=bgs.className+' '+'bgm';
  }
  if(nav.getAttribute('keys')==='about'){

    bgs.className=bgs.className+' '+'bgs';
  }
}