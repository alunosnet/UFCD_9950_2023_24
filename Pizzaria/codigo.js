"use strict"
//Página para uma pizzaria
//Listar menu
//Ver detalhes
//Adicionar ao carrinho
//Checkout => Mostrar preço a pagar

//Menu de pizzas
let menu=[
    {
        'nome':'Escolha uma pizza'
    },
    {
        'nome':"Pizza margarita",
        'preço':10,
        'tamanho':'média',
        'foto':'margarita.jpg'
    },
    {
        'nome':"Pizza tropical",
        'preço':7.5,
        'tamanho':'média',
        'foto':'tropical.jpg'
    },
    {
        'nome':"Pizza pepperoni",
        'preço':15,
        'tamanho':'familiar',
        'foto':'pepperoni.jpg'
    }
];
//array com as pizzas escolhidas
let carrinho=[];

//evento que é executado quando a página foi carregada
window.onload=function(){
    //esconde a div detalhes
    document.getElementById("detalhes").style.display="none";
    atualiza_menu();
    //criar um event listener para o click na select menu
    document.getElementById("menu").addEventListener('change',mostra_detalhes);
    //verificar se já aceitou os cookies
    verificar_cookies();
}

//atualizar a select com o menu
function atualiza_menu()
{
    let select_menu=document.getElementById("menu");
    //limpar a select
    select_menu.innerHTML="";
    //percorrer o menu
    for(let i=0;i<menu.length;i++)
    {
        //para cada pizza adicionar uma option com o nome da pizza à select
        let nome=menu[i]["nome"];
        //criar uma option
        let opcao=document.createElement("option");
        opcao.innerHTML=nome;
        //adicionar a option à select
        select_menu.appendChild(opcao);
    }
    
}

//função que adiciona a pizza escolhida ao carrinho
function adicionar_carrinho()
{
    //adicionar ao array carrinho a pizza escolhida
    let posicao=document.getElementById("menu").selectedIndex;
    if (posicao<=0)
        return;
    let pizza = menu[posicao];
    //adicionar ao carrinho
    carrinho.push(pizza);
    //retirar do menu
    menu.splice(posicao,1);
    //atualizar a select menu
    atualiza_menu();
    //atualizar a select do carrinho
    atualiza_carrinho();
    //Esconde a div detalhes
    document.getElementById("detalhes").style.display="none";
}

//função para calcular e mostrar o total a pagar
function checkout()
{
    let total_pagar=0;
    for(let i=0;i<carrinho.length;i++)
    {
        total_pagar = total_pagar + carrinho[i]['preço'];
    }
    alert("Tem de pagar "+total_pagar);
}

//função para mostrar os detalhes da pizza selecionada
function mostra_detalhes()
{
    //a pizza que escolheu
    let posicao=document.getElementById("menu").selectedIndex;
    if (posicao<=0)
        return;
    //mostrar o nome
    let pizza=menu[posicao];
    document.getElementById("nome").innerHTML=pizza['nome'];
    document.getElementById("preco").innerHTML=pizza['preço'];
    document.getElementById("tamanho").innerHTML=pizza['tamanho'];
    document.getElementById("foto").src='/imagens/'+pizza['foto'];
    //mostrar a div
    document.getElementById("detalhes").style.display="block";
}

//atualizar a select carrinho
function atualiza_carrinho()
{
    let select_carrinho=document.getElementById("carrinho");
    //limpar a select
    select_carrinho.innerHTML="";
    //percorrer o carrinho
    for(let i=0;i<carrinho.length;i++)
    {
        //para cada pizza adicionar uma option com o nome da pizza à select
        let nome=carrinho[i]["nome"];
        //criar uma option
        let opcao=document.createElement("option");
        opcao.innerHTML=nome;
        //adicionar a option à select
        select_carrinho.appendChild(opcao);
    }
    
}

function fechar_detalhes()
{
    document.getElementById("detalhes").style.display="none";
}

function LerCookie(nome)
{
    let cookies=document.cookie;
    let cookies_existentes=cookies.split(";");
    for(let i=0;i<cookies_existentes.length;i++)
    {
        let cookie=cookies_existentes[i].split("=");
        if (cookie[0].trim()==nome)
            {
                return cookie[1];
            }
    }
    return null;
}

function GuardarCookie(nome, valor, dias)
{
    let cookie = nome + "=" + valor +";path=/";
    let data = new Date();
    data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
    let expires = "expires="+data.toUTCString();
    cookie = cookie + ";" + expires;
    document.cookie = cookie;
}

function aceitar_cookies()
{
    GuardarCookie("aviso","aceitou",30);
    verificar_cookies();
}

function verificar_cookies()
{
    if (LerCookie("aviso")!=null)
        {
            document.getElementById("aviso").style.display="none";
        }
}