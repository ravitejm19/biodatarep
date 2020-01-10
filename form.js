function calling(){
    var frt=document.getElementById("fname").value;
    var snd=document.getElementById("sname").value;
    var age=document.getElementById("age").value;
    var dname=document.getElementById("dept").value;
    if(confirm(`is your name correct?${frt} ${snd}` ))
    {
        alert("your name is entered");
    }
}