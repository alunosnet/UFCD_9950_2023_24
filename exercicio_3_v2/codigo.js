let nomes=["Joaquim","Joana","Maria"]

function mostrar_nomes()
{
    document.getElementById("div_nomes").innerHTML="";
    //faz aqui o código que vai mostrar os nomes do array nomes
    //na div com id div_nomes
    for(let i=nomes.length-1;i>=0;i--)
    {
        document.getElementById("div_nomes").innerHTML += nomes[i] + '<br>'; 
    }
}