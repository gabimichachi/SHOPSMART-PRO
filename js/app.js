/////////////////////////// constantes ////////////////////////////////////////
const valor01 = document.getElementById('valor01');
const valor02 = document.getElementById('valor02');
const resultado = document.getElementById('resultado');

///////////////////////// function calcular total ///////////////////////////
function calcularTotal (){
    let valor01 = parseFloat(document.getElementById('valor01').value);
    let valor02 = parseFloat(document.getElementById('valor02').value);

    document.getElementById('resultado').style.display = 'flex';

    let total = (valor01 * valor02);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = 
    `
    <h2>Você irá pagar um valor total de ${total}</h2>
    <ul>
        <p>uma vez que o preço é ${valor01} e a quantidade de coisas foram ${valor02}</p>
    </ul>
    `;

};

 ///////////////////////// function desconto /////////////////////////////////

function desconto() {
    let valor01 = parseFloat(document.getElementById('valor01').value);
    let valor02 = parseFloat(document.getElementById('valor02').value);

    document.getElementById('resultado').style.display = 'flex';

    let desconto = (valor01 * valor02) / 100;
    let total = valor01 - desconto;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML =
        `
    <h2>Total do desconto</h2>
    <ul>
        <p>DESCONTO </p>
        <p>Valor 01: ${valor01}</p>
        <p>Porcentagem de desconto: ${valor02}%</p>
        <p>Valor do desconto: ${desconto}</p>
        <p>Valor final: ${total}</p>
    </ul>
    `
};

///////////////////////////// function juros /////////////////////////////////
function juros() {
    let valor01 = parseFloat(document.getElementById('valor01').value);
    let valor02 = parseFloat(document.getElementById('valor02').value);

    document.getElementById('resultado').style.display = 'flex';
    let acrescimo = (valor01 * valor02) / 100
    let total = valor01 + acrescimo;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML =
        `
        <h2>Total do Juros</h2>
        <ul>
            <p>JUROS</p>
            <p>Valor 01: ${valor01}</p>
            <p>Valor 02: ${valor02}</p>
            <p>Valor do juros ${acrescimo}</p>
            <p>Valor final: ${total}</p>
        </ul>
        `;
};

////////////////////////////// function comissão /////////////////////////////
function comissao() {
    let valor01 = parseFloat(document.getElementById('valor01').value);
    let valor02 = parseFloat(document.getElementById('valor02').value);

    document.getElementById('resultado').style.display = 'flex';

    let comissao = (valor02 / 100) * valor01;

    if(isNaN (valor01) || isNaN(valor02)) {

        alert('valor01 ou valor02 invalido. Digite um numero');

    } else {
        resultado.style.display = 'flex';

        resultado.innerHTML = 
        `
        <h2>Comissão calculada</h2>
        <ul>
            <li>Comissão de ${valor02} sobre uma venda de ${valor01}</li>
            <h2>Valor da comissão: ${comissao}</h2>
        </ul>
        `
    };

}

///////////////////////////// function lucro ///////////////////////////////
function lucro(){
    let valor01 = parseFloat(document.getElementById('valor01').value);
    let valor02 = parseFloat(document.getElementById('valor02').value);

    document.getElementById('resultado').style.display = 'flex';

    let lucro = (valor01 - valor02)

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = 
    `
    <h2>Total lucro obtido</h2>
    <ul>
        <li>LUCRO</li>
        <li>Valor 01: ${valor01}</li>
        <li>Valor 02: ${valor02}</li>
        <li>Valor final: ${lucro}</li>
    </ul>
    `;

};

////////////////////////// function limpar ////////////////////////////////
function limpar() {
    document.getElementById('resultado').style.display = 'none';


};