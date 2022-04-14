

let sanoq =0
let macRamHotira = document.querySelector('.mac__ram-hotira')
let macRamBox = document.querySelector('.mac__ram-box')
let macRamColor = document.querySelector('.mac__ram-color')
let macTitle = document.querySelector('.mac__title')
let macPrice = document.querySelector('.mac__price')
let macPrice2 = document.querySelector('.mac__price2')

macPrice.innerHTML = 0

function priceTotal(obj) {

  // macTitle.innerHTML =`MacBook Air 13-inch
  // M1/16/1tb Gold`
  obj.ram.forEach((el) => {
    if (el.active) {
      el.memory.forEach((element) => {
        if (element.active) {
          macPrice.innerHTML = element.price;
          total = element.price;
        }
      });
    }
  });
}
priceTotal(macObj);



function addBtnRam(macObj) {
  macRamBox.innerHTML = "";
  macRamHotira.innerHTML = "";
  // macRamColor.innerHTML = "";

  macObj.ram.forEach((item)=> {
    let btn = document.createElement('button');
    btn.className = "mac__ram-btn ram";
    if (item.active) {
      btn.classList.add('active');

      item.memory.forEach((element)=> {
        let btn = document.createElement('button');
        btn.className = "mac__ram-btn ramSize";

        if(element.active) {
          btn.classList.add('active');
        }
        btn.innerHTML = `${element.size}GB`
        macRamHotira.appendChild(btn);
      });
    }
    btn.innerHTML = `${item.ramSize}GB`
    macRamBox.appendChild(btn)
  })

  // macObj.colors.forEach((el) => {
  //   let btn = document.createElement('button');
  //   btn.className = "mac__ram-btn color";
  //   if(el.active) {
  //     btn.classList.add('active');
  //   }
  //   btn.innerHTML = `
  //         <span class="color1"></span> ${el.name}`
  //   macRamColor.appendChild(btn);
  // })
}
addBtnRam(macObj) 


macRamBox.addEventListener('click', (e) => {
  total =0;
  macObj.ram.forEach((element) => {
    element.active = false;
    if(
      element.ramSize == e.target.innerHTML.slice(0, e.target.innerHTML.length -2)) {
      element.active = true
      macTitle.innerHTML = `M1/${e.target.innerHTML.slice(0, e.target.innerHTML.length -2)}/256/Gold`
    }
  });
  // macObj.colors.forEach((item) => {
  //   element.active = false;
  //   if(
  //     item.ramSize == e.target.innerHTML.slice(0, e.target.innerHTML.length -2)) {
  //     item.active = true
  //   }
  // });
  isAcitve(macObj);
  priceTotal(macObj);
  addBtnRam(macObj)
})

function  isAcitve(macObj) {
  total = 0;
  macRamHotira.addEventListener("click", (e) => {
    macObj.ram.forEach((element) => {
      // element.memory.active = false;
      element.memory.forEach((el) => {
        el.active = false;
        if (
          el.size == e.target.innerHTML.slice(0, e.target.innerHTML.length - 2)
        ) {
          el.active = true;
        }
      });
    });
    priceTotal(macObj);
    addBtnRam(macObj);
  });
}
isAcitve(macObj);


let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let text1 = document.querySelector('.text1')
let text2 = document.querySelector('.text2')

text2.style.display ="none"
btn1.addEventListener('click', ()=> {
  text1.style.display ="block"
  text2.style.display = "none"
  btn2.style.background="#fff"
  btn1.style.background="rgb(231, 228, 228)"
})
btn2.addEventListener('click', ()=> {
  btn2.style.background="rgb(231, 228, 228)"
  btn1.style.background="#fff"
  text1.style.display ="none"
  text2.style.display = "block"
})
// let plusBtn = document.querySelector('.plusBtn')
// let numberInput = document.querySelector('.numberInput')
// let minusBtn = document.querySelector('.minusBtn')

// plusBtn.addEventListener('click', ()=> {
//   console.log("ok");
//   macPrice.innerHTML =`${2*macPrice}` 
//   macPrice2.innerHTML = 2*macPrice2
// })



let colors = document.querySelectorAll('.color');
colors[0].classList.add('active')

  colors[0].addEventListener('click', ()=> {
    colors[0].classList.add('active')
    colors[1].classList.remove('active')
    colors[2].classList.remove('active')

    macSliderBox.innerHTML =""
    macObj.Gold.forEach((item) => {
      let imgItem = document.createElement('li');
      imgItem.className = "mac__item";
      imgItem.innerHTML = `
      <img class="mac__img"  src="${item}" alt="img">` 
      macSliderBox.appendChild(imgItem)
    })
      macSliderBoxBtn.innerHTML =""
      macObj.Gold.forEach((item) => {
      let imgBtn = document.createElement('button');
      imgBtn.className = "mac__img-btn  img-btn1";
      imgBtn.innerHTML = `
      <img class="mac__img-inner" src="${item}" alt="img">` 
      macSliderBoxBtn.appendChild(imgBtn)
    })  
  })
  colors[1].addEventListener('click', ()=> {
    colors[1].classList.add('active')
    colors[0].classList.remove('active')
    colors[2].classList.remove('active')

    macSliderBox.innerHTML =""
    macObj.Silver.forEach((item) => {
      let imgItem = document.createElement('li');
      imgItem.className = "mac__item";
      imgItem.innerHTML = `
      <img class="mac__img"  src="${item}" alt="img">` 
      macSliderBox.appendChild(imgItem)
    })

    macSliderBoxBtn.innerHTML =""
    macObj.Silver.forEach((item) => {
    let imgBtn = document.createElement('button');
    imgBtn.className = "mac__img-btn  img-btn1";
    imgBtn.innerHTML = `
    <img class="mac__img-inner" src="${item}" alt="img">` 
    macSliderBoxBtn.appendChild(imgBtn)
})
  })
  colors[2].addEventListener('click', ()=> {
    colors[2].classList.add('active')
    colors[0].classList.remove('active')
    colors[1].classList.remove('active')

    macSliderBox.innerHTML =""
    macObj.Graycolor.forEach((item) => {
    let imgItem = document.createElement('li');
    imgItem.className = "mac__item";
    imgItem.innerHTML = `
    <img class="mac__img"  src="${item}" alt="img">` 
    macSliderBox.appendChild(imgItem)
})

  macSliderBoxBtn.innerHTML =""
  macObj.Graycolor.forEach((item) => {
  let imgBtn = document.createElement('button');
  imgBtn.className = "mac__img-btn  img-btn1";
  imgBtn.innerHTML = `
  <img class="mac__img-inner" src="${item}" alt="img">` 
  macSliderBoxBtn.appendChild(imgBtn)
})
  })

let macSliderBoxBtn = document.querySelector('.mac__slider-btn')
let macSliderBox= document.querySelector('.mac__slider-box')

macSliderBox.innerHTML =""
macObj.Gold.forEach((item) => {
  let imgItem = document.createElement('li');
  imgItem.className = "mac__item";
  imgItem.innerHTML = `
  <img class="mac__img"  src="${item}" alt="img">` 
  macSliderBox.appendChild(imgItem)
})

macSliderBoxBtn.innerHTML =""
macObj.Gold.forEach((item) => {
  let imgBtn = document.createElement('button');
  imgBtn.className = "mac__img-btn";
  imgBtn.innerHTML = `
  <img class="mac__img-inner" src="${item}" alt="img">` 
  macSliderBoxBtn.appendChild(imgBtn)
})




function carousel() {
  let macSliderBtn = document.querySelectorAll('.mac__img-btn');
  macSliderBtn.forEach((item, index) => {
    item.addEventListener('click', ()=> {
      macSliderBtn.forEach((value) => {
        value.classList.remove('active');
      })
      item.classList.add('active');
      macSliderBox.style.transform = `
      translateX(${-index *500}px)`
    })
  })
}
carousel() 








let tahlilList = document.querySelector(".tahlil__list");
let rightBtn = document.querySelector(".right");
let leftBtn = document.querySelector(".left");
let count = 0;

rightBtn.addEventListener("click", () => {
  count++;

  tahlilCarousel();
});

leftBtn.addEventListener("click", () => {
  count--;

  tahlilCarousel();
});

function tahlilCarousel(){
  if(count == 0){
    leftBtn.style.display = "none";
  } else if(count > 0){
    leftBtn.style.display = "block";
  }

  if(count == 8){
    rightBtn.style.display = "none";
  } else{
    rightBtn.style.display = "block";
  }

  let itemWidth = document.querySelector(".tahlil__item").clientWidth;
  console.log(itemWidth);

  tahlilList.style.transform = `translate(${-count * itemWidth}px)`;
}