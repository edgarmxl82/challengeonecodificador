
function encryptText(text) {
    const rules = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };
    let encryptedText = text;
    for (const key in rules) {
        encryptedText = encryptedText.replaceAll(key, rules[key]);
    }
    return encryptedText;
}

function decryptText(text) {
    const rules = { "enter": "e", "imes": "i", "ai": "a", "ober": "o", "ufat": "u" };
    let decryptedText = text;
    for (const key in rules) {
        decryptedText = decryptedText.replaceAll(key, rules[key]);
    }
    return decryptedText;
}

function validateText(text) {
    const specialChars = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    const uppercase = /[A-Z]/g;
    const empty = "";

    if (text.match(uppercase) || text.match(specialChars)) {
        alert("Sorry, no se permiten mayúsculas ni acentos!!");
        return true;
    } else if (text === empty) {
        alert("Texto a encriptar");
        return true;
    } else {
        return false;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const encryptButton = document.querySelector("#btn-encriptar");
    const decryptButton = document.querySelector("#btn-desencriptar");
    const copyButton = document.querySelector("#btn-copy");
    const inputText = document.querySelector("#input-texto");
    const outputText = document.querySelector("#msg");

    encryptButton.addEventListener("click", function () {
        const enteredText = inputText.value.trim();
        if (!validateText(enteredText)) {
            const encryptedText = encryptText(enteredText);
            outputText.value = encryptedText;
        } else {
            inputText.value = "";
        }
    });

    copyButton.addEventListener("click", function () {
        const copiedText = outputText.value;
        navigator.clipboard.writeText(copiedText);
        inputText.value = "";
    });

    decryptButton.addEventListener("click", function () {
        const enteredText = inputText.value.trim();
        const decryptedText = decryptText(enteredText);
        outputText.value = decryptedText;
    });
});