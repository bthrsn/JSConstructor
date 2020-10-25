export function title(block) {
    return `
    <div class="row">
        <div class="col-sm">
            <h1>${block.value}</h1>
        </div>
    </div>
    `
}

export function text(block) {
    return `
    <div class="row">
        <div class="col-sm">
            <p>${block.value}</p>
        </div>
    </div>
    `
}

export function columns(block) {
   let column = block.value.map(item => `<div class="col-sm">${item}</div>`);
   return `
   <div class="row">
       ${column.join('')}
   </div>
   `
}

export function image(block) {
   return `
       <div class="row">
           <img src = "${block.value}">
       </div> 
   `
}