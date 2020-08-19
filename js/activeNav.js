// which nav has active
let navs = document.querySelectorAll('.nav-item');
let bgs = document.getElementById('bgs');
let pagePath = window.location.pathname;
for(let nav of navs) {
  let navPath = nav.getAttribute("data-path");
  if(navPath && navPath === pagePath) {
    nav.className = "nav-item active";
    body.style.color = '#39f';
  }
  if(nav.getAttribute('key')==='music'){
   
    body.style.color = '#39f';
    bgs.addClass('bgm');
  }
  if(nav.getAttribute('key')==='about'){
    bgs.style.color='#0f0'
    bgs.addClass('bga');
    bgs.className=bgs.className+' '+'bgm';
  }
}

bgs.addClass('bga');