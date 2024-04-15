if(typeof window !== "undefined"){
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


openShopping.addEventListener('click',()=>{
    body.classList.add('active');
})

closeShopping.addEventListener('click',()=>{
    body.classList.remove('active')
})

let products = [
    {
        id:'1',
        name:'PRODUCT NAME 1',
        image:'1.PNG',
        price:150000
    },
    {
        id:'2',
        name:'PRODUCT NAME 2',
        image:'2.PNG',
        price:130000
    },
    {
        id:'3',
        name:'PRODUCT NAME 3',
        image:'3.PNG',
        price:140000
    },
    {
        id:'4',
        name:'PRODUCT NAME 4',
        image:'4.PNG',
        price:150000
    },
    {
        id:'5',
        name:'PRODUCT NAME 5',
        image:'5.PNG',
        price:110000
    },
    {
        id:'6',
        name:'PRODUCT NAME 6',
        image:'6.PNG',
        price:170000
    },
];

let listCards =[];
function initApp(){
 products.forEach((value,key)=>{
        let newDiv = document.createElement('div')
        newDiv.classList.add('item')
        newDiv.innerHTML = `
        <img src="${value.image}">
        <div class="title">${value.name}</div>
        <div class="price">${value.price}</div>
        <button class="btn" onclick="addToCard(${key})">Add to Card</button>
        `
        list.appendChild(newDiv)
     })
     
}
initApp()


function addToCard(key){
    if(listCards[key] == null){
        listCards[key] =JSON.parse(JSON.stringify(products[key]))
        listCards[key].quantity = 1;

    }
    reloadCard()
}
function reloadCard(){
    listCard.innerHTML = ''
    let count = 0
    let totalPrice = 0
    listCards.forEach((value,key)=>{
        totalPrice = totalPrice + value.price
        count = count + value.quantity;
            
        if(value !=null){
        let newDiv = document.createElement('li')
        newDiv.innerHTML = `
        <div><img src="${value.image}"></div>
        <div>${value.name}</div>
        <div>${value.price.toLocaleString()}</div>
        
        <div>
        <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
        <div class="count">${value.quantity}</div>
        <button class="Btn" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
        
        </div>
        `
        listCard.appendChild(newDiv)
        }
    })
           total.innerText = totalPrice.toLocaleString()
           quantity.innerText = count;
}


function changeQuantity(key,quantity){
if(quantity==0){
    delete listCards[key]
}else{
    listCards[key].quantity = quantity
    listCards[key].price = quantity * products[key].price
}
reloadCard()
}



}