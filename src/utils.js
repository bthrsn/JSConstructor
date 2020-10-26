export function row(content, styles = '') {
    return `<div class="row" style="${styles}">${content}</div> `;
}

export function col(content) {
    return `<div class="col-sm">${content}</div> `;
}

export function css(styles = {}) {
    // // Способ обработки объекта styles и превращение его в строку для css
    // const keys = Object.keys(styles);
    // // Массив для css свойств, преобразованных из объекта в строку
    // const array = keys.map(key => {
    //     return `${key}: ${styles[key]}`
    // });
    // // И соединенных между собой точкой с запятой
    // return array.join(';');
    
    // // Cокращаем запись кода выше в одну строчку
    // return Object.keys(styles).map(key => `${key}: ${styles[key]}`).join(';');
    
    // Делаем код более читабельным
    const toString = key => `${key}: ${styles[key]}`;
    return Object.keys(styles).map(toString).join(';');
}