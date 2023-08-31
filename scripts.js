function collatz() {
    const input = document.getElementById('collatzInput').value;
    let num = parseInt(input);
    let steps = [num];

    while (num !== 1) {
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num = num * 3 + 1;
        }
        steps.push(num);
    }

    document.getElementById('collatzResult').innerText = `Pasos: ${steps.join(' -> ')}`;
}

function kaprekar() {
    const input = document.getElementById('kaprekarInput').value;
    let num = parseInt(input);

    if (num < 100 || num > 9999) {
        document.getElementById('kaprekarResult').innerText = 'Por favor ingresa un número de 3 o 4 dígitos.';
        return;
    }

    let steps = [num];

    while (num !== 6174) {
        let numStr = num.toString().padStart(4, '0');
        let numArr = numStr.split('').sort();

        let ascNum = parseInt(numArr.join(''));
        let descNum = parseInt(numArr.reverse().join(''));

        num = descNum - ascNum;
        steps.push(num);
    }

    document.getElementById('kaprekarResult').innerText = `Pasos: ${steps.join(' -> ')}`;
}

function egyptian() {
    const num1 = parseInt(document.getElementById('egyptianInput1').value);
    const num2 = parseInt(document.getElementById('egyptianInput2').value);
    let result = 0;
    let steps = [];

    let a = num1;
    let b = num2;

    while (a >= 1) {
        if (a % 2 === 1) {
            steps.push(`${a} x ${b} = ${a * b}`);
            result += b;
        }
        a = Math.floor(a / 2);
        b *= 2;
    }

    document.getElementById('egyptianResult').innerText = `Pasos:\n${steps.join('\n')}\nResultado: ${result}`;
}

function russian() {
    const num1 = parseInt(document.getElementById('russianInput1').value);
    const num2 = parseInt(document.getElementById('russianInput2').value);
    let result = 0;
    let steps = [];

    let a = num1;
    let b = num2;

    while (a > 0) {
        if (a % 2 === 1) {
            steps.push(`${a} x ${b} = ${a * b}`);
            result += b;
        }
        a = Math.floor(a / 2);
        b *= 2;
    }

    document.getElementById('russianResult').innerText = `Pasos:\n${steps.join('\n')}\nResultado: ${result}`;
}

