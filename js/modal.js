let modalBtn1 = document.querySelector('.modal-btn1');
let modalBtn2 = document.querySelector('.modal-btn2');
let modalBtn3  = document.querySelector('.modal-btn3');
let modalBtn4 = document.querySelector('.modal-btn4');
let modalBtn5 = document.querySelector('.modal-btn5');


let modalSlider = document.querySelector('.modal__slider-box')

count3 =0
px2 = 900
modalBtn2.addEventListener('click', ()=> {
    count3 =1;
    modalSlider.style.transform = `translateX(-${px2}px)`
    modalBtn1.classList.remove('modal-border')
    modalBtn2.classList.add('modal-border')
    modalBtn3.classList.remove('modal-border')
    modalBtn4.classList.remove('modal-border')
    modalBtn5.classList.remove('modal-border')
})
modalBtn3.addEventListener('click', ()=> {
    count3 =2;
    modalSlider.style.transform = `translateX(-${px2*count3}px)`
    modalBtn1.classList.remove('modal-border')
    modalBtn2.classList.remove('modal-border')
    modalBtn3.classList.add('modal-border')
    modalBtn4.classList.remove('modal-border')
    modalBtn5.classList.remove('modal-border')
})
modalBtn4.addEventListener('click', ()=> {
    count3 =3;
    modalSlider.style.transform = `translateX(-${px2*count3}px)`
    modalBtn1.classList.remove('modal-border')
    modalBtn2.classList.remove('modal-border')
    modalBtn3.classList.remove('modal-border')
    modalBtn4.classList.add('modal-border')
    modalBtn5.classList.remove('modal-border')
})
modalBtn5.addEventListener('click', ()=> {
    count3 =4;
    modalSlider.style.transform = `translateX(-${px2*count3}px)`
    modalBtn1.classList.remove('modal-border')
    modalBtn2.classList.remove('modal-border')
    modalBtn3.classList.remove('modal-border')
    modalBtn4.classList.remove('modal-border')
    modalBtn5.classList.add('modal-border')
})
modalBtn1.addEventListener('click', ()=> {
    count3 =0;
    modalSlider.style.transform = `translateX(${px2*count3}px)`
    modalBtn1.classList.add('modal-border')
    modalBtn2.classList.remove('modal-border')
    modalBtn3.classList.remove('modal-border')
    modalBtn4.classList.remove('modal-border')
    modalBtn5.classList.remove('modal-border')
})