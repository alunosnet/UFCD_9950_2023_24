"use strict"

let posicao=0;
let imagens=["vermelho.jpg","verde.jpg","amarelo.jpg"];
let temporizador;
comecar();
//muda a imagem para a próxima imagem do array
function mudar()
{
    //adicionar 1 a posição
    posicao++;
    //verificar se chegou ao final do array
    if (posicao==imagens.length)
        posicao=0;
    //atualizar a imagem na página
    document.getElementById("semaforo").src=imagens[posicao];
}
//ativar um timer para mudar o semaforo 2.5 segundos
function comecar()
{
    temporizador=setInterval(mudar,2500);
}
function parar()
{
    clearInterval(temporizador);
}