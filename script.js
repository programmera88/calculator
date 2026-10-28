const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        if (display.value) {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = 'Помилка';
    }
}
