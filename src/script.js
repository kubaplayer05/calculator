const numbers = document.querySelectorAll('.numbers')
const specials = document.querySelectorAll('.special')
const screen = document.querySelector('.screen')
const lastProccesP = document.querySelector('.last-procces-p')

let equal = undefined
let actualNumber, previousNumber, lastOperation = undefined

numbers.forEach(number => {
    number.addEventListener('click',(e) => {
        screen.textContent += e.target.innerText
        lastProccesP.textContent += e.target.innerText
    })
})

specials.forEach(element => {
    element.addEventListener('click', (e) => {
        const attribute = e.target.attributes[1].value
        switch (attribute) {
            case 'clear':
                clearScreen()
                lastOperation = undefined
                actualNumber = undefined 
                previousNumber = undefined
                equal = undefined
                lastProccesP.textContent = ''
                break;
            case 'plus':
                if(getLastChar()) {
                    lastProccesP.textContent += ' + '
                    getNumbersFromScreen()
                    operations()
                    lastOperation = 'plus'
                    clearScreen()
                }
                break;
            case 'minus':
                if(getLastChar()) {
                    lastProccesP.textContent += ' - '
                    getNumbersFromScreen()
                    operations()
                    lastOperation = 'minus'
                    clearScreen()
                }
                break;
            case 'divide':
                if(getLastChar()) {
                    lastProccesP.textContent += ' / '
                    getNumbersFromScreen()
                    operations()
                    lastOperation = 'divide'
                    clearScreen()
                }
                break;
            case 'multiply':
                if(getLastChar()) {
                    lastProccesP.textContent += ' * '
                    getNumbersFromScreen()
                    operations()
                    lastOperation = 'multiply'
                    clearScreen()
                }
                break;
            case 'equal':
                actualNumber = parseInt(screen.textContent)
                screen.textContent = ''
                switch(lastOperation) {
                    case 'plus':
                        equal = previousNumber + actualNumber
                        break;
                    case 'minus':
                        equal = previousNumber - actualNumber
                        break;
                    case 'divide':
                        equal = previousNumber / actualNumber
                        break;
                    case 'multiply':
                        equal = previousNumber * actualNumber
                        break; 
                }
                screen.textContent = equal
                previousNumber = equal
                lastOperation = undefined  
                actualNumber = undefined
                console.log(lastOperation);
        }
    })
})

function getLastChar() {
    const text = lastProccesP.textContent
    if(text.endsWith(' + ') || text.endsWith(' - ') || text.endsWith(' / ')|| text.endsWith(' * ') || lastProccesP.textContent === '') {
        return false
    } else return true
}

function operations() {
    switch(lastOperation) {
        case 'plus':
            previousNumber = previousNumber + actualNumber
            break;
        case 'minus':
            previousNumber = previousNumber - actualNumber
            break;
        case 'divide':
            previousNumber = previousNumber / actualNumber
            break;
        case 'multiply':
            previousNumber = previousNumber * actualNumber
            break; 
        default: break;
    }
}

function getNumbersFromScreen() {
    if(previousNumber === undefined) {
        previousNumber = parseInt(screen.textContent)
    } else {
        actualNumber = parseInt(screen.textContent)
    }
}

function clearScreen() {
    screen.textContent = ''
}
