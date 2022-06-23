var minAge = 18;
function _calcAge() {
var date = new Date(document.getElementById("date").value);
var today = new Date();
var timeDiff = Math.abs(today.getTime() - date.getTime());
var age1 = Math.ceil(timeDiff / (1000 * 3600 * 24)) / 365;
return age1;
}
//Compares calculated age with minimum age and acts according to rules//
function _setAge() {
var age = _calcAge();
//alert("my age is " + age);
if (age < minAge) {
alert("Désolés :( tu ne peux pas encore participer à l'élection de Jean Patate !");
} else
alert("Bienvenu/e à l'élection de Jean Patate 2022 !");
window.open(main.htm, _self);
}