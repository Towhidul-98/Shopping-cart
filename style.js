function clickChange(buttonId,displayId,costId,anotherId,price,change){
    const increasedMobileAmount = document.getElementById(buttonId);
    increasedMobileAmount.addEventListener("click",function(){
    let quantity=quantityChange(displayId,change);
    let cost = costChange(costId,price,quantity);
    let anotherCost = parseInt(document.getElementById(anotherId).innerText);
    displayTotal(cost,anotherCost);
});
}
let mobileCost,casingCost;
mobileCost=clickChange("mobile-quantity-increase","quantityMobile","mobileCost","casingCost",1219,+1);
mobileCost=clickChange("mobile-quantity-decrease","quantityMobile","mobileCost","casingCost",1219,-1);
casingCost=clickChange("casing-quantity-increase","quantityCasing","casingCost","mobileCost",59,+1);
casingCost=clickChange("casing-quantity-decrease","quantityCasing","casingCost","mobileCost",59,-1);


// const increasedMobileAmount = document.getElementById("mobile-quantity-increase");
// increasedMobileAmount.addEventListener("click",function(){
//     quantityChange("quantityMobile",+1);
// });

// const decreasedMobileAmount =document.getElementById("mobile-quantity-decrease");
// decreasedMobileAmount.addEventListener("click",function(){
//     quantityChange("quantityMobile",-1);
// });

// const increasedCasingAmount = document.getElementById("casing-quantity-increase");
// increasedCasingAmount.addEventListener("click",function(){
//     quantityChange("quantityCasing",+1);
// });

// const decreasedCasingAmount =document.getElementById("casing-quantity-decrease");
// decreasedCasingAmount.addEventListener("click",function(){
//     quantityChange("quantityCasing",-1);
// });


// quantity change is done
function quantityChange(id,change){
    let oldQuantity = document.getElementById(id).value;
    oldQuantity = parseInt(oldQuantity);
    let newQuantity = oldQuantity + change;
    if(newQuantity>=0){
        document.getElementById(id).value = newQuantity;
    }else{
        alert("Quantity can not be decreased more");
    }
    return newQuantity;
}
// total cost of one product change
function costChange(id,price,quantity){
    let newCost=0;
    if(quantity<=0){
        document.getElementById(id).innerText = '0' ;
    }else{
        newCost = price * quantity;
        document.getElementById(id).innerText = newCost ;
    }
    return newCost;
}
// total amount change
function displayTotal(mobileCost,casingCost){
    let subTotal=mobileCost+casingCost;
    let tax= Math.floor(0.15*subTotal);
    let total = subTotal+tax;
    document.getElementById("Subtotal").innerText=subTotal;
    document.getElementById("tax").innerText= tax;
    document.getElementById("total").innerText= total;
}