const chooseColor = document.querySelectorAll('.choose__color-btn')
const contebtItem = document.querySelectorAll('.content-item')

console.log(chooseColor)
console.log(contebtItem)

chooseColor.forEach(function(element) { /* пробегаем по всем кнопкам и проверяем на нажатие если да то вызываем обработчик  */
    element.addEventListener('click', open)
})

function open(evt) {
    const target = evt.currentTarget; /* получаем нажатую кнопку - текущий переданный элемент*/
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`) /* делаем массив всех єлементов которые содержат класс, переданный при нажатии кнопки (т.е. цвет) */

    chooseColor.forEach(function(item) { /* стираем всем признак активности */
        item.classList.remove('choose__color-btn--active')
    })
    target.classList.add('choose__color-btn--active') /* и выставляем признак акивности для элемента соответствующего нажатой кнопке (и она пропадает) */

    contebtItem.forEach(function(item) {
        item.classList.remove('content-item__active')
    })

    contentActive.forEach(function(item) {
        item.classList.add('content-item__active')
    })

}