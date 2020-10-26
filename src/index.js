import {model} from './model';
import {templates} from './templates';
import './styles/main.css';

const site = document.querySelector('#site');

// // Для примера - в переменной лежит один из типов значений block
// const key = 'title';
// // передаем его в объект templates со всеми функциями
// console.log(templates[key]);

model.forEach(block => { 
    //   Функция принимает параметр block.type и возвращает HTML нужного блока
    const toHTML = templates[block.type];
    
    // Проверяем, есть ли ключ в функции toHTML
    if (toHTML) {
        // и только тогда используем функцию для каждого blocl в model
        site.insertAdjacentHTML('beforeend', toHTML(block));
    }
});

