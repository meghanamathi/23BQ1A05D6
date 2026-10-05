let prices=[400,500,100,4500,5000,9000];
console.log(prices);
let DiscountedPrices=prices.map((x)=>{
    return x-x/10;
})
let gstPrice=prices.map((x)=>{
    return x+x/100*8;
})
console.log(DiscountedPrices);
console.log(gstPrice)