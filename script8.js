// 1.Создание списка дел 
// Задача: Создать веб-страницу для списка дел, где каждое дело добавляется пользователем через 
// текстовое поле ввода. Используйте <template> для динамического создания элементов списка дел. 
// Каждый элемент списка должен содержать текст дела и кнопку для его удаления.
// <input type="text" id="taskInput" placeholder="Введитедело...">
// <button id="addTaskBtn">Добавитьдело</button>
// <ul id="taskList"></ul>

// <template id="taskTemplate">
// <li>
// <span class="taskText"></span>
// <button class="deleteTaskBtn">Удалить</button>
// </li>
// </template>


//вытащили див в котором будет храниться наш темплейт 
let onlineTemp = document.querySelector('.templait-online')
console.log(onlineTemp)

//вытащили контент из темплейта
let taskTemplate = document.querySelector('#taskTemplate').content;
console.log(taskTemplate)

//вытащили кнопку добавить
let btnAdd = document.querySelector('#addTaskBtn');
console.log(btnAdd)

// создали переменную для хранения значеений из инпута
let indexTamplete = document.querySelector('#taskInput')
console.log(indexTamplete)



// добавили слушатель клик на кнопку 
btnAdd.addEventListener('click', function () {
    //создали массив для хранения значений инпутов
    let valueInputArr = [];
    //клонировли содержимое темплейт
    const elementTemplate = taskTemplate.querySelector('.user').cloneNode(true);
    console.log(elementTemplate)
    //вытащили тег спан в котором будут отображаться значения из инпутов в хтмл
    let spanTemp = elementTemplate.querySelector('.taskText').cloneNode(true);
    console.log(spanTemp)
    //добавили в созданный массив значения инпутов
    valueInputArr.push(indexTamplete.value)
    //прировняли тег спан в котором отобразим значения инпутов к значениям инпутов
    spanTemp = valueInputArr
    //добавили в склонированный темплейт отображение тега спан со значением инпутов
    elementTemplate.querySelector('.taskText').textContent = spanTemp;

    console.log(valueInputArr)
    console.log(spanTemp)
    //отобразили в диве на хтмл странице
    onlineTemp.append(elementTemplate)




    //добавили функцию онклик на кнопку Delite
    elementTemplate.querySelector('.deleteTaskBtn').onclick = () =>
        //прописали то что будет удаляться
        elementTemplate.remove('.taskText');
});

// 2.Карточки продуктов в интернет-магазине
// Задача: Разработать функционал для отображения карточек товаров в интернет-магазине.
//  Информация о товарах хранится в массиве объектов, где каждый объект содержит название,
//  цену, описание и изображение товара. Используйте <template> для отображения карточек
//  товаров на странице.
// <div id="productContainer"></div>
// <template id="productTemplate">
// <div class="productCard">
// <img class="productImage" src="" alt="Product Image">
// <h3 class="productName"></h3>
// <p class="productPrice"></p>
// <p class="productDescription"></p>
// </div>
// </template>
// constproducts = [

//     // Добавьте другие продукты аналогично
// constproducts = [
//{ name: "Продукт 1", price: "100$", description: "Описание продукта 1", imageUrl: "image1.jpg" },
// ];


let product = [{
    name: 'Мягкая игрушка-bear',
    price: 'Цена: 100$',
    description: 'Производство КНР',
    imageUrl: './img/bear.jpg',
},
{
    name: 'Мягкая игрушка-cat',
    price: 'Цена: 120$',
    description: 'Производство КНР',
    imageUrl: './img/cat.jpg'
},
{
    name: 'Мягкая игрушка-dog',
    price: 'Цена: 110$',
    description: 'Производство КНР',
    imageUrl: './img/dog.jpg'
}];
//вытаскиваем див в котором будем отображать содержимое template
const onlineContainerTemp = document.querySelector('#productContainer');
console.log(onlineContainerTemp);


// наполняем содержимым 
product.map((value) => {
    //вытаскиваем содержимые тега темплейт
    const productTemp = document.querySelector('#productTemplate').content;
    console.log(productTemp);
    // клонируем содержимое тега template 
    let elemProductCardTemp = productTemp.querySelector('.productCard').cloneNode(true);
    console.log(elemProductCardTemp)

    //присваиваем значение 
    elemProductCardTemp.querySelector('.productImage').src = value.imageUrl;
    elemProductCardTemp.querySelector('.productName').textContent = value.name;
    elemProductCardTemp.querySelector('.productPrice').textContent = value.price;
    elemProductCardTemp.querySelector('.productDescription').textContent = value.description;

    onlineContainerTemp.append(elemProductCardTemp);
})


// 3.Форма регистрации с динамическим добавлением полей
// Задача: Создать форму регистрации, где пользователь может добавлять новые поля ввода (например,
//  дополнительные email или номера телефонов) с помощью кнопки "Добавить еще". Каждое новое поле
//   должно создаваться с использованием template элемента.
// <form id="registrationForm">
// <button type="button" id="addFieldBtn">Добавитьещеполе</button>
// <inputtype="submit" value="Зарегистрироваться">
// </form>

// <template id="inputTemplate">
// <input type="text" placeholder="Дополнительнаяи нформация">
// </template>

//вытаскиваем див в котором будем отображать содержимое template
const inputTemplateOnline = document.querySelector('.inputTemplate-online');
console.log(inputTemplateOnline);

//вытаскиваем содержимое тега темплейт
const inputTemplate = document.querySelector('#inputTemplate').content;
console.log(inputTemplate);

//вытаскиваем кнопку addFieldBtn добавить еще, но которую повесим инпут из template
const addFieldBtn = document.querySelector('#addFieldBtn');
console.log(addFieldBtn)

addFieldBtn.addEventListener('click', function () {
    // клонируем содержимое тега template 
    const elementInputTemp = inputTemplate.querySelector('.inputConteiner').cloneNode(true);
    console.log(elementInputTemp);
    // наполняем содержимым 
    elementInputTemp.querySelector('.inputTempl');
    //отображаем на хтмл странице
    inputTemplateOnline.append(elementInputTemp)
})




// 4.Галерея изображений с модальным окном
// Задача: Разработать галерею изображений, где клик по миниатюре открывает полноразмерное
//  изображение в модальном окне. Информация об изображениях хранится в массиве объектов.
//  Используйте <template> для создания миниатюр и модального окна.
// Цель: Научиться создавать интерактивные элементы интерфейса с использованием template
// элементов и модальных окон.
// <div id="gallery"></div>

// <template id="imageTemplate">
// <img class="galleryImage" src="" alt="Gallery Image">
// </template>

// <div id="modal" style="display:none;">
// <img id="modalImage" src="" alt="Modal Image">
// </div>


// constimages = [
//     "image1.jpg",
//     // Добавьте другие изображения аналогично
// ];


// Добавьте другие изображения аналогично

const images = [
    "./img/1ромашки.jpg",
    "./img/2цветы и зефирки.jpg",
    "./img/3синий букет.jpg",
    "./img/4розы.jpg",
    "./img/5цветы в корзине.jpg"
];

//вытаскиваем див в котором будем отображать темплейт в хтмл
const onlineGalleryTemp = document.querySelector('#gallery');
console.log(onlineGalleryTemp);

images.map((value) => {

    //вытаскиваем контент из темплейт
    const imageTemplate = document.querySelector("#imageTemplate").content;
    console.log(imageTemplate);

    //клонируем картинку из темплейт
    let galleryImageTemp = imageTemplate.querySelector('.galleryImage').cloneNode(true);
    console.log(galleryImageTemp);
    //присваиваем значение из массива
    galleryImageTemp.src = value;
    //отображаем на странице
    onlineGalleryTemp.append(galleryImageTemp);
});

//вытащили див модал который будет отображаться
let modal = document.querySelector('#modal');
console.log(modal);
//вытащили все КАРТИНКИ из галереи
let imgTemp = document.querySelectorAll('.galleryImage')
console.log(imgTemp);
//вытащили картинку модального окна, которой нужно присваивать значение
let imgModal = document.querySelector('#modalImage');
console.log(imgModal);



//делаем счетчик вытащив все картинки с помощю querySelectorAll
imgTemp.forEach((value) => {
    //вешаем слушателья на каждое значение картинки из галереи
    value.addEventListener('click', function () {
        //добавляем модальному окну флекс, что бы при нажатии оно отображалось
         modal.setAttribute('style', 'display: flex;');
         //добавляем лежащей внутри картинке значение нажатой картинки
        imgModal.src = value.src;
    })
})


//навешиваем слушателя на модальный див который уже отобразился,
// что бы при клике он пересавал отображаться
modal.addEventListener('click', function () {
    modal.setAttribute('style', 'display:none;');
});


// <template id="imageTemplate">
// <img class="galleryImage" src="" alt="Gallery Image">
// </template>

// <div id="modal" style="display:none;">
// <img id="modalImage" src="" alt="Modal Image">
// </div>

// 5.Система комментариев для блога
// Задача: Реализовать систему добавления комментариев к посту в блоге. Комментарии должны
// вводиться в текстовое поле и добавляться под постом при нажатии кнопки "Отправить".
// Используйте <template> для каждого комментария, поддерживая возможность их динамического
// добавления.

// <div id="comments"></div>
// <input type="text" id="commentInput" placeholder="Напишитекомментарий...">
// <button id="submitComment">Отправить</button>

// <template id="commentTemplate">
// <div class="comment">
// <p class="commentText"></p>
// </div>
// </template>


// //вытаскиваем див в котором будем отображать содержимое template
// const onlineCommentTempl = document.querySelector('.online-commentTempl');
// console.log(onlineCommentTempl);

// //вытаскиваем содержимое тега темплейт
// const commentTemp = document.querySelector('#commentTemplate').content;
// console.log(commentTemp)

// //вытаскиваем кнопку на которую повесимотправку коментариев
// const commentBtn = document.querySelector('#submitComment');
// console.log(commentBtn)
// //вытаскиеваем инпут в который прилетают ззначения
// const inputComment = document.querySelector('#commentInput');
// console.log(inputComment)

// //навешиваем слушателя клик на кнопку
// commentBtn.addEventListener('click', function () {

//     // клонируем содержимое тега template
//     const elemComment = commentTemp.querySelector('.comment').cloneNode(true);
//     console.log(elemComment)
//     //вытаскиваем тег p в котором отобразим комент
//     let textComment = elemComment.querySelector('.commentText').cloneNode(true);
//     console.log(textComment)
//     //cоздаем массив где будут храниться коментарии
//     const arrComment = [];
//     arrComment.push(inputComment.value)
//     console.log(arrComment)
//     //приравниваем тег к значению из массива комент
//     textComment = arrComment;
//     console.log(textComment)
//     //добавляем в склонированное содержимое template
//     elemComment.querySelector('.commentText').textContent = textComment;
//     //отображаем коментарии на странице в хтмл
//     onlineCommentTempl.append(elemComment)
// });