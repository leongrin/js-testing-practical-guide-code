import {extractEnteredNumberValues} from './src/parser.js';
import {getResult} from './src/math.js';
import { generateOutputText, outputResult } from ' ./src/output';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberInputs = extractEnteredNumberValues(form);

  let result = getResult(numberInputs);

  let resultText = generateOutputText(result);

  outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
