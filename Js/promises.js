const cart = ["Kurta","Paijama","Shirt","Pants"];
createOrder(cart)
.then(function(orderId){
   console.log("Order is created with orderID", orderId);
   return orderId;
})
.then(function(orderId){
    return processToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
  console.log(err.message);
});


//Promise Producer
function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
     // createOrder
     //validateCart
     // orderId
     if(!validateCart(cart)){
        const err = new Error("cart is not valid")
        reject(err);
     }
     // logic to createOrder
     const orderId = "12345";
     if(orderId){
        setTimeout(function(){
            resolve(orderId);
        },5000);
     }
    });

    return pr;
}

function validateCart(cart){
    return true;
}

function processToPayment(orderId){  
  console.log("Please Proceed to payment for order ID :", orderId );
  return new Promise(function (resolve,reject){
    resolve("Payment Successfull");
  });

}