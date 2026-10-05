//literal way
let arr = [10, 20, 30, 40, 50, 60];
console.log(arr);

//using new key word
const skills = new Array("java", "javascript", `python`);
console.table(skills);

console.log("------------------------------");
//Array Inbuilt Functions
let productPrices = [400, 5240, 7120, 5212, 552, 12, 4510];
console.log(productPrices);

productPrices.push(500, 5011, 612, 851); //insert new elements at last index
productPrices.push(...arr); //ES6
console.log(productPrices);

productPrices.pop(); //remove last element in array
console.log(productPrices);

productPrices.unshift("hello", true); //insert new elements at first
console.log(productPrices);

productPrices.shift(); //remove first element in array
console.log(productPrices);

productPrices.splice(0, 4);
console.log(productPrices);

productPrices.splice(5, 3);
console.log(productPrices);

productPrices.splice(5, 0, null, "java", 1500);
console.log(productPrices);

productPrices.splice(1, productPrices.length - 2, "Javascript");
console.log(productPrices);

console.log(productPrices.slice(1, 3));
console.log(productPrices.reverse());
console.log(productPrices.sort());

let arr1 = [9, 12, 4, 55, 64, 8];
let str="Javascript";

//for-in loop - arrays /strings
for (index in str) {
  console.log(index);
}
//for-of loop -arrays /strings
for (val of str) {
  console.log(val);
}

//for-each loop
arr1.forEach((val,inx,newArr)=>{
    console.log(val,"->",inx,"->",newArr);
});

console.log("-------prices-------");

//map function 
let prices=[400,500,100,4500,5000,9000];
console.log(prices);

let DiscountedPrices=prices.map((x)=>{
    return x-x/10;
})
let gstPrice=prices.map((x)=>{
    return x+x/100*8;
})

console.log(DiscountedPrices);
console.log(gstPrice);

//filter function
const filteredDiscountedPrices=DiscountedPrices.filter((x)=>{
    return x>=500&& x<=5000
})
console.log(filteredDiscountedPrices);

//reduce 
const totalPrice=prices.reduce((acl, val)=>{
    return acl+val;
}, 500)
console.log(totalPrice);


console.log(prices.join(" "));





