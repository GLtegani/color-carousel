// VARIABLES
const imageColors = document.querySelector('.image-color');
const colorName = document.querySelector('.color-name');
const itemWithColor = document.querySelector('.item-with-color');
const txt = document.querySelector('.about');
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const randomColor = document.querySelector('.random-color');

let index = 1;


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
const nextColor = () => {
   imageColors.style.backgroundColor = colors[index++];

   if(index == indexOfColors.length) {
      index = 0;
   };
};

const previousColor = () => {
   imageColors.style.backgroundColor = colors[index--];

   if(index == -1) {
      index = indexOfColors.length;
   };

}

nextBtn.addEventListener('click', nextColor);
previousBtn.addEventListener('click', previousColor);
