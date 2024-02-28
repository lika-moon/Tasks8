// 1.Создание списка дел 
let onlineTemp = document.querySelector('.templait-online')
let taskTemplate = document.querySelector('#taskTemplate').content;
let btnAdd = document.querySelector('#addTaskBtn');
let indexTamplete = document.querySelector('#taskInput')

btnAdd.addEventListener('click', function () {
    let valueInputArr = [];
    const elementTemplate = taskTemplate.querySelector('.user').cloneNode(true);
    let spanTemp = elementTemplate.querySelector('.taskText').cloneNode(true);
    valueInputArr.push(indexTamplete.value)
    spanTemp = valueInputArr
    elementTemplate.querySelector('.taskText').textContent = spanTemp;
    onlineTemp.append(elementTemplate)
    elementTemplate.querySelector('.deleteTaskBtn').onclick = () =>
        elementTemplate.remove('.taskText');
});

// 2.Карточки продуктов в интернет-магазине
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
const onlineContainerTemp = document.querySelector('#productContainer');

product.map((value) => {
    const productTemp = document.querySelector('#productTemplate').content;

    let elemProductCardTemp = productTemp.querySelector('.productCard').cloneNode(true);

    elemProductCardTemp.querySelector('.productImage').src = value.imageUrl;
    elemProductCardTemp.querySelector('.productName').textContent = value.name;
    elemProductCardTemp.querySelector('.productPrice').textContent = value.price;
    elemProductCardTemp.querySelector('.productDescription').textContent = value.description;

    onlineContainerTemp.append(elemProductCardTemp);
})


// 3.Форма регистрации с динамическим добавлением полей
const inputTemplateOnline = document.querySelector('.inputTemplate-online');
const inputTemplate = document.querySelector('#inputTemplate').content;
const addFieldBtn = document.querySelector('#addFieldBtn');

addFieldBtn.addEventListener('click', function () {
    const elementInputTemp = inputTemplate.querySelector('.inputConteiner').cloneNode(true);
    elementInputTemp.querySelector('.inputTempl');
    inputTemplateOnline.append(elementInputTemp)
})

// 4.Галерея изображений с модальным окном
const images = [
    "./img/1ромашки.jpg",
    "./img/2цветы и зефирки.jpg",
    "./img/3синий букет.jpg",
    "./img/4розы.jpg",
    "./img/5цветы в корзине.jpg"
];

const onlineGalleryTemp = document.querySelector('#gallery');

images.map((value) => {
    const imageTemplate = document.querySelector("#imageTemplate").content;

    let galleryImageTemp = imageTemplate.querySelector('.galleryImage').cloneNode(true);
    console.log(galleryImageTemp);
    galleryImageTemp.src = value;
    onlineGalleryTemp.append(galleryImageTemp);
});

let modal = document.querySelector('#modal');
let imgTemp = document.querySelectorAll('.galleryImage')
let imgModal = document.querySelector('#modalImage');

imgTemp.forEach((value) => {
    value.addEventListener('click', function () {
        modal.setAttribute('style', 'display: flex;');
        imgModal.src = value.src;
    })
})

modal.addEventListener('click', function () {
    modal.setAttribute('style', 'display:none;');
});

// 5.Система комментариев для блога
const onlineCommentTempl = document.querySelector('.online-commentTempl');
const commentTemp = document.querySelector('#commentTemplate').content;
const commentBtn = document.querySelector('#submitComment');
const inputComment = document.querySelector('#commentInput');

commentBtn.addEventListener('click', function () {
    const elemComment = commentTemp.querySelector('.comment').cloneNode(true);
    let textComment = elemComment.querySelector('.commentText').cloneNode(true);
    const arrComment = [];
    arrComment.push(inputComment.value)
    textComment = arrComment;
    elemComment.querySelector('.commentText').textContent = textComment;
    onlineCommentTempl.append(elemComment)
});