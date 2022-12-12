'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano Vinod',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours 
      close: 24,
    },
  },

    //create a function that takes params 
    //adding default parms if this cannot be destructed 
    orderDelivery : function ({starterIndex = 1,mainIndex = 1,time = '12:00',address ='somewhere'}){
      console.log(`${this.starterMenu[starterIndex]} ${this.mainMenu[mainIndex]} ${address} ${time}`);
     },

     orderpastas : function ( int1,int2,int3){
      console.log(`here is your dilicious pastas ${int1},${int2},${int3}`)
     },

     orderPizzas1 : function(mainCourse,...restOnes){
     console.log(mainCourse);
     console.log(restOnes);
     }
};

restaurant.orderDelivery({
  time:'22:30',
  address:'Bangalore',
  mainIndex:2,
  starterIndex:3
})

restaurant.orderDelivery({
  mainIndex:2,
})

const rest1 = {
  name: 'vinod',
  // numberOfGuest: 0, // suppose its zero the || will gives error so we can use NUllis Coesical 
  numberOfGuest: 23,
}

const rest2 = {
  name: 'Vivek',
  Ownber: 'Johan cena'
}

//Actual way to write 

// rest1.numberOfGuest = rest1.numberOfGuest || 10;
// rest2.numberOfGuest = rest2.numberOfGuest || 10;

//shorter  way to write 

// rest1.numberOfGuest ||=10;
// rest2.numberOfGuest ||=10;

//Using Nullsh Coesial 

// rest1.numberOfGuest ??=10;
// rest2.numberOfGuest ??=10;

// rest1.Ownber = rest1.Ownber && '<anonymous>'; //return Undefined old/soution
// rest2.Ownber = rest2.Ownber && '<Anonymous>';

rest1.Ownber &&='<anoymous>'; //return Zeeo es2020 better solution
rest2.Ownber &&='<anyousssss>';



console.log(rest1);
console.log(rest2);






// ObJect Destructuring

// const {openingHours,name,categories} = restaurant;

// console.log(name,openingHours,categories);

// //want to call diffent var name

// const {name:Vinod,openingHours:hours,categories:Books} = restaurant;
// console.log(Vinod,hours,Books);

//Using Default Value

// const {menu = [],starterMenu:StrtMenu = []} = restaurant;
// console.log(menu,StrtMenu);

// //Mutating Variable
// let a = 1000;
// let b = 999;
// const obj = { a: 22, b: 7, c: 14 };

// ({a,b} = obj)

// console.log(a,b);

// //Nested Destructring
//  const {fri:{open : o,close : c}} = openingHours;
//  console.log(o,c);
// -------------------------------------------------------------------------------------------------------------------
// //Array destructing 


// //normal way 
// const arr = [1, 2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const d = arr[3];

// //using destructing 
// const [x, y, z, w] = arr;
// console.log(x, y, z, w);
// console.log(arr);

// //destructin from above array 

// const [first, second] = restaurant.categories;
// console.log(first, second);

// let [first1, , second1] = restaurant.categories;
// console.log(first1, second1);


// //Switcing variable withour destructuring

// // let temp = first1;
// // first1 = second1;
// // second1 = temp;


// // switch varibales with destructing

// [first1, second1] = [second1, first1]
// console.log(first1, second1)

// const [u, v] = restaurant.order(2, 1);
// console.log(u, v);

// //nestd array destructring

// const arrX = [1, 2, [4, 5]];
// const [l, , n] = arrX;
// console.log(l, n);

// const [j, , [k, f]] = arrX;
// console.log(j, k, f);

// // setting default value
// // const [p,q,r] = [8,9]
// const [p = 1, q = 1, r = 1] = [8, 9]
// console.log(p, q, r);




// ///Destucturinng Objects 


// ----------------------------------------------------------------------------------------------------

//spread Operators

// const arr = [1,2,3,4];
// // console.log(1,2,arr[0],arr[1],arr[2],arr[3],arr[4]);
// console.log(1,2,...arr);
// console.log(...arr);

// const newarr = [...restaurant.mainMenu,'gnocci'];
// console.log(newarr);

// //cpy array

// const cpyarr = [...restaurant.mainMenu];
// console.log(cpyarr);

//join two arrays

// const joinArr = [...restaurant.mainMenu,...restaurant.starterMenu];
// console.log(joinArr);

// //iterable array,strings,map not objects

// const str = 'Jonas';
// const StrA=  [...str,'','S.'];
// console.log(StrA);

//not posibble to use inside object literals ${...x} not allowed


//Real world expanle
// const ingredients = [
//   // prompt("will make pasta int1"),
//   // prompt("will make pasta int2"),
//   // prompt("will make pasta int3")
// ];
// console.log(ingredients);

// restaurant.orderpastas(ingredients[0],ingredients[1],ingredients[2]);
// restaurant.orderpastas(...ingredients);
// /

//Object

// const restNew = {since:1994,...restaurant,founder:'vimzz'};
// console.log(restNew);

// //copy

// const restCopy = {...restaurant};
// restCopy.name = 'restorente india';
// console.log(restCopy.name);
// console.log(restaurant.name);




// --------------------------------------------------------------------------------------------------

// Rest operator

//Part 1 ) Destructing 

//spread operator because we are writing in right side of =
// const arr1 = [1,2,...[4,5],6];

// //left side of = reset operator

// const [a,b, ...others] = [1,2,3,4,5];
// console.log(others);

// //use ... on both side \

// const [Focaccia, ,GarlicBread,...others1]= [...restaurant.starterMenu,...restaurant.mainMenu]
// console.log(Focaccia,GarlicBread,others1);

// //onjects 

// const {sat,...othersWeekend} = restaurant.openingHours;
// console.log(othersWeekend);

// //Part2 Fucntions
// const functA = function(...Numbers){
//   let sum = 0;
//   for(let i = 0;i<Numbers.length;i++){
//     sum = sum+Numbers[i]
//   }
//   console.log(sum)


// }

// functA(2,3);
// functA(2,3,4,5,6,7,8,9,1);
// functA(-1,3,-6);
// const x = [1,2,3];
// functA(...x);

// restaurant.orderPizzas1('mushfiqur','rem','ddd',1,2,3,4);
// restaurant.orderPizzas1('mushrooms');

// ----------------------------------------------------------------------------------------------------

console.log('---------------AND--------------')
// shortcircuiting && and || operators

console.log(3 || 'jonas'); // both are true but first value is true so its considered
console.log('' || 'jonas');//first value is falsy
console.log(true || 0);//first value is truthy
console.log(undefined || null);//first value is falsy and both are falsy so last value is considered
console.log(null||undefined||0||''||'jonas');//search for first truthy value 

// suppose we assign restaurant.numbg to to variable then it will res=turn true

restaurant.numberguest =23;

const guest1 = restaurant.numberguest ? restaurant.numberguest : 10;
console.log(guest1);

const guest2 = restaurant.numberguest || 10;
console.log(guest2);

console.log('----------AND----------')

console.log(0 && 'jonas'); //0 is a falsy value if first value is false then shortcircuit will stop and return is
console.log(7 && 'jonas');//Jonas because if first value is truthy then its continues till last truthy
console.log( 7 && 'jonas' && null && 'welcome'); //returns null

if(restaurant.orderPizzas1){
  restaurant.orderPizzas1('mushrooms','spinach');
}

restaurant.orderPizzas1 && restaurant.orderPizzas1('mushrooms1','spinach');


console.log('------------------NULLISH COESIAL operatoRRR-------------');

restaurant.numberguest = 0; // suppose 0 then gives a error as 10 can try with null and undefined for nullish

// const guests = restaurant.numberguest || 10;
//NUllish null and undefined not 0 and ''
const guests = restaurant.numberguest ?? 10;

console.log(guests);
console.log("-----------------Nulllish Coesial------")