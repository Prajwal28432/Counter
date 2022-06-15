let num = document.querySelector('.view');
let inc= document.getElementById('inc');
let dec= document.getElementById('dec');
let i=0;
let reset = document.getElementById('reset');
reset.onclick = function(){
    i=0;
    num.innerHTML =i;
}
// let btn = document.querySelectorAll('btn')
inc.addEventListener('click',function(){
    i++;
    num.innerHTML =i;
})
dec.addEventListener('click',function(){
    i--;
    num.innerHTML =i;
})
