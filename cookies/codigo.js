//Função que lê os cookies e devolve o valor
//associado a um cookie com o nome indicado
//se o cookie não existir devolve null
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
//Função que cria um cookie com o nome, valor e validade
//indicada (em dias)
function GuardarCookie(nome, valor, dias)
{
    let cookie = nome + "=" + valor +";path=/";
    let data = new Date();
    data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
    let expires = "expires="+data.toUTCString();
    cookie = cookie + ";" + expires;
    document.cookie = cookie;
}

//Função para criar um cookie com o nome
//inserido na input com id txt_nome
//deve mostrar um aviso se não for inserido um nome
//deve mostrar um aviso a indicar que o nome foi guardado
function GuardarNome()
{
    //recolher o nome que está na input
    let nome=document.getElementById("txt_nome").value;
    //verificar se foi inserido um nome
    if (nome=="")
        {
            alert("Tem de inserir um nome.")
        }
        else
        {
            //guardar o nome num cookie
            GuardarCookie("nome_pessoa",nome,30);
            alert("Nome guardado no cookie");
        }
}

//Função para ler o nome guardado no cookie
//e mostrar no label lbl_nome
function MostrarNome()
{
    let nome=LerCookie("nome_pessoa");
    if (nome==null)
        {
            alert("Não existe nenhum nome guardado");
        }
        else
        {
            document.getElementById("lbl_nome").innerHTML=nome;
        }
}