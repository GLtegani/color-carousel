let array = [
   1,
   2,
   3,
   4,
   5,
   6,
];

let array2 = [
   
   {
      numero: 1,
   },

   {
      numero: 2,
   },

   {
      numero: 3,
   },

   {
      numero: 4,
   },

   {
      numero: 5,
   },

   {
      numero: 6,
   },

];

let puxar = array.includes(5);
let puxar2 = array2.some(element => element.numero == 5);
console.log(array);
console.log(array2);

console.log(puxar);
console.log(puxar2);