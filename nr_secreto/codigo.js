"use strict"

let tentativas=3;
let numero_secreto=Math.floor(Math.random()*10)+1;
document.getElementById("tentativas").innerHTML=tentativas;

//definir um array para guardar os valores
let numeros=[];

//função para testar se o jogador acertou no nº secreto
function testar()
{
    let numero=Number(document.getElementById("numero").value);
    if (numero==numero_secreto)
    {
        Acertou();
    }
    else
    {
        //o jogador não acertou no nº secreto
        NaoAcertou(numero);
    }
}

function MostraNumeros()
{
    //limpa a select
    document.getElementById("numeros").innerHTML="";
    //ciclo para percorrer o array numeros
    for(let i=0;i<numeros.length;i++)
    {
        //criar um elemento do tipo option
        let novo=document.createElement("option");
        //associar o número ao elemento option
        novo.innerHTML=numeros[i];
        //adicionar à select
        document.getElementById("numeros").appendChild(novo);
    }
}

//Função para quando o jogador não acerta
function NaoAcertou(numero)
{
    //guardar no array o número
    numeros.push(numero);
    MostraNumeros();
    //reduzir o nº de tentativas
    tentativas=tentativas-1;
    //verificar se não tem mais tentativas
    if (tentativas==0)
    {
        //o jogo acabou
        document.getElementById("resultado").innerHTML="Já não tem mais tentativas. O nº secreto era "+numero_secreto;
        document.getElementById("bt_recomecar").style.display="block";
        document.getElementById("bt_testar").style.display="none";
        document.getElementById("tentativas").innerHTML=tentativas;
    }
    else
    {
        //mostrar o nº de tentativas que resta
        document.getElementById("tentativas").innerHTML=tentativas;
        //mostrar se o nº secreto é maior ou menor
        if (numero_secreto>numero)
        {
            document.getElementById("resultado").innerHTML="Errou! O número secreto é maior.";
        }
        else
        {
            document.getElementById("resultado").innerHTML="Errou! O número secreto é menor.";
        }
    }

}

//Função para quando o jogador acerta no nº secreto
function Acertou()
{
    document.getElementById("resultado").innerHTML="Acertou no número secreto";
    //TODO: mudar a cor da mensagem
    //Mostrar o botão para recomeçar
    document.getElementById("bt_recomecar").style.display="block";
    document.getElementById("bt_testar").style.display="none";
    
}

function recomecar()
{
    window.location.reload();
}