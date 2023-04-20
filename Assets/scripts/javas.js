let currentTemplate = 1;
let carica = document.getElementsByClassName("nextPoint");
let targetDiv = document.getElementById("targetDiv");
let currentButton = 1;


carica.addEventListener("click", caricaTemplate);
function caricaTemplate() {
    targetDiv.innerHTML = "";
    let template = document.getElementById("template" + currentTemplate);
    let clone = document.importNode(template.contentEditable, true);
    targetDiv.appendChild(clone);
    currentTemplate++;
}