const input01 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');
const resultado = document.getElementById('resultado');

function calcularTotal() {
    let v1 = parseFloat(document.getElementById('valor01').value);
    let v2 = parseFloat(document.getElementById('valor02').value);

    document.getElementById('resultado').style.display ='flex';
    let total = total(valor01 * valor02);

    const resultado = document.getElementById('resultado');

    // resultado.innerHTML =


};

function desconto() {
    let v1 = parseFloat(document.getElementById('valor01').value);
    let v2 = parseFloat(document.getElementById('valor02').value);

    document.getElementById('resultado').style.display ='flex';
    let desconto = (v1 * v2)/100;
    let total = v1 - desconto;

    const resultado = document.getElementById('resultado');

};

function juros() {
    let v1 = parseFloat(document.getElementById('v1').value);
    let v2 = parseFloat(document.getElementById('v2').value);

    document.getElementById('resultado').style.display ='flex';
    let total = total(v1 * v2);

    const resultado = document.getElementById('resultado');

};

function comissao() {
    let v1 = parseFloat(document.getElementById('v1').value);
    let v2 = parseFloat(document.getElementById('v2').value);

    document.getElementById('resultado').style.display ='flex';
    let total = total(v1 * v2);

    const resultado = document.getElementById('resultado');

};

function lucro() {
    let v1 = parseFloat(document.getElementById('v1').value);
    let v2 = parseFloat(document.getElementById('v2').value);

    document.getElementById('resultado').style.display ='flex';
    let total = total(v1 * v2);

    const resultado = document.getElementById('resultado');

};

function limpar() {
      document.getElementById('resultado').style.display = 'none';
      document.getElementById('v1').value = '';
      document.getElementById('v2').value = '';

};