function check(){
    var age;
    age = Number(document.getElementById("age").value);
    if(age < 18)
    {
       alert("Accès non autorisé, désolé !");
    }
    else
    {
       alert("Accès autorisé !");
    }
}