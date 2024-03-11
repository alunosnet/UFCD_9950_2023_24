"use strict"

function aumentar()
{
    let numero=Number(document.getElementById("div_numero").innerText);
    numero = numero+1;
    document.getElementById("div_numero").innerText = numero;
}
function diminuir()
{
    let numero=Number(document.getElementById("div_numero").innerText);
    numero = numero - 1;
    document.getElementById("div_numero").innerText = numero;
}
function calcular(botao)
{
    let numero=Number(document.getElementById("div_numero").innerText);
    if (botao=="aumentar")
        numero = numero+1;
    else
        numero = numero -1;
    document.getElementById("div_numero").innerText = numero;
}

function reload()
{
    location.reload();
}
