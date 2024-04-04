// VARIABLES
const imageColors = document.querySelector('.image-color');
const colorName = document.querySelector('.color-name');
const itemWithColor = document.querySelector('.item-with-color');
const txt = document.querySelector('.about');
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const randomColor = document.querySelector('.random-color');



// ARRAYS
let colorsAndItemsColor = [
   
   {
      red: 'red',
      blue: 'blue',
      indigo: 'indigo',
      orange: 'orange',
   },

   {
      tomato: 'tomato',
      sky: 'sky',
      indigoBunting: 'indigo bunting',
      carrot: 'carrot',
   },

];

let currentItem = 0;
// FUNCTIONS

const loadFirstItem = () => {
   
}

const nextColor = () => {
   
   imageColors.style.backgroundColor = colors[currentItem++];
   
   if(currentItem == indexOfColors.length) {
      currentItem = 0;
   };
};


const previousColor = () => {
   imageColors.style.backgroundColor = colors[currentItem--];
   
   if(currentItem < 0) {
      currentItem = indexOfColors.length - 1;
   };

};

window.addEventListener('DOMContentLoaded', loadFirstItem);
nextBtn.addEventListener('click', nextColor);
previousBtn.addEventListener('click', previousColor);
