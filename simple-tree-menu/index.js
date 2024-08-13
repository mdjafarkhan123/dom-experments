let menu = document.getElementById("menu");
menu.onclick = function (event) {
    if (event.target.tagName != "SPAN") {
        console.log(event.target.tagName, "No li found");
        return;
    }
    let submenu = event.target.parentElement.querySelector("ul");
    if (submenu == null) return;
    submenu.hidden = !submenu.hidden;
};
