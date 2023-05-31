const elementoBotaoNovaCor = document.getElementById('new-color-button'); // referente ao botão 

const elementoCurrentColor = document.getElementById ('current-color'); //referente ao span

const elementoComplementar1 = document.getElementById ('color1');

const elementoCurrentColorComp1 = document.getElementById ('current-comp1');

const elementoComplementar2 = document.getElementById ('color2');

const elementoCurrentColorComp2 = document.getElementById ('current-comp2');

function randomCores(){

    let a1,a2,a3,b1,b2,b3,c1,c2,c3;

    a1 = randomComponente();
    a2 = randomComponente();
    a3 = randomComponente();

    //Transladar os componentes para achar as cores complementares
    b1 = a2;
    b2 = a3;
    b3 = a1; 

    c1 = a3;
    c2 = a1;
    c3 = a2;

    // Juntar os componentes para formar as 3 cores e retorná-las como array

    return ["#"+a1+a2+a3,"#"+b1+b2+b3,"#"+c1+c2+c3]
}

function randomComponente(){
    hex = Math.floor(Math.random() * 256); // Gera um número decimal entre o 0 e o 255
    return hex.toString(16).padStart(2,0); // Retorna o número convertido para hex como uma string
}

elementoBotaoNovaCor.addEventListener('click', function(){ // ao clicar, executa uma dada função
    
    let arrayCores = randomCores();
    let corA = arrayCores[0];
    let corB = arrayCores[1];
    let corC = arrayCores[2];

    document.body.style.setProperty('background-color', corA);
    elementoCurrentColor.textContent = corA;

    elementoComplementar1.style.setProperty('background-color', corB);
    elementoCurrentColorComp1.textContent = corB;

    elementoComplementar2.style.setProperty('background-color', corC);
    elementoCurrentColorComp2.textContent = corC;
});
