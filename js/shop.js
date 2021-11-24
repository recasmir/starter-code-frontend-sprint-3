// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1 - Before refactoring. Loop for to the array products to get the item to add to cart. Add found product to the cartList array.
// function buy(id) {
//     for(let product of products){
//         if(id == product.id){
//             cartList.push(product);
//             // console.log(cartList);
//             console.log(cartList);
//             calculateSubtotals();
//             return
//         }
//     }
// };

// Exercise 2
function cleanCart() {
    cart = []; //cartList =[] before refactoring
};

// Exercise 3

function calculateSubtotals() {
    for (let category in subtotal){
        subtotal[category].value=0;
    };
    for(let product of cart){
        subtotal[product.type].value += product.price*product.quantity;
        // console.log(product.price);
    };  
 //console.log(subtotal);
 calculateTotal();
};

// Exercise 4
function calculateTotal() {
    total=0;
    for(let category in subtotal){
        //console.log(subtotal[category].value);
        total += subtotal[category].value;
    }
    //console.log(total);
    shoppingListTotal.innerHTML=`\$${total}`;

    //generateCart();
    addToCart();
};

// Exercise 5 - That's the one used before refactoring. Cart with quantities.
// function generateCart() {
//     cart = [];
//     for(let product in cartList){
//         if(cart.includes(cartList[product])){
//             cartList[product].quantity ++;
//             cartList[product].subtotal=cartList[product].price*cartList[product].quantity;
//             applyPromotionsCart();
//            }else{
//             cart.push(cartList[product]);
//             cart[cart.length-1].quantity=1;
//             cart[cart.length-1].subtotal=cart[cart.length-1].price;
//             cart[cart.length-1].subtotalWithDiscount=0;
//         } 
//     }
//     console.log(cart);
// };
    

// Exercise 6 - Apply promotions to each item in the array "cart"
function applyPromotionsCart() {
    for(let product of cart){
        if(product.id == 1 && product.quantity >= 3){
            let newPrice = 10;
            product.subtotalWithDiscount = product.quantity*newPrice;
        }else if(product.id == 3 && product.quantity >= 10){
            let newPrice = (product.price * 2)/3;
            let newPriceRound = newPrice.toFixed(2);
            product.subtotalWithDiscount = product.quantity*newPriceRound;
        }else{
            product.subtotalWithDiscount = product.quantity*product.price;
        }
    }
    //console.log(cart); 
};

// Exercise 7 -function after refactoring - we've joined buy() & generateCart()

function addToCart(id) {
    for(let product of products){
        if(id == product.id){
            if(cart.includes(product)){
                product.quantity ++;
                product.subtotal=product.price*product.quantity;
               }else{
                cart.push(product);
                cart[cart.length-1].quantity=1;
                cart[cart.length-1].subtotal=cart[cart.length-1].price;
                cart[cart.length-1].subtotalWithDiscount=cart[cart.length-1].price;
            } 
            //console.log(cart);
            applyPromotionsCart();
            calculateSubtotals();
        }
    }
};

function buy(id){
    addToCart(id);
};

// Exercise 9
function removeFromCart(id) {
    for (let product of cart){
        if(id == product.id){
            if(product.quantity == 1){
                cart.splice(cart.indexOf(product),1);
            }else{
            product.quantity--;
            product.subtotal = product.price*product.quantity;
            applyPromotionsCart();
            }
            //console.log(cart);
        }
    }
    calculateSubtotals();
    emptyShoppingList();
    printCart(id);
};

function addToShoppingList(id) {
    for (let product of cart){
        if(id == product.id){
            product.quantity++;
            product.subtotal = product.price*product.quantity;
            applyPromotionsCart();
            //console.log(cart);
        }
    }
    calculateSubtotals();
    emptyShoppingList();
    printCart(id);
};


// Exercise 10 - Fill the shopping cart modal manipulating the shopping cart dom.

let shoppingList = document.getElementById('shoppingList');
let shoppingListQuantity = document.getElementById('shoppingListQuantity');
let shoppingListSubtotal = document.getElementById('shoppingListSubtotal');
let shoppingListBtn = document.getElementById('shoppingListBtn');
let shoppingListTotal = document.getElementById('shoppingListTotal');
let addShoppingListBtn = document.getElementById('addShoppingListBtn');
let listItem;
let listItemQuantity = 0;
let listItemSubtotal = 0;
let removeItem;
let addItem;

function printCart() {
    
    addToCart(); //generateCart() before refactoring
    for(let product of cart){
        listItem = document.createElement('li');
        listItem.innerHTML = product.name;
        shoppingList.appendChild(listItem);

        listItemQuantity = document.createElement('li');
        listItemQuantity.innerHTML = product.quantity;
        shoppingListQuantity.appendChild(listItemQuantity);

        listItemSubtotal = document.createElement('li');
        listItemSubtotal.innerHTML = product.subtotalWithDiscount;
        shoppingListSubtotal.appendChild(listItemSubtotal);

        removeItem = document.createElement('button');
        removeItem.style.marginBottom = '3px';
        removeItem.innerHTML = '-';
        shoppingListBtn.appendChild(removeItem);
        removeItem.addEventListener('click', (event) => {
            removeFromCart(product.id);
          });
        
        addItem = document.createElement('button');
        addItem.style.marginBottom = '3px';
        addItem.innerHTML = '+';
        addShoppingListBtn.appendChild(addItem);
        addItem.addEventListener('click', (event) => {
            addToShoppingList(product.id);
        });
        
    }
    calculateTotalWithDiscount();
    calculateTotal();

};

//removeItem.addEventListener('click', removeFromCart(product.id));
// removeItem.onclick = removeFromCart(product.id);
//removeItem.setAttribute('click', removeFromCart(product.id));


function calculateTotalWithDiscount(){
    let totalWithDiscount=0;
    for(let product of cart){
        totalWithDiscount += product.subtotalWithDiscount;
    }
    document.getElementById('shoppingListTotalWithDiscount').innerHTML=`\$${totalWithDiscount}`;

}

function emptyShoppingList(){
    shoppingList.innerHTML='';
    shoppingListQuantity.innerHTML='';
    shoppingListSubtotal.innerHTML='';
    shoppingListBtn.innerHTML='';
    addShoppingListBtn.innerHTML='';
    shoppingListTotal.innerHTML='';
    shoppingListTotalWithDiscount.innerHTML='';
};


