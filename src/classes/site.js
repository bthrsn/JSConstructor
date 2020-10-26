export class Site {
    constructor(selector) {
    // $ - этим знаком обозначаются элементы DOM-дерева
        this.$element = document.querySelector(selector)
    }
    
    render(model) {
        // Чтобы не дублировался весь HTML придобавлении нового элемента
        this.$element.innerHTML = ''
        // Добавление нового элемента
        model.forEach(block => {
            this.$element.insertAdjacentHTML('beforeend', block.toHTML())
        })
    }
}