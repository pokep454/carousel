let carousel = document.querySelector('.carousel');
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');
let position = 0;
let width = 700;
let count = 1;

carousel.querySelector('.prev').onclick = function () {
  position += width * count;
  //если осталось картинок меньше count для сдвига влево
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function () {
  position -= width * count;
  //если осталось картинок меньше count для сдвига вправо
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};
