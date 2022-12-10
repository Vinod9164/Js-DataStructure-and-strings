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




// ObJect Destructuring

const {openingHours,name,categories} = restaurant;

console.log(name,openingHours,categories);

//want to call diffent var name

const {name:Vinod,openingHours:hours,categories:Books} = restaurant;
console.log(Vinod,hours,Books);

//Using Default Value

const {menu = [],starterMenu:StrtMenu = []} = restaurant;
console.log(menu,StrtMenu);

//Mutating Variable
let a = 1000;
let b = 999;
const obj = { a: 22, b: 7, c: 14 };

({a,b} = obj)

console.log(a,b);

//Nested Destructring
 const {fri:{open : o,close : c}} = openingHours;
 console.log(o,c);
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

const arr = [1,2,3,4];
// console.log(1,2,arr[0],arr[1],arr[2],arr[3],arr[4]);
console.log(1,2,...arr);
console.log(...arr);

const newarr = [...restaurant.mainMenu,'gnocci'];
console.log(newarr);

//cpy array

const cpyarr = [...restaurant.mainMenu];
console.log(cpyarr);

//join two arrays

const joinArr = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(joinArr);

//iterable array,strings,map not objects

const str = 'Jonas';
const StrA=  [...str,'','S.'];
console.log(StrA);

//not posibble to use inside object literals ${...x} not allowed





