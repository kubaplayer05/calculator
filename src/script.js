const numbers = document.querySelectorAll('.numbers')
const specials = document.querySelectorAll('.special')
const screen = document.querySelector('.screen')
const lastProccesP = document.querySelector('.last-procces-p')

let equal = undefined
let actualNumber, previousNumber = undefined

numbers.forEach(number => {
    number.addEventListener('click',(e) => {
        screen.textContent += e.target.innerText
    })
})

specials.forEach(element => {
    element.addEventListener('click', (e) => {
        const attribute = e.target.attributes[1].value

        switch (attribute) {
            case 'clear':
                screen.textContent = ''
                break;
            case 'plus':
                if(getLastChar()) {
                    screen.textContent += ' + '
                }
                break;
            case 'minus':
                if(getLastChar()) {
                    screen.textContent += ' - '
                }
                break;
            case 'divide':
                if(getLastChar()) {
                    screen.textContent += ' / '
                }
                break;
            case 'multiply':
                if(getLastChar()) {
                    screen.textContent += ' * '
                }
                break;
            case 'equal':
                screen.textContent = ''

                screen.textContent = equal
                break;
        }
    })
})

function getLastChar() {
    const text = screen.textContent
    if(text.endsWith(' + ') || text.endsWith(' - ') || text.endsWith(' / ')|| text.endsWith(' * ') || screen.textContent === '') {
        return false
    } else return true
}

function getNumber() {
    actualNumber = screen.textContent
}

