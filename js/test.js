const macObj = {
    name: "Mac Book Air 13-inch",
    ram: [
      {
        ramSize: 8,
        active: false,
        memory: [
          {
            active: true,
            size: 256,
            price: 12000000,
          },
          {
            active: false,
            size: 512,
            price: 15000000,
          },
        ],
      },
      {
        ramSize: 16,
        active: false,
        memory: [
          {
            active: true,
            size: 256 +"GB",
            price: 17000000,
          },
          {
            active: false,
            size: 512 +"GB",
            price: 20000000,
          },
          {
            active: false,
            size: 1 +"TB",
            price: 21000000,
          },
        ],
      },
    ],
    colors: [
      {
        name: "Gold",
        img: ['../images/macbookAir.webp',
      '../images/macPink2.jpg', '../images/macPink3.jpg','../images/macPink4.jpg', '../images/macPink5.jpg' ],
      },
      {
        name: "Silver",
        img: [
          '../images/macSilver1.jpg', '../images/macSilver2.jpg', '../images/macSilver3.jpg', '../images/macSilver4.jpg', '../images/macSilver5.jpg'
        ],
      },
      {
        name: "Gray color",
        img: [
          '../images/macGrey1.jpg', '../images/macGrey2.jpg', '../images/macGrey3.jpg', '../images/macGrey4.jpg', '../images/macGrey5.jpg'
        ],
      },
    ],
  };

let sanoq =0
let macRamHotira = document.querySelector('.mac__ram-hotira')
let macRamBox = document.querySelector('.mac__ram-box')
let macRamColor = document.querySelector('.mac__ram-color')
let macTitle = document.querySelector('.mac__title')
let macPrice = document.querySelector('.mac__price')
let macPrice2 = document.querySelector('.mac__price2')

macObj.ram.forEach((item)=> {

    let button = document.createElement('button');
    button.className = "mac__ram-btn ram";
    button. innerHTML = `
    ${item.ramSize}GB
  `
  macRamBox.appendChild(button)
})


macObj.colors.forEach((item)=> {

        let button = document.createElement('button');
        button.className = "mac__ram-btn color";
        button.innerHTML = 
        `
        <span class="color1"></span> ${item.name}`

  macRamColor.appendChild(button)
})
macObj.ram[1].memory.forEach((item)=> {

  let button = document.createElement('button');
  button.className = "mac__ram-btn ramSize";
  button.innerHTML = `
  ${item.size} `

  macRamHotira.appendChild(button)
})

let rams = document.querySelectorAll('.ram')
rams[0].classList.add('active')

rams[0].addEventListener(('click'), () => {

  rams[0].classList.add('active')
  rams[1].classList.remove('active')
  macTitle.innerHTML = `MacBook Air 13-inch M1/8/256 Gold`
  ramSize[2].style.display= "none"
  macPrice.innerHTML =`12 497 000`;
  macPrice2.innerHTML =`14 621 000`
})
rams[1].addEventListener(('click'), () => {
  rams[1].classList.add('active')
  rams[0].classList.remove('active')
  macTitle.innerHTML =`MacBook Air 13-inch M1/16/256 Gold`
  ramSize[2].style.display= "block"
  macPrice.innerHTML =`16 935 000`;
  macPrice2.innerHTML =` 19 813 500`
})

let ramSize = document.querySelectorAll('.ramSize')

ramSize[2].style.display= "none"
ramSize[0].classList.add('active');

ramSize[0].addEventListener(('click'), () => {
  ramSize[0].classList.add('active')
  ramSize[1].classList.remove('active')
  ramSize[2].classList.remove('active')
  rams[0].classList.remove('d-none')
  macTitle.innerHTML =`MacBook Air 13-inch M1/16/256 Gold`
})
ramSize[1].addEventListener(('click'), () => {
  ramSize[1].classList.add('active')
  ramSize[0].classList.remove('active')
  ramSize[2].classList.remove('active')
  ramSize[2].style.display= "block"
  macTitle.innerHTML =`MacBook Air 13-inch M1/16/512 Gold`
  macPrice.innerHTML = `19 270 500`
  macPrice2.innerHTML = `22 546 500`
})
ramSize[2].addEventListener(('click'), () => {
  ramSize[2].classList.add('active')
  ramSize[0].classList.remove('active')
  ramSize[1].classList.remove('active')
  rams[0].classList.add('d-none')
  rams[1].classList.add('active')
  macTitle.innerHTML =`MacBook Air 13-inch
  M1/16/1tb Gold`
  macPrice.innerHTML = `20 438 500`
  macPrice2.innerHTML = ` 23 913 000`
})


let colors = document.querySelectorAll('.color');
colors[0].classList.add('active')

  colors[0].addEventListener('click', ()=> {
    colors[0].classList.add('active')
    colors[1].classList.remove('active')
    colors[2].classList.remove('active')
  })
  colors[1].addEventListener('click', ()=> {
    colors[1].classList.add('active')
    colors[0].classList.remove('active')
    colors[2].classList.remove('active')
    if(ramSize[2].active == true) {
      console.log(ok);
    }
  })
  colors[2].addEventListener('click', ()=> {
    colors[2].classList.add('active')
    colors[0].classList.remove('active')
    colors[1].classList.remove('active')
  })


let plusBtn = document.querySelector('.plusBtn')
let numberInput = document.querySelector('.numberInput')
let minusBtn = document.querySelector('.minusBtn')


let macSliderBox= document.querySelector('.mac__slider-box')

macObj.colors.forEach((item) => {
  console.log(item.img);
  let img = document.createElement('img');
  // img.className = "mac__img";
  img.innerHTML = `
  ${item.img}`
  macSliderBox.appendChild(img)

})