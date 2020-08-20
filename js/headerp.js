let tou = document.getElementById('tou');

window.onscroll=()=>{
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    tou.style.width=(280-(scrolltop/7))+'px';
}