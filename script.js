// VAR
const imageColors = document.querySelector('.image-color');
const colorName = document.querySelector('.color-name');
const itemWithColor = document.querySelector('.item-with-color');
const txt = document.querySelector('.about');
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const randomColor = document.querySelector('.random-color');
const form = document.querySelector('form');
const colorInput = document.querySelector('#color-input');
const itemInput = document.querySelector('#item-input');
const textInput = document.querySelector('#text-input');
const formBtn = document.querySelector('.send-color-info');


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

   {
      color: 'darksalmon',
      item: 'salmon',
      text: `This is a text about colors, Im doing a
      carrousel with HTML, CSS AND JS and I need
      to make a dynamic text. TEXT: SIX`,
   },

];

// LOAD INITIAL ITEM
window.addEventListener('DOMContentLoaded', function() {
   
   showPerson(currentItem);

});

// SHOW PERSON BASED ON ITEM
const showPerson = (item) => {
   
   const objects = colorsAndItemsColor[item];
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

// USER FORM
const sendUserInfo = (event) => {
   
   event.preventDefault();
   
   let userColorInput = colorInput.value;
   let userItemInput = itemInput.value;
   let userTextInput = textInput.value;
   let colorAlredyExist = colorsAndItemsColor.some(element => element.color == userColorInput);
   let empty = '';

   if(colorAlredyExist) {
      
      colorInput.style.borderColor = 'red';
      formBtn = empty;

   } else if(userItemInput == empty && userTextInput == empty) {
      
      itemInput.style.borderColor = 'red';
      textInput.style.borderColor = 'red';
      formBtn = empty;
      
   } else if(userItemInput == empty) {

      itemInput.style.borderColor = 'red';
      textInput.style.borderColor = 'rgb(53, 175, 212)';
      textInput.value = empty;
      formBtn = empty;

   } else if(userTextInput == empty) {

      textInput.style.borderColor = 'red';
      itemInput.style.borderColor = 'rgb(53, 175, 212)';
      itemInput.value = empty;
      formBtn = empty;

   } else {

      colorInput.style.borderColor = 'rgb(53, 175, 212)';
      itemInput.style.borderColor = 'rgb(53, 175, 212)';
      textInput.style.borderColor = 'rgb(53, 175, 212)';
    
      colorsAndItemsColor.push({

         color: userColorInput,
         item: userItemInput,
         text: userTextInput,
         
      });

      colorInput.value = '#000000';
      textInput.value = empty;
      itemInput.value = empty;

   };

};

// EVENTS
nextBtn.addEventListener('click', nextColor);
previousBtn.addEventListener('click', previousColor);
randomColor.addEventListener('click', showRandomizedColor);
formBtn.addEventListener('click', sendUserInfo);

