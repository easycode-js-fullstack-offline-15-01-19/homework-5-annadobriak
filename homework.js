// -------------------------- Home work --------------------------
// ------------------------ Dobriak Anna -------------------------
//----------DOM. Доступ к DOM.------------------------------------
/*
<html>
<head></head>
<body>
    <div>
        <p>Text</p>
        <p>Other</p>
        <p>Next</p>
        <p>Last</p>
    </div>
    <div></div>
    <div></div>
</body>
</html>

Для навигации по DOM использовать методы,
которые возвращают только элементы
Зная структуру html, с помощью изученных
методов получить (в консоль):
1. head
*/
console.log(document.head);

//2. body
console.log(document.body);

/*
3. все дочерние элементы body и вывести их в
консоль.
*/
console.log(document.body.children);

// 4. первый div и все его дочерние узлы

console.log(document.body.firstElementChild);

// а) вывести все дочерние узлы в консоль

console.log(document.body.firstElementChild.children);

/*
б) вывести в консоль все дочерние узлы,
кроме первого и последнего
*/

for (let i = 1; i < document.querySelector('div').children.length - 1; i++) {
console.log(document.querySelector('div').children[i]);
}

//--------------DOM. Коллекции.----------------------
/*
<div>
  <article>
    <p>Lorem ipsum dolor sit amet, odio omnesque ius cu, quo ex atqui antiopam. 
    At detracto menandri eos. Duo in causae viderer, graeci <a href="#">reprehendunt</a> has in. 
    Decore <mark>nemore</mark> philosophia te pro, nobis legere causae ex mei, odio putant mentitum ea ius. 
    Vix nostro deserunt explicari eu.</p>
  </article>
</div>
<ul>
  <li><a href="#">Link1</a></li>
  <li><a href="#">Link2</a></li>
  <li><a href="#">Link3</a></li>
  <li><a href="#">Link4</a></li>
</ul><span></span>
<a href="#">Some link</a>
*/

// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли 
// первый элемент родителем для второго:

// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// // true так как первый див является родительским элементом для mark

// isParent(document.querySelector('ul'), document.querySelector('mark'));
// // false так ul НЕ является родительским элементом для mark

function isParent(parent, child) {
    return parent.contains(child);    
}

// 2. Получить список всех ссылок, которые не находятся внутри списка ul

let links = document.links;
for (let index = 0, max = links.length; index < max; index++) {
    if (!links[index].closest('ul')) {
       console.log(links[index]);
    }
}

// 3. Найти элемент, который находится перед и после списка ul

document.querySelector('ul').previousElementSibling;
document.querySelector('ul').nextElementSibling;

// 4. Посчитать количество элементов li в списке

document.querySelector('ul').children.length;

//-----Создание DOM элементов. Добавление элементов на страницу. Работа с атрибутами.----
/*<div>
  <article>
    <p>Lorem ipsum dolor sit amet, odio omnesque ius cu, quo ex atqui antiopam. At detracto menandri eos. Duo in causae viderer, graeci <a href="#">reprehendunt</a> has in. Decore <mark>nemore</mark> philosophia te pro, nobis legere causae ex mei, odio putant mentitum ea ius. Vix nostro deserunt explicari eu.</p>
  </article>
</div>
<ul>
  <li><a href="#">Link1</a></li>
  <li><a href="#">Link2</a></li>
  <li><a href="#">Link3</a></li>
  <li><a href="#">Link4</a></li>
</ul><span></span>
<a href="#">Some link</a>
*/

// 1. Найти параграф и получить его текстовое содержимое (только текст!)

document.querySelector('p').textContent;


// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию 
// (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

function dom(node) {

  return { 
    name: node.nodeName,
    type: node.nodeType,
    children: node.childNodes
  };
}

dom(document.documentElement)

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) 
// ---> ["Link1", "Link2", "Link3"]

let ul = document.querySelector('ul').children;
let getTextFromUl = [];
  for (let i = 0; i < ul.length; i++) {
    getTextFromUl.push(ul[i].textContent);
  }
console.log(getTextFromUl);

// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). 
// Конечный результат: -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

let paragraphs = document.querySelector('p');
  for (let i = 0; i < paragraphs.childNodes.length; i++) {
      paragraphs.childNodes[i].data;
      paragraphs.childNodes[i].data = '-text-';
  }


//----------------Атрибуты элементов. ----------------

// 1. Найти в коде список ul и добавить класс “list”
// console.log(document.querySelector('ul').classList.add('list'));

let list = document.querySelector('ul').classList.add('list');

// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link

let link1 = document.querySelector('ul ~ a').setAttribute('id', 'link');

// 3. На li через один (начиная с самого первого) установить класс “item”

let li = document.querySelectorAll('li');

for (let i = 0; i < li.length; i++) {
  if ([i+1] % 2) {
    let k = li[i].classList.add('item');
  }
}

// 4. На все ссылки в примере установить класс “custom-link”

let customLinks = document.links;
for (let i = 0; i < customLinks.length; i++) {
  customLinks[i].setAttribute('class', 'custom-link');
}

//--------------Создание и добавление узлов и элементов.---------------
// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
// <ul>
// <li><a href="#">Link1</a></li>
// ...
// <li class=”new-item”>item 5</li>
// <li class=”new-item”>item 6</li>
// </ul>
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

let ul2 = document.querySelector('ul');
let childLength = ul2.children.length;
let newItem = childLength + 2;

for (let i = childLength; i < newItem; i++) {
  ul2.insertAdjacentHTML('beforeend', `<li>Item ${i+1}</li>`);
}

// 2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong 
//(в каждую ссылку один - strong). 

let strong = document.getElementsByTagName('a');

for (let i = 0; i < strong.length; i++) {
  let strongA = strong[i].closest('ul');

  if (strongA) {
    strong[i].insertAdjacentHTML('beforeend', '<strong></strong>');
  }
};

// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами).
// В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement. 

let body1 = document.body;
let img = document.createElement('img');
img.setAttribute('src', 'img/otkrytka.gif');
img.setAttribute('alt', 'Скоро весна');
document.body.insertBefore(img, document.body.firstChild);

// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green

let mark = document.querySelector('mark');
let green = document.createElement('green');
green.className = "green";
green.innerHTML = "green";
mark.appendChild(green);

// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)

let ul5 = document.querySelector('ul');
let li5 = document.querySelectorAll('ul li');
let textli = [];

li5.forEach(function (el) {
  textli.push(el.textContent);
});

textli.sort(function (prev, next) {
  return prev > next ? -1 : 1;
});

ul5.innerHTML = '';

textli.forEach(function (text) {
  ul5.insertAdjacentHTML('beforeend', `<li>${text}</li>`);
});









