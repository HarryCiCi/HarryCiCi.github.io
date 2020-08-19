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
navs.on('click','li',()=>{
  if(li.getAttribute('keys')==='music'){
    bgs.className='bgm';
  }
  if(li.getAttribute('keys')==='about'){
  
    bgs.className='bga';
  }
  if(li.getAttribute('keys')==='writings'){
  
    bgs.className='bgwrt';
  }
  if(li.getAttribute('keys')==='art'){
  
    bgs.className='bgart';
  }
})




