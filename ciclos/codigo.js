function contar()
{
    for(let i=0;i<10;i++)
    {
        alert(i);
    }
    alert('Acabou o ciclo for');
}
function tabuada()
{
    document.getElementById("tabuada").innerHTML="";
    let numero=Number(document.getElementById("numero").value);
    for(let i=1;i<=10;i++)
    {
        if (i==5) continue;
        let linha=i + " x " + numero + " = "+(i*numero);
        document.getElementById("tabuada").innerHTML+=linha+"<br>";
    }
}
function numeros_pares()
{
    document.getElementById("tabuada").innerHTML="";
    for(let i=2;i<100;i+=2)
    {
        document.getElementById("tabuada").innerHTML += i + "<br>";
    }
}
function numeros_pares_while()
{
    document.getElementById("tabuada").innerHTML="";
    let i=2;
    while(i<100)
    {
        document.getElementById("tabuada").innerHTML += i + "<br>";
        i += 2;
    }
}
function tabuada_while()
{
    document.getElementById("tabuada").innerHTML="";
    let numero=Number(document.getElementById("numero").value);
    let i=1;
    while(i<=10)
    {
        let linha=i + " x " + numero + " = "+(i*numero);
        document.getElementById("tabuada").innerHTML+=linha+"<br>";
        i++;
    }
}