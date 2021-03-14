let open = document.querySelector('.nav-open');
let close = document.querySelector('.nav-close');
let nav = document.querySelector('.nav');


open.addEventListener('click', ()=>{
    nav.classList.add('visible')
})
close.addEventListener('click', ()=>{
    nav.classList.remove('visible')
})