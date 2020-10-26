export class Site {
    constructor(selector) {
    // $ - этим знаком обозначаются элементы DOM-дерева
        this.$element = document.querySelector(selector)
    }
    
    render(model) {
        model.forEach(block => {
            this.$element.insertAdjacentHTML('beforeend', block.toHTML())
        })
    }
}