let imgBtn1 = document.querySelector('.img-btn1');
let imgBtn2 = document.querySelector('.img-btn2');
let imgBtn3 = document.querySelector('.img-btn3');
let imgBtn4 = document.querySelector('.img-btn4');
let imgBtn5 = document.querySelector('.img-btn5');

let macSliderBox = document.querySelectorAll('.mac__slider-box img')
let macSlider = document.querySelector('.mac__slider-box')

count =0
px = 490
imgBtn2.addEventListener('click', ()=> {
    count =1;
    macSlider.style.transform = `translateX(-${px}px)`
    imgBtn2.classList.add('act-border')
    imgBtn1.classList.remove('act-border')
    imgBtn3.classList.remove('act-border')
    imgBtn4.classList.remove('act-border')
    imgBtn5.classList.remove('act-border')
})
imgBtn3.addEventListener('click', ()=> {
    count =2;
    macSlider.style.transform = `translateX(-${px*count}px)`
    imgBtn3.classList.add('act-border')
    imgBtn2.classList.remove('act-border')
    imgBtn1.classList.remove('act-border')
    imgBtn4.classList.remove('act-border')
    imgBtn5.classList.remove('act-border')
})
imgBtn4.addEventListener('click', ()=> {
    count =3;
    macSlider.style.transform = `translateX(-${px*count}px)`
    imgBtn4.classList.add('act-border')
    imgBtn3.classList.remove('act-border')
    imgBtn2.classList.remove('act-border')
    imgBtn1.classList.remove('act-border')
    imgBtn5.classList.remove('act-border')
})
imgBtn5.addEventListener('click', ()=> {
    count =4;
    macSlider.style.transform = `translateX(-${px*count}px)`
    imgBtn5.classList.add('act-border')
    imgBtn4.classList.remove('act-border')
    imgBtn3.classList.remove('act-border')
    imgBtn2.classList.remove('act-border')
    imgBtn1.classList.remove('act-border')
})
imgBtn1.addEventListener('click', ()=> {
    count =0;
    macSlider.style.transform = `translateX(${px*count}px)`
    imgBtn1.classList.add('act-border')
    imgBtn5.classList.remove('act-border')
    imgBtn3.classList.remove('act-border')
    imgBtn2.classList.remove('act-border')
    imgBtn1.classList.remove('act-border')
    imgBtn4.classList.remove('act-border')
})




let btn16gb = document.querySelector('.btn16gb')
let btn8gb = document.querySelector('.btn8gb')
let btn256gb = document.querySelector('.btn256gb')
let btn512gb = document.querySelector('.btn512gb')
let btn1tb = document.querySelector('.btn1tb')
let btngold = document.querySelector('.btngold')
let btngray = document.querySelector('.btngray')
let btngraycosmos = document.querySelector('.btngraycosmos')
let macPrice = document.querySelector('.mac__price')
let macPrice2 = document.querySelector('.mac__price2')

count2 =0

btn16gb.addEventListener('click', ()=> {
    btn1tb.classList.remove('d-none')
    btn16gb.classList.add('active')
    btn8gb.classList.remove('active')
    macPrice.textContent ="16 935 000"
    macPrice2.textContent= "19 813 500"
})
btn8gb.addEventListener('click', ()=> {
    btn16gb.classList.remove('active')
    btn8gb.classList.add('active')
    btn1tb.classList.add('d-none')
    macPrice.textContent ="12 497 000"
    macPrice2.textContent= "14 621 000"
})
btn512gb.addEventListener('click', ()=> {
    btn256gb.classList.remove('active')
    btn1tb.classList.remove('active')
    btn512gb.classList.add('active')
    btn1tb.classList.remove('d-none')
    macPrice.textContent ="19 270 500"
    macPrice2.textContent= "22 546 500"
    count2 =1
})
btn1tb.addEventListener('click', ()=> {
    count2 =0
    btn512gb.classList.remove('active')
    btn1tb.classList.add('active')
    btn8gb.classList.add('d-none')
    btn16gb.classList.add('active')
    macPrice.textContent ="20 438 500"
    macPrice2.textContent= "23 913 000"
    // count2 =1
    if(count2==1) {
        btn512gb.classList.add('active')
        btn1tb.classList.remove('active')
        btn8gb.classList.remove('d-none')
        btn16gb.classList.remove('active')
    }
})
btn256gb.addEventListener('click', ()=> {
    btn512gb.classList.remove('active')
    btn256gb.classList.add('active')
    btn1tb.classList.remove('active')
    btn8gb.classList.remove('d-none')
    btn16gb.classList.remove('active')
    macPrice.textContent ="16 935 000"
    macPrice2.textContent= "19 813 500"
})

let plusBtn = document.querySelector('.plusBtn')
let minusBtn = document.querySelector('.minusBtn')
let macFullBtn =document.querySelector('.mac__full-btn')

plusBtn.addEventListener('click', ()=> {
    let a = macPrice.textContent*2
    console.log(a);
    macPrice.textContent = a
    macPrice2.textContent= `${macPrice/2}`
})
minusBtn.addEventListener('click', ()=> {
    let a = macPrice.textContent*2
    console.log(a);
    macPrice.textContent = a
    macPrice2.textContent= `${macPrice/2}`
})