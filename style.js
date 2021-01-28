function clickChange(buttonId,displayId,costId,price,change){
    const increasedMobileAmount = document.getElementById(buttonId);
    increasedMobileAmount.addEventListener("click",function(){
    let quantity=quantityChange(displayId,change);
    costChange(costId,price,quantity);
});
}
clickChange("mobile-quantity-increase","quantityMobile","mobileCost",1219,+1);
clickChange("mobile-quantity-decrease","quantityMobile","mobileCost",1219,-1);
clickChange("casing-quantity-increase","quantityCasing","casingCost",59,+1);
clickChange("casing-quantity-decrease","quantityCasing","casingCost",59,-1);


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



function quantityChange(id,change){
    let oldQuantity = document.getElementById(id).value;
    oldQuantity = parseInt(oldQuantity);
    let newQuantity = oldQuantity + change;
    if(newQuantity>=0){
        document.getElementById(id).value = newQuantity;
        return newQuantity;
    }else{
        alert("Quantity can not be decreased more")
    }
}
function costChange(id,price,quantity){
    let newCost = price * quantity;
    document.getElementById(id).innerText = newCost ;
}