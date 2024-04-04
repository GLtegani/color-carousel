// VAR
const imageColors = document.querySelector('.image-color');
const colorName = document.querySelector('.color-name');
const itemWithColor = document.querySelector('.item-with-color');
const txt = document.querySelector('.about');
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const randomColor = document.querySelector('.random-color');

// SET STARTING ITEM
let currentItem = 0;


// INFO
let colorsAndItemsColor = [
   
   {
      color: 'red',
      item: 'tomato',
      text: `This is a text about colors, Im doing a
      carrousel with HTML, CSS AND JS and I need
      to make a dynamic text. TEXT: ONE`,
   },

   {
      color: 'blue',
      item: 'sky',
      text: `This is a text about colors, Im doing a
      carrousel with HTML, CSS AND JS and I need
      to make a dynamic text. TEXT: TWO`,
   },

   {
      color: 'indigo',
      item: 'indigo bunting',
      text: `This is a text about colors, Im doing a
      carrousel with HTML, CSS AND JS and I need
      to make a dynamic text. TEXT: THREE`,
   },

   {
      color: 'orange',
      item: 'carrot',
      text: `This is a text about colors, Im doing a
      carrousel with HTML, CSS AND JS and I need
      to make a dynamic text. TEXT: FOUR`,
   },

   {
      color: 'aqua',
      item: 'water',
      text: `This is a text about colors, Im doing a
      carrousel with HTML, CSS AND JS and I need
      to make a dynamic text. TEXT: FIVE`,
   }, 
];

// LOAD INITIAL ITEM
window.addEventListener('DOMContentLoaded', function() {
   
   showPerson(currentItem);

});

// SHOW PERSON BASED ON ITEM

const showPerson = (person) => {
   
   const objects = colorsAndItemsColor[person];
   imageColors.style.backgroundColor = objects.color;
   colorName.style.color = objects.color;
   colorName.textContent = objects.color;
   itemWithColor.style.color = objects.color;
   itemWithColor.textContent = objects.item;
   txt.textContent = objects.text;

};

// SHOW NEXT PERSON

const nextColor = () => {
   
   currentItem++;

   if(currentItem > colorsAndItemsColor.length - 1) {
      
      currentItem = 0;
   };

   showPerson(currentItem);

};


// SHOW PREV PERSON

const previousColor = () => {
   
   currentItem--;

   if(currentItem < 0) {
      
      currentItem = colorsAndItemsColor.length - 1;
   };

   showPerson(currentItem);

};

// SHOW RANDOM COLOR

const showRandomizedColor = () => {

   currentItem = Math.round(Math.random() * colorsAndItemsColor.length);

   showPerson(currentItem);

};


// EVENTS
nextBtn.addEventListener('click', nextColor);
previousBtn.addEventListener('click', previousColor);
randomColor.addEventListener('click', showRandomizedColor);
