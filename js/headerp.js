let tou = document.getElementById('tou');
let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
document.addEventListener("scroll", ()=>{
    tou.style.width=(280-scrolltop/7)+'px';

},false);