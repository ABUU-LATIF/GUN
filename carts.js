import { delivery } from "../delivery.js";
export let cart=JSON.parse(localStorage.getItem('cart'));
if(!cart){
    cart=[{
        productId:'oiewnj,bdsm',
        quantity:1,
        deliveryid:'1'
    }]
}
   
export function savetostorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}
export function addtocart(productId){
    let matchingproducts;
    cart.forEach((cartitem)=>{
   if(cartitem.productId===productId){
    matchingproducts=cartitem;
   }
    });
    if(matchingproducts){
        matchingproducts.quantity +=1;
    }else{
        cart.push({
            productId,
            quantity:1,
            deliveryid:'1',
        })
    }
    savetostorage();
}

export function updatecart(deleteId){
     let newcart=[];
     cart.forEach((cartitem)=>{
         if(cartitem.productId !==deleteId){
            newcart.push(cartitem);
         }
     })
     cart=newcart;
     savetostorage();
}

