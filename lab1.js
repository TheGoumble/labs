/*Lab*/
//var set to fav color
const favColor = 'Pink';
console.log(favColor);

//setting up vars to add together
let countBag = 5;
let countShoe = 4;
console.log(countBag + countShoe);

/*bonus*/
const truthIsOutThere = true;
const falseIsNotGood = false;

console.log(truthIsOutThere + falseIsNotGood);
//Bools are 1 & 0 so 1 + 0 = 1

let nameFirst = "John";
let nameMiddle = "Candle";
let nameLast = "Wick";
let nameFull = nameFirst + nameMiddle + nameLast;
console.log(nameFull);

//you can't (+,-,*,/) a number and a string
//will produce NaN
const myName = 'Javier'
const sumTolal = myName * countBag;
 console.log(sumTolal);


/*extra bonus*/

const firstName = 'Javier';
const lastName = 'Vargas';
const fullName = firstName + " " + lastName;
console.log(fullName);

//all uppercase
const fullNameInCap = fullName.toUpperCase();
console.log(fullNameInCap)

//all lowercase
const fullNameInLow = fullName.toLowerCase();
console.log(fullNameInLow)

/*extra extra bonus lab*/

//setting up vars for the prob
const tax = 0.7;
const carWorth = 4500;

//calculating the taxes
const TotTax = carWorth*tax;

//adding the taxes to the carworth
const totalCar = carWorth + TotTax;

//printing the full amount
console.log(`My car is worth $${totalCar}`);
