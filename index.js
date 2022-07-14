function appendNumber(n)
{
    document.getElementById("ans").value+=n.value;
}

function calculate()
{
    n=document.getElementById("ans").value;
    ans=eval(n);
    document.getElementById("ans").value=ans;
}
    
function Clear()
{
    document.getElementById("ans").value=""
}