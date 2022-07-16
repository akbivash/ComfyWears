const menu = [
    {
      id: 1,
      title: "Pure cotton T-shirt",
      category: "coding",
      price: 21.99,
      img: "./images/item1.jpg",
      icon: "./images/addCart.png"
    },
    {
      id: 2,
      title: "Funny Css T-shirt",
      category: "coding",
      price: 19.99,
      img: "./images/item2.jpg",
      icon: "./images/addCart.png"

    },
    {
      id: 3,
      title: "Programming T-shirt ",
      category: "coding",
      price: 25.99,
      img: "./images/item3.jpg",
      icon: "./images/addCart.png"

    },
    {
      id: 4,
      title: "The Beatles T-shirt",
      category: "band",
      price: 20.99,
      img: "./images/item4.jpg",
      icon: "./images/addCart.png"

    },
    {
      id: 5,
      title: "The Beatles T-shirt",
      category: "band",
      price: 20.99,
      img: "./images/item5.jpg",
      icon: "./images/addCart.png"

    },
    {
      id: 6,
      title: "The Rolling Stone T-shirt",
      category: "band",
      price: 20.99,
      icon: "./images/addCart.png",
      img: "./images/item6.jpg",
    },
    {
      id: 7,
      title: "New York 100% cotton T-shirt",
      category: "country",
      price: 27.99,
      img: "./images/item7.jpg",
      icon: "./images/addCart.png"

    },
    {
      
      id: 8,
      title: "Nepal T-shirt",
      category: "country",
      price: 17.99,
      img: "./images/budhdha.jpg",
      icon: "./images/addCart.png"

    },
   
  ];






  const menuItems = document.querySelector('.menu_items')

window.addEventListener('DOMContentLoaded',() => {
    displayItems(menu)
    displayBtns()
})



const filterContainer = document.querySelector('.filter_btns')

const displayBtns = () => {

  const categories = menu.reduce(( values, item) => {
if(!values.includes(item.category)){
  values.push(item.category)
}
return values
  }, ['all'])

  const categoryBtns = categories.map((category) => {
    return `  <button data-id=${category}>${category}</button>`
  })


  filterContainer.innerHTML = categoryBtns
const btns = filterContainer.querySelectorAll('button')
  
btns.forEach((btn)  => {
  btn.addEventListener('click', (e) => {

    const id = e.target.dataset.id
const menuCategory = menu.filter((item) => {
  if(item.category === id){
    return item
  }
})
if(id === 'all'){
  displayItems(menu)
}else{
  displayItems(menuCategory)
}
   
  })
})

}





function displayItems(menu){
let displayMenu =  menu.map((item) => {
  
    return `<div class="item">
    <span class="store_item_icon">
    <img src=${item.icon} alt="">
      </span>
    <img src=${item.img} alt="">
    <div class="item_info">
        <h4>${item.title}</h4>
        <h4>$ ${item.price}</h4>
        <p>${item.category}</P>
    </div>
</div>`
   })

   const cartStore = document.querySelector('.cart_store')
// console.log(cartStore)

displayMenu = displayMenu.join("")
menuItems.innerHTML = displayMenu
const items = menuItems.querySelectorAll('.item')

items.forEach((e) => {
 const addIcon = e.querySelector('.store_item_icon')
 addIcon.addEventListener('click', (e) => {
const fullPath = addIcon.nextElementSibling.src
const position = fullPath.indexOf('images') + 6
const partPath = fullPath.slice(position)


const item = {}
item.img = `images${partPath}`
let name = addIcon.parentElement.children[2].children[0].textContent
let price =  addIcon.parentElement.children[2].children[1].textContent.slice(1).trim()
item.name = name;
item.price = price;

const total = document.querySelector('.total')
const cartItem = document.createElement('div')
cartItem.classList.add('cart')
cartItem.innerHTML = `
      
<img src=${item.img} alt="">
<div class="item_info">
    <h2>${item.name}</h2>
    <h3>$ ${item.price}</h3>
</div>
<i class="fas fa-trash"></i>


</div>

`

const cartStore = document.querySelector('.cart_store')
cartStore.insertBefore(cartItem, total)
cartStore.classList.add('show_cart')

showTotals(price)
 })
})
}


function showTotals( price){
  const total = []
 total.push(parseFloat(price))

const totalMoney = total.reduce((total, item) => {
  total += item
  return total
}, 0)

const totalPrice = document.querySelector('.total')
console.log(totalPrice.textContent)
totalPrice.textContent =`Total : $ ${totalMoney}`
}







