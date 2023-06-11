let nameID = prompt("Как Вас зовут?","Имя")
function getName(a){
    alert(`Привет, ${a}`)}
getName(nameID);
function intext(){
    var p;
    p=document.getElementById('nameID');
    p.innerHTML += (`<b>${nameID}</b>`) + ', что мы имеем:';
}
window.onload = function() {
    intext(nameID)
}