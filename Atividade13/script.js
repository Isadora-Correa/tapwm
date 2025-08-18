const inputText = document.getElementById('inputText');
const radioMaiusculas = document.getElementById('radioMaiusculas');
const radioMinusculas = document.getElementById('radioMinusculas');
const radioOriginal = document.getElementById('radioOriginal');
const radioMorse = document.getElementById('radioMorse');
const radioMorseToText = document.getElementById('radioMorseToText'); 
const resultOutput = document.getElementById('resultOutput');

const textToMorseMap = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', '!': '-.-.--', ' ': '/'
};


const morseToTextMap = Object.entries(textToMorseMap).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});


function textToMorse(text) {
    return text.toLowerCase().split('').map(char => {
        return textToMorseMap[char] || '';
    }).join(' ').replace(/\s+/g, ' ').trim();
}

function morseToText(morse) {
    return morse.trim().split(' / ').map(word =>
        word.split(' ').map(code =>
            morseToTextMap[code] || ''
        ).join('')
    ).join(' ');
}

function transformarEExibir() {
    const textoOriginalDoCampo = inputText.value;
    let textoTransformado;

    if (radioMaiusculas.checked) {
        textoTransformado = textoOriginalDoCampo.toUpperCase();
    } else if (radioMinusculas.checked) {
        textoTransformado = textoOriginalDoCampo.toLowerCase();
    } else if (radioMorse.checked) {
        textoTransformado = textToMorse(textoOriginalDoCampo);
    } else if (radioMorseToText.checked) {
        textoTransformado = morseToText(textoOriginalDoCampo);
    } else { 
        textoTransformado = textoOriginalDoCampo;
    }

    if (textoOriginalDoCampo.trim() === '') {
        resultOutput.textContent = 'O resultado aparecerá aqui...';
        resultOutput.classList.add('placeholder');
    } else {
        resultOutput.textContent = textoTransformado;
        resultOutput.classList.remove('placeholder');
    }
}


radioMaiusculas.addEventListener('change', transformarEExibir);
radioMinusculas.addEventListener('change', transformarEExibir);
radioOriginal.addEventListener('change', transformarEExibir);
radioMorse.addEventListener('change', transformarEExibir);
radioMorseToText.addEventListener('change', transformarEExibir); 
inputText.addEventListener('input', transformarEExibir);

document.addEventListener('DOMContentLoaded', transformarEExibir);