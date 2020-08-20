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
  if(scrollTop<=200){
    tou.style.boxShadow= '#666'+' '+scrollTop/100*2+'px'+' '+scrollTop/100*2+'px'+' '+scrollTop/100*6+'px';
    tou.style.cssText="width:"+(280-(scrollTop/5))+'px;'+"height:"+(280-(scrollTop/5))+'px;'+"filter: opacity("+(100-(scrollTop/100)*50)+'%'+")";
  }else{

    tou.style.display='none';
  }
  for(let nav of navs) {
    if(nav.className === "nav-item active"&&nav.getAttribute('keys')==='about'){
      topt.style.backgroundSize=(100-(scrollTop/100)*2)+'%';
      topt.style.boxShadow= '#666'+' '+scrollTop/100*2+'px'+' '+scrollTop/100*2+'px'+' '+scrollTop/100*6+'px';
      tou.style.display='none';
    }
  }
}