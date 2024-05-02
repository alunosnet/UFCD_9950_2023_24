let compras=[];
let lista_compras=document.getElementById("lista_compras");
function guardar()
{
    let nome=document.getElementById("produto").value;
    let quantidade=Number(document.getElementById("quantidade").value);

    //criar um objeto com os dados do produto
    let produto={
        'nome' : nome,
        'quantidade' : quantidade
    };
    //alert("Vai comprar " + produto['quantidade'] + " de " + produto['nome']);
   // let teste=`olá mundo ${produto['quantidade']}`;
    //guardar no array das compras
    compras.push(produto);
    //atualizar a lista de produtos da select
    atualiza_select();
}
function atualiza_select()
{
    //limpar a select
    lista_compras.innerHTML="";
    //adicionar os produtos da lista de compras à select
    for (let i=0;i<compras.length;i++)
    {
        //criar uma tag option
        let opcao=document.createElement("option");
        //configurar  a option para mostrar o nome e a quantidade
        opcao.innerHTML=compras[i]['nome'] + " - " + compras[i]['quantidade'];
        //adicionar a option à select
        lista_compras.appendChild(opcao);
    }
}
function remover()
{
    //posição do produto selecionado
    let posicao=lista_compras.selectedIndex;
    //verificar se pelo menos escolheu um
    if (posicao==-1)
    {
        alert("Tem de selecionar o produto a remover");
        return;
    }
    //pedir ao utilizador para confirmar
    if (confirm("Tem a certeza que pretende remover o produto " + compras[posicao]['nome'] + "?"))
    {
        //remove o produto escolhido
        compras.splice(posicao,1);
        atualiza_select();
    }
}