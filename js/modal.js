let modal = document.querySelector('.modal-body')

let box = document.createElement('div');
box.className ="modal__img-box"
box.style.overflow ="hidden"
box.innerHTML = `

<div class="modal__slider-box" style="display: flex; transition: all 0.3s ease; margin: 0 40px; list-style-type: none; justify-content: center;">

</div>
<div style="display: flex; justify-content: center;">

</div>
`
modal.appendChild(box)


let modalImgBox = document.querySelector('.modal__slider-box')
let modalBtnBox = document.querySelector('.modal__btn-box')

modalImgBox.innerHTML =""
macObj.Gold.forEach((item) => {
  let modalItem = document.createElement('li');
  modalItem.innerHTML = `
  <img class="modal__img" src="${item}" alt="img">` 
  modalImgBox.appendChild(modalItem)
})
console.log(modalImgBox);

modalBtnBox.innerHTML =""
macObj.Gold.forEach((item) => {
  let modalBtn = document.createElement('button');
  modalBtn.className = "modal__img-btn";
  modalBtn.innerHTML = `
  <img class="modal__img-inner"  src="${item}" alt="img">` 
  modalBtnBox.appendChild(modalBtn)
})

function modalCarousel() {
  let moadlSliderBtn = document.querySelectorAll('.modal__img-btn');
  moadlSliderBtn.forEach((item, index) => {
    item.addEventListener('click', ()=> {
      moadlSliderBtn.forEach((value) => {
        value.classList.remove('active');
      })
      item.classList.add('active');
      modalImgBox.style.transform = `
      translateX(${-index *1100}px)`
    })
  })
}
modalCarousel()