const menuBtn = document.querySelector('.menu_toggle')
const navbar = document.querySelector('.navbar')
const linksContainer = document.querySelector('.links')
const links = linksContainer.querySelectorAll('li')
const explore = document.querySelector('.explore')
const wholeContainer = document.querySelector('.whole_container')

const openCartBtn = document.querySelectorAll('.open_cart')
const cartStore = document.querySelector('.cart_store')


openCartBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
   
linksContainer.classList.remove('show')
cartStore.classList.toggle('show_cart')
// times.style.display = 'none'
// bars.style.display = 'block'

wholeContainer.classList.remove('blur')




  })
})
menuBtn.addEventListener('click' , (e) => {
    const bars = e.currentTarget.children[0]
    const times = e.currentTarget.children[1]
  

  if(linksContainer.classList.contains('show')){
    linksContainer.classList.remove('show')
  bars.style.display = 'block'
  times.style.display = 'none'
wholeContainer.classList.remove('blur')


   
  }else{
    linksContainer.classList.add('show')
bars.style.display = 'none'
times.style.display = 'block'
wholeContainer.classList.add('blur')
  }

  if(cartStore.classList.contains('show_cart')){
    cartStore.classList.remove('show_cart')

  linksContainer.classList.remove('show')
  bars.style.display = 'block'
  times.style.display = 'none'

  wholeContainer.classList.remove('blur')

  }
} ) 

window.addEventListener('resize', () => {

  
if(window.innerWidth > 800  ){
  cartStore.classList.remove('show_cart')
} else{
}
})





window.addEventListener('scroll', elementInView)
const times = document.querySelector('.menu_toggle').children[1]
const bars = document.querySelector('.menu_toggle').children[0]
function elementInView(){
  linksContainer.classList.remove('show')
  times.style.display = 'none'
  bars.style.display = 'block'
  wholeContainer.classList.remove('blur')

  
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
  cartStore.classList.remove('show_cart')
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