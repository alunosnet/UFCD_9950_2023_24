"use strict"
function somatorio()
{
    //ler os valores das inputs
    let primeiro = Number(document.getElementById("primeiro").value);
    let ultimo = Number(document.getElementById("ultimo").value);
    if (primeiro>ultimo)
    {
        /*
        alert("O primeiro valor tem de ser menor que o último.")
        return;
        */
       let t=primeiro;
       primeiro=ultimo;
       ultimo=t;
    }
    let soma=0;
    //ciclo do primeiro até ao último
    for(let i=primeiro;i<=ultimo;i++)
    {
        //acumular as somas do valor do ciclo
        soma = soma + i;
    }
    
    //mostrar na div resultado
    document.getElementById("resultado").innerHTML="Resultado do somatório é " + soma;
}