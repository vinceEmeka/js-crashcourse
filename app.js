//currency converter
//$AUD to $USD formular: 
// AUD = USD * 1.5

let USD = 1200;
let AUD = USD * 1.5;
// AUD = 1000;
console.log(AUD);

//conditonals----------------
let membership = true;

if (membership === true) {
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

for (let i = 1; i <= 15; i++) {
  // console.log(i);
  if (i % 5 === 0) {
    console.log(`${i} - Frontend Asap`);
  }
  else if (i % 2 === 0) {
    console.log(`${i} - Frontend`);
  } else {
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


// ARRAYS 
// Accessing elements in an array 
//last element of an array
let array = ["20", '15', '10', '30'];

console.log(array[array.length - 1]);


//Array methods 
array.push('bread');
console.log(array);

// let filteredArray = array.filter((element) => {
// console.log(element);
// if(element <= 15) {
// return true
// }

// });
let filteredArray = array.filter(element => {
  return element <= 15;
});

console.log(filteredArray);

// EXERCISE

let ageArray = [18, 20, 16, 15, 21];

let underaged = ageArray.filter((element) => element >= 18);

console.log(underaged);

//exercise2

let ageArray2 = [16, 17, 14, 15, 19];

let aged = ageArray2.filter((element) => element >= 18);
console.log(aged);

//exercise3

let array3 = [20, 22, 26, 16, 20];

let filteredArray3 = array3.filter((element) => element >= 18);

// console.log(filteredArray3);

//LOOPING Through an ARRay of elements using a for loop

let array4 = [20, 22, 26, 16, 20];
let newArray = [];

for (let i = 0; i < array4.length; i++) {
  if (array4[i] >= 18) {
    newArray.push(array4[i]);
  }
}

console.log(newArray);


//ARRAY METHOD .MAP non-mutating method

let array5 = [1, 2, 3, 4, 5]

let newarray5 = array5.map((element) => {
  console.log(element);
  return null
});

console.log(array5);
console.log(newarray5);

// EXERCISE .MAP

let dollars = [10, 20, 30, 40];

let Audolllars = dollars.map((element) => {
  console.log(element);
  return element * 1.5;
});
console.log(Audolllars);

let usdollar = [100, 150, 35];

let usdtoAud = usdollar.map((element) => element * 1.5);

console.log(usdtoAud);

// USING LOOP IN PLACE OF .map 

let auDollars = [];
let usDollars = [100, 150, 35];

for (let i = 0; i < usDollars.length; i++) {
  auDollars.push(usDollars[i] * 1.5);
}

console.log(auDollars);

//OBJECTS

let user = [{
  email: "example@gmail.com",
  password: '1234',
  name: "john doe",
  discord: "examplediscord"
}
]

// console.log(user.email);

// console.log(user.name[0]);

//sign up user challenge


function signUP(applicant) {
  user.push(applicant)
}

signUP({
  email: "example@gmail.com",
  password: '1234',
  name: "Ada",
  discord: "Johnada",
  sub: "vip",
  lessonscompleted: [1, 2, 3, 4]
}
);

console.log(user);

//DOM
console.log(document.querySelector('#heading'));

//change content / html
document.querySelector('h1').innerHTML += "ASAP Frontend";

//change css
document.querySelector('h1').style.fontSize = '20px';


function changeBtnToGreen() {
  document.querySelector('button').style.backgroundColor = 'green'
}

//change class names using javascript
