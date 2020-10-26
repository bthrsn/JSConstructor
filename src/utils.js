export function row(content, styles = '') {
    return `<div class="row" style="${styles}">${content}</div> `
}

export function col(content) {
    return `<div class="col-sm">${content}</div> `
}

export function css(styles = {}) {
    // // Способ обработки объекта styles и превращение его в строку для css
    // const keys = Object.keys(styles)
    // // Массив для css свойств, преобразованных из объекта в строку
    // const array = keys.map(key => {
    //     return `${key}: ${styles[key]}`
    // });
    // // И соединенных между собой точкой с запятой
    // return array.join(';')
    
    // // Cокращаем запись кода выше в одну строчку
    // return Object.keys(styles).map(key => `${key}: ${styles[key]}`).join(';')
    
    // Условие для css, которые уже является строкой - просто возвращаем эту строку 
    if (typeof styles === 'string') return styles
    // Делаем код более читабельным
    const toString = key => `${key}: ${styles[key]}`
    return Object.keys(styles).map(toString).join(';')
}

export function block(type) {
    return `
        <form name="${type}">
            <h5>${type}</h5>
            <div class="form-group">
                <input class="form-comtrol form-control-sm" name="value" placeholder="value">
            </div>
            <div class="form-group">
                <input class="form-comtrol form-control-sm" name="styles" placeholder="styles">
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
       </form>
       <hr />
    `
}