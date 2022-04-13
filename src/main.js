const buttonsHTML = document.querySelectorAll("section button")
const displayHTML = document.querySelectorAll(".screen")

const DEFAULT_VALUE = 0
let termino1
let termino2
let operation
let isEqual

class Display {
    constructor (primaryScreen, secundaryScreen) {
        this.primaryScreen = primaryScreen;
        this.secundaryScreen = secundaryScreen;
    }

    clear() {
        this.primaryScreen.innerHTML = DEFAULT_VALUE;
        this.secundaryScreen.innerHTML = DEFAULT_VALUE;
        termino1 = null
        termino2 = null
        operation = null
        isEqual = false
    }
}

class Button {
    constructor(button, isOperation = false) {
        this.button = button;
        this.value = button.innerHTML
        this.isOperation = isOperation;
    }

    calculate() {

    }
    print() {
        if (this.isOperation) {
            if (isEqual) {
                termino1 = calculatorDisplay.primaryScreen.innerHTML
                isEqual = false
            }
            operation = this.value
            calculatorDisplay.primaryScreen.innerHTML += this.value
        } else if (operation == undefined) {
            if (isEqual) {
                calculatorDisplay.clear()
            }
            if (calculatorDisplay.primaryScreen.innerHTML == 0) {
                calculatorDisplay.primaryScreen.innerHTML = this.value
                termino1 = this.value
            } else {
                calculatorDisplay.primaryScreen.innerHTML += this.value
                termino1 += this.value
            }
        } else if (operation) {
            if (isEqual) {
                calculatorDisplay.clear()
            }
            calculatorDisplay.primaryScreen.innerHTML += this.value
            if (termino2 == undefined) {
                termino2 = this.value
            } else {
                termino2 += this.value
            }
        }
    }

    equal() {
        calculatorDisplay.secundaryScreen.innerHTML = calculatorDisplay.primaryScreen.innerHTML;
        let first = Number(termino1)
        let second = Number(termino2)
        function rtaewe() {
                if (operation == "+") {
                    return first + second
                } else if (operation == "-") {
                    return first - second
                } else if (operation == "x") {
                    return first * second
                } else if (operation == "/") {
                    return first / second
                } else if (operation == "%") {
                    return first % second
                }
            }
        let rta = rtaewe()
        if (rta == undefined) {
            rta = 0
        }
        calculatorDisplay.primaryScreen.innerHTML = rta
        termino1 = null
        termino2 = null
        operation = null
        isEqual = true
    }
}

const calculatorDisplay = new Display(displayHTML[1], displayHTML[0]);

const buttonsList = {
    openParentesis : new Button(buttonsHTML[0]),
    closeParentesis : new Button(buttonsHTML[1]),
    module : new Button(buttonsHTML[2], true),
    plus : new Button(buttonsHTML[3], true),
    seven : new Button(buttonsHTML[4]),
    eigth : new Button(buttonsHTML[5]),
    nine : new Button(buttonsHTML[6]),
    divide : new Button(buttonsHTML[7], true),
    four : new Button(buttonsHTML[8]),
    five : new Button(buttonsHTML[9]),
    six : new Button(buttonsHTML[10]),
    multiplication : new Button(buttonsHTML[11], true),
    one : new Button(buttonsHTML[12]),
    two : new Button(buttonsHTML[13]),
    three : new Button(buttonsHTML[14]),
    minus : new Button(buttonsHTML[15], true),
    zero : new Button(buttonsHTML[16]),
    dot : new Button(buttonsHTML[17]),
    equal : new Button(buttonsHTML[18]),
}