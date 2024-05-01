const botao = document.getElementById('botao');
const conselhoElemento = document.getElementById('conselho');
const numeroConselhoElemento = document.getElementById('numeroConselho');


async function getConselho() {
    const url = "https://api.adviceslip.com/advice";
    const resposta = await fetch(url);
    const dados = await resposta.json();
    return dados.slip;
}


async function atualizarConselho() {
    const conselho = await getConselho();
    conselhoElemento.textContent = `"${conselho.advice}"`;
    numeroConselhoElemento.textContent = `advicede #${conselho.id}`;
}
botao.addEventListener('click', atualizarConselho);


document.addEventListener('DOMContentLoaded', atualizarConselho);