// VARIABLES
const imageColors = document.querySelector('.image-color');
const colorName = document.querySelector('.color-name');
const itemWithColor = document.querySelector('.item-with-color');
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const randomColor = document.querySelector('.random-color');

// ARRAYS
let colors = [
   'red',
   'blue',
   'indigo',
   'orange',
];

let indexOfColors = colors.map((element, index) => index);

let itemsColor = [
   'tomato',
   'sky',
   'indigo bunting',
   'carrot',
];

let indexOfItemsColor = itemsColor.map((element, index) => index);

// FUNCTIONS

nextBtn.addEventListener('click', nextColor());

const nextColor = () => {
   
}