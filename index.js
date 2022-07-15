const menuBtn = document.querySelector('.menu_toggle')
const navbar = document.querySelector('.navbar')
const linksContainer = document.querySelector('.links')
const links = linksContainer.querySelectorAll('li')
const explore = document.querySelector('.explore')
const homepage = document.querySelector('.homepage')
const infoBox = document.querySelector('.info_box')
const openCartBtn = document.querySelectorAll('.open_cart')


// openCartBtn.addEventListener('click', () => {
//   infoBox.classList.add('show_info')
// })
// openCartBtn.classList.remove('show_info')

openCartBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
  infoBox.classList.add('show_info')
linksContainer.classList.remove('show')
homepage.classList.remove('blur')

  })
})
menuBtn.addEventListener('click' , (e) => {
    const bars = e.currentTarget.children[0]
    const times = e.currentTarget.children[1]
  if(linksContainer.classList.contains('show')){
    linksContainer.classList.remove('show')
  bars.style.display = 'block'
  times.style.display = 'none'
homepage.classList.remove('blur')
  infoBox.classList.remove('show_info')
   
  }else{
    linksContainer.classList.add('show')
bars.style.display = 'none'
times.style.display = 'block'
homepage.classList.add('blur')
  }
} ) 







window.addEventListener('scroll', elementInView)
const times = document.querySelector('.menu_toggle').children[1]
const bars = document.querySelector('.menu_toggle').children[0]
function elementInView(){
  linksContainer.classList.remove('show')
  times.style.display = 'none'
  bars.style.display = 'block'
  homepage.classList.remove('blur')

  
}

window.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.box')
  boxes.forEach((box) => {
    box.classList.add('scrolled')

    // const boxTop = box.getBoundingClientRect().top
     
    // if(boxTop < window.innerHeight || document.documentElement.clientHeight){
    // }
    })
})

// smooth scroll 

// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

const scrollLinks = document.querySelectorAll('.scroll_link')
const exploreBtn = document.querySelector('.explore')
scrollLinks.forEach((link) => {
  link.addEventListener('click', scroll)


})

exploreBtn.addEventListener('click', scroll)

function scroll(e){
  e.preventDefault()
    const id = e.target.getAttribute('href').slice(1)
    const el = document.getElementById(id)
    var navHeight = navbar.getBoundingClientRect().height
 const elPad =window.getComputedStyle(el, null).getPropertyValue('padding-top')  
    let position = el.offsetTop - navHeight 

    if(elPad === '0px'){
      position -= 30
      window.scrollTo({
        left: 0,
        top: position,
      })
    }else{

      window.scrollTo({
        left: 0,
        top: position,
      })


    }
   
}