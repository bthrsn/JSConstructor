import {row, col, css} from '../utils'

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }
    
    toHTML() {
        throw new Error('Метод toHTML должен быть реализован')
    }
}

// Теперь, если нужно добавить новый блок, нам не нужно писать новую функцию. Нужно просто добавить новый класс, наследующий от блока value и options

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }
    
    toHTML() {
        const {tag = 'h1', styles} = this.options
        // // Переменная для тэга заголовка, ?? - используется, если тэг не указан
        // const tag = block.options.tag ?? 'h1'
        // const styles = block.options.styles 
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }
    
    toHTML() {
        const {imageStyles: is, alt = '', styles} = this.options
        return row(`<img src = "${this.value}" alt = "${alt}" style = "${css(is)}">`, css(this.options.styles))    
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }
    
    toHTML() {
        let column = this.value.map(col).join('')
        return row(column, css(this.options.styles))   
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }
    
    toHTML() {
        return row(col(`<p>${this.value}</p>`), css(this.options.styles))
    }
}