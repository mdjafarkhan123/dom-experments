let table = document.getElementById("table");
let area;
let content;
table.onclick = function (event) {
    let target = event.target.closest("td");
    if (!target) return;
    if (!this.querySelector("textarea")) {
        makeEditable(target);
    }
    if (event.target.nodeName == "BUTTON") updateContent(event.target, target);
};

function makeEditable(td) {
    area = document.createElement("textarea");
    area.innerHTML = td.innerHTML;
    content = td.innerHTML;
    td.innerHTML = "";
    td.append(area);
    td.insertAdjacentHTML(
        "beforeend",
        `<div class="editcontrols"><button data-update="ok">Ok</button><button data-update="cancel">Cancel</button></div>`
    );
}
function updateContent(button, td) {
    if (button.dataset.update == "cancel") {
        td.innerHTML = content;
    } else {
        if (confirm("Are you sure?")) {
            td.innerHTML = area.value;
        } else {
            td.innerHTML = content;
        }
    }
}
