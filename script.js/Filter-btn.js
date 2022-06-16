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
 
let cel = [
    {id: 1, brand: `SAMSUNG`, model: `Galaxy S52`, price: 5200, img:"./images/image 1.jpg"},
    {id: 2, brand: `SAMSUNG`, model: `Galaxy A12`, price: 3900, img:"./images/image 3.jpg"},
    {id: 3, brand: `SAMSUNG`, model: `Galaxy A32 (128gb/8gb RAM)`, price: 7000, img:"./images/image 4.jpg"},
    {id: 4, brand: `SAMSUNG`, model: `Galaxy A1`, price: 4500, img:"./images/image 13.jpg"},
    {id: 5, brand: `SAMSUNG`, model: `Galaxy A70`, price: 5300, img:"./images/image 14.jpg"},
    {id: 6, brand: `SAMSUNG`, model: `Galaxy Z fold 3`, price: 19800, img:"./images/image 15.jpg"},
    {id: 7, brand: `SAMSUNG`, model: `Galaxy S21`, price: 16500, img:"./images/image 16.jpg"}    
];

function generateCardCars(celArray) {
    let html = '';
    for(let i = 0; i < celArray.length; i++) {
        html += `<div class="car-grid d-grid" id="product1">
                    <div class="img-cel-mini">
                        <img src="${celArray[i].img}" alt="">
                    </div>
                    <div class="car-text">
                        <p class="text-small-car color-light">${celArray[i].brand}</p>
                        <p class="bold text-small padding-01">${celArray[i].model}</p>
                    </div>
                     <div class="car-bin">
                        <button onclick="deleteOne()" value="${celArray[i].id}" id="btn-de"><img src="./images/papeleria.svg" alt="" class="icon-nav"></button>
                    </div>
                    <div class="car-count padding-05">
                        <form action="#">
                            <label for="lang"></label>
                            <select name="languages" id="count" class="select bold">
                                <option value="0">1</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                                <option value="3">4</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div class="car-price">
                    <p class="color-light text-small">Total: ${celArray[i].price}<span class="price-total bold"></span></p>
                </div>` 
    }
    const container = document.getElementById("carritoC");
    container.innerHTML = html;
}

function countTotal(result) {
    let html="";
    for(let i = 0; i < result.length; i++) {
        html = `<div>
                    <p>Precio total: ${result[i].price}</p>
                </div>`
    }
    const container = document.getElementById("price-total")
    container.innerHTML = html;
}

let result = [];

function total(arraySum) {
    for(let i = 0; i < arraySum.length; i++) {
        console.log("Hola")
    }
}

function addProduct(arrayCel,cb) {
    for(let i = 0; i < arrayCel.length; i++) {
        let arr = cb(arrayCel[i]);
        if(arr){
            result.push(arrayCel[i])
        }
    }
    return result
}

// Product one
function a(element) {
    const input = document.getElementById("producto");
    return element.id == input.value
}

function productOne() {
    let arr = addProduct(cel, a);
    generateCardCars(arr)
    countTotal(arr)
}

// Product two
function b(element) {
    const input = document.getElementById("product2")
    return element.id == input.value
}

function productTwo() {
    let er = addProduct(cel, b);
    generateCardCars(er)
    countTotal(er)
}
// // Product three
function productThree() {
    let er = addProduct(cel, c);
    generateCardCars(er)
    countTotal(er)
}

function c(element) {
    const input = document.getElementById("btn-3")
    return element.id == input.value
}

// Product four
function productFour() {
    let er = addProduct(cel, d);
    generateCardCars(er)
}

function d(element) {
    const input = document.getElementById("btn-4")
    return element.id == input.value
}

// Producto five
function productFive() {
    let er = addProduct(cel, e);
    generateCardCars(er)
}

function e(element) {
    const input = document.getElementById("btn-5")
    return element.id == input.value
}

// Producto six
function productSix() {
    let er = addProduct(cel, f);
    generateCardCars(er)
}

function f(element) {
    const input = document.getElementById("btn-6")
    return element.id == input.value
}

// Producto seven
function productSeven() {
    let er = addProduct(cel, g);
    generateCardCars(er)
}

function g(element) {
    const input = document.getElementById("btn-7")
    return element.id == input.value
}


// Papelera
function deleteProduct(arrayCel,cb) {
    for(let i = 0; i < arrayCel.length; i++) {
        let arr = cb(arrayCel[i])
        if(arr){
            result.pop()
            result.pop()
            result.pop()
            result.pop()
            result.pop()
            result.pop()
            result.pop()
            result.pop()
    }
}
    return result;
}

// Delete one
function are(element) {
    return element.id;
}

function deleteOne() {
    let as = deleteProduct(result, are)
    generateCardCars(as)
}