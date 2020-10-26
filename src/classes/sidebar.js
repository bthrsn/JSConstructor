import {block} from '../utils'
import {TextBlock, TitleBlock} from './blocks'

export class Sidebar {
    constructor(selector, updateCallback) {
        this.$element = document.querySelector(selector)
        this.updatу = updateCallback
        
        this.init()
    }
    
    init() {
        this.$element.insertAdjacentHTML('afterbegin', this.template)
        // Чтобы не терять контекст вызова this - привязываем его методом bind
        this.$element.addEventListener('submit', this.add.bind(this))
    }
    
    get template() {
        return [
            block('text'),
            block('title')
        ].join('')
    }
    
    // Функция для получения данных со страницы и отмены перезагрузки страницы
    add(event) {
        event.preventDefault()
        
        const type = event.target.name,
              value = event.target.value.value,
              styles = event.target.styles.value
              
        // Переписать этот кусок кода, так как он упрощени сдеан только под 2 типа блоков: текст и заголовок
        const newBlock = type === 'text' 
            ? new TextBlock(value, {styles})
            : new TitleBlock(value, {styles})  
            
        this.update(newBlock)
    }  
}