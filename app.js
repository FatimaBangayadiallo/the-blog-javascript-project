const fashion = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/29744310/pexels-photo-29744310/free-photo-of-elegant-woman-in-vibrant-pink-dress-with-turban.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'long dress',
    raison: 'seven reason why long dress is awesome',
    info: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti animi rem unde enim tenetur perferendis!',
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/29737785/pexels-photo-29737785/free-photo-of-elegant-woman-in-red-dress-posing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'cherie regarde mon do',
    raison: 'this type are really attractif',
    info: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti animi rem unde enim tenetur perferendis!',
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/356170/pexels-photo-356170.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'short dress',
    raison: 'is just amazing to feel your body free',
    info: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti animi rem unde enim tenetur perferendis!',
  },
  {
    id: 4,
    img: 'https://images.pexels.com/photos/257849/pexels-photo-257849.jpeg?auto=compress&cs=tinysrgb&w=600',
    type: 'robe courte',
    raison: ' reason why robe courte is awesome',
    info: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti animi rem unde enim tenetur perferendis!',
  },
  {
    id: 5,
    img: 'https://images.pexels.com/photos/29710227/pexels-photo-29710227/free-photo-of-young-woman-reading-outdoors-in-tehachapi-spring.jpeg?auto=compress&cs=tinysrgb&w=600',
    type: 'white dress',
    raison: 'seven reason why long dress is awesome',
    info: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti animi rem unde enim tenetur perferendis!',
  },
];

console.log(fashion);

//let seletc the items in the dom

const img = document.getElementById('image');
const type = document.getElementById('type');
const raison = document.getElementById('raison');
const information = document.getElementById('information');

//lets select the btns
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const randomBtn = document.querySelector('.random-btn');
//let initialoze the first item inside our array

let currentItem = 0;

//lets create a showFachion first

const showFachion = function () {
  const item = fashion[currentItem];
  img.src = item.img;
  type.textContent = item.type;
  raison.textContent = item.raison;
  information.textContent = item.info;
};

//the call back function
const cbLoad = function () {
  showFachion();
};

//add the domcontentload event when the window load

window.addEventListener('DOMContentLoaded', cbLoad);

//add event listeners on the prev and next btn

const prevCb = function () {
  console.log('hello there');
  currentItem--;
  if (currentItem < 0) {
    currentItem = fashion.length - 1;
  }
  showFachion();
};
const nextCb = function () {
  console.log('hello');
  currentItem++;
  if (currentItem > fashion.length - 1) {
    currentItem = 0;
  }
  showFachion();
};

prevBtn.addEventListener('click', prevCb);
nextBtn.addEventListener('click', nextCb);

randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * fashion.length);
  showFachion();
});
