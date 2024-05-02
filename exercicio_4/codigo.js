//array para os vencimentos
let vencimentos=[];

function guardar()
{
    //esta função deve ler o valor inserido na input
    let vencimento=Number(document.getElementById("vencimento").value);
    //adicionar aos vencimentos anteriores (total dos vencimentos)
    vencimentos.push(vencimento);
    //mostrar a soma total dos vencimentos na div
    let soma=0;
    for(let i=0;i<vencimentos.length;i++)
    {
        soma = soma + vencimentos[i];
    }
    document.getElementById("VencimentoTotal").innerHTML="A soma dos vencimentos é de "+soma;
    //opcional: mostrar todos os vencimentos inseridos
    //opcional: mostrar o mês em que o vencimento foi o mais elevado
    //opcional: calcular a média dos vencimentos
    let media=soma/vencimentos.length;
    document.getElementById("VencimentoTotal").innerHTML += "<br>A média dos vencimentos é de "+media;
}