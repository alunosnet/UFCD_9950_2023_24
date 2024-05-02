let produtos=[];
let quantidades=[];

function guardar()
{
    //esta função deve guardar o produto e a quantidade inserida
    let produto=document.getElementById("produto").value;
    produtos.push(produto);
    let quantidade=Number(document.getElementById("quantidade").value);
    quantidades.push(quantidade);
    

    //mostrar a lista dos produtos atualizada
    atualiza_lista_compras();
    //limpar as input
    document.getElementById("produto").value="";
    document.getElementById("quantidade").value="0";
    //colocar o focus na input produto
    document.getElementById("produto").focus();
}

function remover()
{
    //esta função deve remover o produto selecionado da lista
    //testar se o utilizador selecionou um produto
    let posicao=document.getElementById("lista_compras").selectedIndex;
    if (posicao==-1)
    {
        alert("Escolha o produto a retirar da lista de compras");
        return;
    }
    //remover o produto selecionado dos arrays de produtos e quantidades
    produtos.splice(posicao,1);
    quantidades.splice(posicao,1);
    //mostrar a lista dos produtos atualizada
    atualiza_lista_compras();
}
function atualiza_lista_compras()
{
    document.getElementById("lista_compras").innerHTML="";
    for(let i=0;i<produtos.length;i++)
    {
        let novo=document.createElement("option");
        novo.innerHTML=produtos[i] + " - " + quantidades[i];
        document.getElementById("lista_compras").appendChild(novo);
    }
}