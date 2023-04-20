let currentTemplate = 1;
let currentButton = 0;
let button = document.getElementById("button" + currentButton);
let targetDiv = document.getElementById("targetDiv");


button.addEventListener("click", caricaTemplate);
function caricaTemplate() {
    targetDiv.innerHTML = "";
    let template = document.getElementById("template" + currentTemplate);
    let clone = document.importNode(template.contentEditable, true);
    targetDiv.appendChild(clone);
    currentTemplate++;
    currentButton++;
}