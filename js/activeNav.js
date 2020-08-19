// which nav has active
let navs = document.querySelectorAll('.nav-item');
let bgs = document.getElementById('topt');

let pagePath = window.location.pathname;
for(let nav of navs) {
  let navPath = nav.getAttribute("data-path");
  if(navPath && navPath === pagePath) {
    nav.className = "nav-item active";
  }
  
}
navs.onclick = function(ev){
  var ev = window.event || ev;//兼容
  var targ = ev.target;
  if(targ.innerHTML=='音樂  MUSIC'){
      targ.style.background = 'green';
  }
  if(targ.getAttribute('keys')==='music'){
    bgs.className='bgm';
  }
  if(targ.getAttribute('keys')==='about'){
  
    bgs.className='bga';
  }
  if(targ.getAttribute('keys')==='writings'){
  
    bgs.className='bgwrt';
  }
  if(targ.getAttribute('keys')==='art'){
  
    bgs.className='bgart';
  }
}




