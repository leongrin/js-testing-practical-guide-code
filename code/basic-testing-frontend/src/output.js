
export function generateOutputText(result) {
    if (result === 'invalid') {
        return 'Invalid input. You must enter valid numbers.';
    } else if (result !== 'no-calc') {
        return 'Result: ' + result;
    } else {
        return '';
    }
}


export function outputResult(text) {
    const output = document.getElementById('result');
    output.textContent = text;
}
