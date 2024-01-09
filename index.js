function myFun()
{
    var ui=document.getElementById("myInput").value;
    
    displaymsg(ui);
}
function displaymsg(a)
{
    document.getElementById("msg").textContent=a;
}


function clearFun()
{
    document.getElementById('myInput').value="";
    document.getElementById("msg").textContent="";

}