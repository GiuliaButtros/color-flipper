const elementoBotaoNovaCor = document.getElementById('new-color-button'); // referente ao botão 

const elementoCurrentColor = document.getElementById ('current-color'); //referente ao span

const valoresHex = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
];

function getRandomHexValue(){ // para selecionar valores hex aleatórios
    // posição aleatória do index no array, retornar o elemento daquela posição do index

    const randomIndexPosition = Math.floor(Math.random() * valoresHex.length); // multiplicar pela quantidade de valores (16 ou valoresHex.length caso mude por algum motivo)

    // Envelopar com Math.floor pra ter certeza de que o resultado de Math.random será um número inteiro e não decimais 

    const randomHexValue = valoresHex[randomIndexPosition]; // O que será retornado: Irá acessar os valores do array valoresHex e achar o ítem em randomIndexPosition

    return randomHexValue;

    //TODA ESSA FUNÇÃO ENTREGA 1 ÍTEM ALEATÓRIO
}

//Criando uma string vazia para fazer loop n vezes (stringLength) e cada loop gera um valor Hex aleatório, utililzando a função anterior para acrescentar à string atré formar a string completa

function getRandomHexString(stringLength){ 
    let hexString = ''; // variável string que será retornada

    for (let i=0; i < stringLength; i++){
        hexString += getRandomHexValue();
    }

    return hexString;
}

elementoBotaoNovaCor.addEventListener('click', function(){ // ao clicar, executa uma dada função
    const randomHexString = '#' + getRandomHexString(6); // # para que o CSS reconheça o valor hex

    document.body.style.setProperty('background-color', randomHexString);

    elementoCurrentColor.textContent = randomHexString;
});