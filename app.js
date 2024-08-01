//currency converter
//$AUD to $USD formular: 
// AUD = USD * 1.5

let USD = 1200;
let AUD = USD * 1.5;
// AUD = 1000;
console.log(AUD);

//conditonals----------------
let membership = true;

if (membership === true){
 console.log('show video');
}

let loggedIn = true;
let hasMembership = true;

let answ = loggedIn && hasMembership ? 'show vid' : 'no vid';

console.log(answ);


// LOOPS---------------------
//DRY - DON'T REPEAT YOURSELF

let counter = 1;
while (counter <= 20) {
console.log(counter);
counter = counter + 1;
}

 for(let i = 1; i <= 15; i++) {
 // console.log(i);
 if(i % 5 === 0) {
  console.log(`${i} - Frontend Asap`);
 }
 else if(i % 2 === 0) {
console.log(`${i} - Frontend`);
 }else {
  console.log(`${i} - Asap`);
 }

}
// for (let index = 0; index < array.length; index++) {
//  const element = array[index];
 
// }
let str = "ASAP Frontend";

for (let i = 0; i < str.length; i++) {
console.log(str[i]);
}

// FUNCTIONS

// function convertUsdToAud(usd) {
//  return usd * 1.5;
// }

//arrow function
const convertUsdToAud = (usd) => {
  return usd * 1.5;
}

console.log(convertUsdToAud(1000));
console.log(convertUsdToAud(500));
console.log(convertUsdToAud(200));





