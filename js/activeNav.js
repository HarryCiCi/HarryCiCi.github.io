// which nav has active
let navs = document.querySelectorAll('.nav-item');
let topt = document.getElementById('topt');

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
  }
  if(nav.className === "nav-item active"&&nav.getAttribute('keys')==='wrtings'){

    topt.className='bgwrt';
  }
  if(nav.className === "nav-item active"&&nav.getAttribute('keys')==='art'){

    topt.className='bgart';
  }
}
