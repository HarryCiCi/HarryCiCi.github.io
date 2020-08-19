// which nav has active
let navs = document.querySelectorAll('.nav-item');
let bgs = document.getElementById('bgs');
bgs.className=bgs.className+' '+'bgm';
let pagePath = window.location.pathname;
for(let nav of navs) {
  let navPath = nav.getAttribute("data-path");
  if(navPath && navPath === pagePath) {
    nav.className = "nav-item active";
  }
  if(nav.getAttribute('key')==='music'){
   
  }
  if(nav.getAttribute('key')==='about'){
    bgs.style.color='#0f0'
    bgs.addClass('bga');
    
  }
}

bgs.addClass('bga');