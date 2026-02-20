/////////////////////////// constantes ////////////////////////////////////////
const valor01 = document.getElementById('valor01');
const valor02 = document.getElementById('valor02');
const resultado = document.getElementById('resultado');

function erroCalculo() {
    resultado.style.display = 'flex'

    resultado.innerHTML =

        `
          <ul>
              <li><span>Erro</span> </li>
              <li>valor01 ou valor02 inválido. Digite um numero.</span> </li>
          </ul>
      `;
}


///////////////////////// function calcular total ///////////////////////////

function calcularTotal() {
    let valor01 = parseFloat(document.getElementById('valor01').value);
    let valor02 = parseFloat(document.getElementById('valor02').value);

    document.getElementById('resultado').style.display = 'flex';

    let total = (valor01 * valor02);

    const resultado = document.getElementById('resultado');
    if (isNaN(valor01) || isNaN(valor02)) {
        erroCalculo()
    }
    else {
        resultado.innerHTML =
            `
    <h2>Total da Compra</h2>
    <ul>
    <li> Você está adquirindo ${valor01} unidade(s) com valor unitário de R$ ${valor02}
    <p> Valor Total da compra: R$ ${total} </p>
    `;
    }
};

///////////////////////// function desconto /////////////////////////////////

function desconto() {
    let valor01 = parseFloat(document.getElementById('valor01').value);
    let valor02 = parseFloat(document.getElementById('valor02').value);

    document.getElementById('resultado').style.display = 'flex';
    if (isNaN(valor01) || isNaN(valor02)) {
        erroCalculo()
    }
    else {
        let desconto = (valor01 * valor02) / 100;
        let total = valor01 - desconto;

        const resultado = document.getElementById('resultado');
        resultado.innerHTML =
            `
    <h2>Desconto Aplicado</h2>
    <ul>
        <li>Foi aplicado um desconto de ${valor02} sobre o valor de R$ ${valor01} </li>
        <li>Valor final com desconto: R$ ${desconto}</li>
    </ul>
    `
    }
    };

    ///////////////////////////// function juros /////////////////////////////////
    function juros() {
        let valor01 = parseFloat(document.getElementById('valor01').value);
        let valor02 = parseFloat(document.getElementById('valor02').value);

        if (isNaN(valor01) || isNaN(valor02)) {
            erroCalculo()
        }

        else {

            jurostotal = (valor01 * valor02).toFixed(2)

            resultado.style.display = 'flex'

            resultado.innerHTML =
                `
        <h2>Acréscimo Aplicado</h2>
        <ul>
            <li>Foi aplicado um acréscimo de ${valor02} sobre o valor de ${valor01}</li>
            <li>Valor final com juros: R$ ${jurostotal}</li>
        </ul>
        `;
        }
    };

    ////////////////////////////// function comissão /////////////////////////////
    function comissao() {
        let valor01 = parseFloat(document.getElementById('valor01').value);
        let valor02 = parseFloat(document.getElementById('valor02').value);

        document.getElementById('resultado').style.display = 'flex';

        let comissao = (valor02 / 100) * valor01;

        if (isNaN(valor01) || isNaN(valor02)) {
            erroCalculo()
        }

        else {
            resultado.style.display = 'flex';

            resultado.innerHTML =
                `
        <h2>Comissão calculada</h2>
        <ul>
            <li>Comissão de ${valor02}% sobre uma venda de R$ ${valor01}</li>
            <l1>Valor da comissão: R$ ${comissao}</l1>
        </ul>
        `
        };

    }

    ///////////////////////////// function lucro ///////////////////////////////
    function lucro() {
        let valor01 = parseFloat(document.getElementById('valor01').value);
        let valor02 = parseFloat(document.getElementById('valor02').value);

        document.getElementById('resultado').style.display = 'flex';

        let lucro = (valor01 - valor02)

        const resultado = document.getElementById('resultado');

        if (isNaN(valor01) || isNaN(valor02)) {
            erroCalculo()
        }

        else {
            resultado.style.display = 'flex';

            resultado.innerHTML =
                `
    <h2>Lucro Obtido</h2>
    <ul>
        <li>Preço de venda: ${valor01} | Custo: R$ ${valor02}</li>
        <li>Resultado financeiro: R$ ${lucro}</li>
    </ul>
    `;
        }
    };

    ////////////////////////// function limpar ////////////////////////////////
    function limpar() {
        document.getElementById('resultado').style.display = 'none';
        document.getElementById('valor01').value = '';
        document.getElementById('valor02').value = '';


    };