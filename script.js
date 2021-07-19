let carousel = document.querySelector('.carousel');
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');
let position = 0;
let width = 800;
let count = 1;
let index = 0;
carousel.querySelector('.prev').onclick = function () {
  index = index - count;
  position += width * count;
  //если осталось картинок меньше count для сдвига влево
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
  if (index < 0) {
    position = -width * (listElems.length - count);
    list.style.marginLeft = position + 'px';
    index = listElems.length - 1;
  }
};

carousel.querySelector('.next').onclick = function () {
  index = index + count;
  position -= width * count;
  //если осталось картинок меньше count для сдвига вправо
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
  if (index > listElems.length - 1) {
    position = 0;
    list.style.marginLeft = position + 'px';
    index = 0;
  }
};
