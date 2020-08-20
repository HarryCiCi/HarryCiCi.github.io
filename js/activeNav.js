// which nav has active
let navs = document.querySelectorAll('.nav-item');
let topt = document.getElementById('topt');
let tou = document.getElementById('tou');

let pagePath = window.location.pathname;
for(let nav of navs) {
  let navPath = nav.getAttribute("data-path");
  if(navPath && navPath === pagePath) {
    nav.className = "nav-item active";
  }
  if(nav.className === "nav-item active"&&nav.getAttribute('keys') === 'music'){
    topt.className='bgm';
  }
  if(nav.className === "nav-item active"&&nav.getAttribute('keys')==='about'){
    topt.className='bga';
    tou.style.display='none';
  }
  if(nav.className === "nav-item active"&&nav.getAttribute('keys')==='wrtings'){

    topt.className='bgwrt';
  }
  if(nav.className === "nav-item active"&&nav.getAttribute('keys')==='art'){

    topt.className='bgart';
  }
}
window.onscroll=()=>{
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  tou.style.width=(280-(scrollTop/7))+'px';
  tou.style.height=(280-(scrollTop/7))+'px';
  tou.style.opacity=(100-(scrollTop/100))+'%';
}