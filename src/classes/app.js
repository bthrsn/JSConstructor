import {Site} from './site'
import {Sidebar} from './sidebar'


export class App {
    constructor(model) {
        this.model = model
        
        // Запуск сайта
        this.init()
    }
    
    init() {
        const site = new Site('#site')

        // Создаем сайт по файлу model.js 
        site.render(this.model)
        
        // Колбэк функция для добавления блоков на сайт из сайдбара
        const updateCallback = newBlock => {
            this.model.push(newBlock)
            site.render(this.model)
        }

        new Sidebar('#panel', updateCallback);
    }
}



