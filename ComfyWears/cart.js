const menu = [
    {
      id: 1,
      title: "Pure cotton T-shirt",
      category: "coding",
      price: 21.99,
      img: "./images/item1.jpg",
    },
    {
      id: 2,
      title: "Funny Css T-shirt",
      category: "coding",
      price: 19.99,
      img: "./images/item2.jpg",
    },
    {
      id: 3,
      title: "Programming T-shirt ",
      category: "coding",
      price: 25.99,
      img: "./images/item3.jpg",
    },
    {
      id: 4,
      title: "The Beatles T-shirt",
      category: "band",
      price: 20.99,
      img: "./images/item4.jpg",
    },
    {
      id: 5,
      title: "The Beatles T-shirt",
      category: "band",
      price: 20.99,
      img: "./images/item5.jpg",
    },
    {
      id: 6,
      title: "The Rolling Stone T-shirt",
      category: "band",
      price: 20.99,
      img: "./images/item6.jpg",
    },
    {
      id: 7,
      title: "New York 100% cotton T-shirt",
      category: "country",
      price: 27.99,
      img: "./images/item7.jpg",
    },
    {
      
      id: 8,
      title: "Nepal T-shirt",
      category: "country",
      price: 17.99,
      img: "./images/item7.jpg",
    },
    
    {
      
      id: 9,
      title: "Nepal T-shirt",
      category: "count",
      price: 17.99,
      img: "./images/item7.jpg",
    },
   
  ];





  const menuItems = document.querySelector('.menu_items')
  const item = menuItems.querySelector('.item')


window.addEventListener('DOMContentLoaded',() => {
    displayItems(menu)
    // displayBtns()
})

function displayItems(menu){
let displayMenu =  menu.map((item) => {
  
    return `<div class="item">
    <img src=${item.img} alt="">
    <div class="item_info">
        <h4>${item.title}</h4>
        <h4>$ ${item.price}</h4>
        <p>${item.category}</P>
    </div>
</div>`
   })
displayMenu = displayMenu.join("")
menuItems.innerHTML = displayMenu
}




const filterContainer = document.querySelector('.filter_btns')
const filterBtns = filterContainer.querySelectorAll('button')

const displayBtns = () => {

  const categories = menu.reduce(( values, item) => {
if(!values.includes(item.category)){
  values.push(item.category)
}
return values
  }, ['all'])

  const categoryBtns = categories.map((category) => {
    return `  <button data-id=${category}>${category.category}</button>`
  })


  filterContainer.innerHTML = categoryBtns
}






filterBtns.forEach((btn)  => {
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


