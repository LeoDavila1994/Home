function filterbtn(){
    const x = document.getElementById("Filtro");
    x.classList.toggle("hidden");
}

function priceBtn(){
    const x = document.getElementById("price-id");
    x.classList.toggle("hidden-one");
}

function categoBtn(){
    const x = document.getElementById("catego-id");
    x.classList.toggle("hidden-two");
}

function dispoBtn(){
    const x = document.getElementById("dispo-id");
    x.classList.toggle("hidden-thre");
}

function ramBtn(){
    const x = document.getElementById("ram-id");
    x.classList.toggle("hidden-thre");
}

function menuBtn() {
    const x = document.getElementById("menu-list");
    x.classList.toggle("hidden-four");
}

function loginBtn() {
    const x = document.getElementById("user-login");
    x.classList.toggle("hidden-five");
}

function carBtn() {
    const x = document.getElementById("car-list");
    x.classList.toggle("hidden-eight");
}

let count = 0;
let countTwo = 0;
 

let cel = [
    {id: 1, brand: `SAMSUNG`, model: `Galaxy S52`, price: 5200, img:"./images/image 1.jpg"},
    {id: 2, brand: `SAMSUNG`, model: `Galaxy A12`, price: 3900, img:"./images/image 3.jpg"},
    {id: 3, brand: `SAMSUNG`, model: `Galaxy A32 (128gb/8gb RAM)`, price: 7000, img:"./images/image 4.jpg"},
    {id: 4, brand: `SAMSUNG`, model: `Galaxy A1`, price: 4500, img:"./images/image 13.jpg"},
    {id: 5, brand: `SAMSUNG`, model: `Galaxy A70`, price: 5300, img:"./images/image 14.jpg"},
    {id: 6, brand: `SAMSUNG`, model: `Galaxy Z fold 3`, price: 19800, img:"./images/image 15.jpg"},
    {id: 7, brand: `SAMSUNG`, model: `Galaxy S21`, price: 16500, img:"./images/image 16.jpg"}    
];

// function generateCardCars(arrayCel) {
//     let html="";
//     for(let i = 0; i < arrayCel.length; i++) {
//         html += ` <div class="car-grid d-grid">
//                     <div class="car-text">
//                         <p class="text-small-car color-light">${arrayCel[i].brand}</p>
//                         <p class="bold text-small padding-01">${arrayCel[i].model}</p>
//                     </div>
//                     <div class="car-count padding-05">
//                         <form action="#">
//                             <label for="lang"></label>
//                             <select name="languages" id="count" class="select bold">
//                                 <option value="0">1</option`
//                                 const container = document.getElementById("container");
//                                 container.innerHTML += html;
//     }
// }

function one(arrayCel,cb) {
    let result = [];
    for(let i = 0; i < arrayCel.length; i++) {
        let arr = cb(arrayCel[i]);
        if(arr){
            result.push(arrayCel[i])
        }
    }
    return result;
}

function as(element) { 
    const input = document.getElementById("1")
    if(count < 1) {
        count = 1
        return element.id == input.value
    }
}

function productOne() {
    let arr = one(cel, as);
    generateCardCars(arr)
}


function es(element) {
    const input = document.getElementById("2")
    if(countTwo < 1) {
        countTwo = 1
        console.log(countTwo)
        return element.id == input.value
    }
}

function productTwo() {
    let er = one(cel, es);
    generateCardCars(er)
}


function generateCardCars(celArray) {
    let html = '';
    for(let i = 0; i < celArray.length; i++) {
        html =` <div class="car-grid d-grid">
                    <div class="img-cel-mini">
                        <img src="${celArray[i].img}" alt="">
                    </div>
                    <div class="car-text">
                        <p class="text-small-car color-light">${celArray[i].brand}</p>
                        <p class="bold text-small padding-01">${celArray[i].model}</p>
                    </div>
                    <div class="car-bin">
                        <a href=""><img src="./images/papeleria.svg" alt="" class="icon-nav"></a>
                    </div>
                    <div class="car-count padding-05">
                        <button class="select bold">${count}</button>
                    </div>
                </div>
                <div class="car-price">
                    <p class="color-light text-small">Total <span class="price-total bold">${celArray[i].price}</span></p>
                </div>` 
    }
    const container = document.getElementById("carritoC");
    container.innerHTML += html;
}

function addCounter(){
    count += 1;
    localStorage.setItem("count", count);
}

function addCounterTwo(){
    countTwo += 1;
    localStorage.setItem("countTwo", countTwo);
}