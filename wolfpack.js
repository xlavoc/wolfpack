document.getElementById("btnSkacz").addEventListener("mouseover", skacz);
document.getElementById("btnSkacz").addEventListener("mouseout", stoj);
document.getElementById("btnIdz").addEventListener("mouseover", idz);
document.getElementById("btnIdz").addEventListener("mouseout", stoj);
document.getElementById("info").addEventListener("mouseover", informacja);
document.getElementById("info").addEventListener("mouseout", nieinformacja);

function skacz(){
  document.getElementById("wilk_atakuje").style.display = "block";
  document.getElementById("wilk_grozny").style.visibility = "hidden";
}
function stoj() {
  document.getElementById("wilk_atakuje").style.display = "none";
  document.getElementById("wilk_grozny").style.visibility = "visible";
  document.getElementById("wilk_przyczajony").style.display = "none";
}
function idz(){
  document.getElementById("wilk_przyczajony").style.display = "block";
  document.getElementById("wilk_grozny").style.visibility = "hidden";
}
function informacja() {
  document.getElementById("opis").style.opacity = "1";
  document.getElementById("opis").style.visibility = "visible";
}
function nieinformacja() {
  document.getElementById("opis").style.opacity = "0";
  //document.getElementById("opis").style.visibility = "hidden";
}
var lastMod = document.lastModified;

document.getElementById("version").innerHTML = "&copy; ROBaK, version: 1.0, last update: " + lastMod.slice(3,5) +
"-" + lastMod.slice(0,2) + "-" + lastMod.slice(6,10) + " " + lastMod.slice(11);
