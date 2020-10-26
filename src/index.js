import {model} from './model'
import {Site} from './classes/site'
import {Sidebar} from './classes/sidebar'
import './styles/main.css'

const site = new Site('#site')

site.render(model)

// Колбэк функция для добавления блоков на сайт из сайдбара
const updateCallback = newBlock => {
    model.push(newBlock)
    site.render(model)
}

new Sidebar('#panel', updateCallback);
