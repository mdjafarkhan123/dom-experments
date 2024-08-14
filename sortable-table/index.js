let table = document.getElementById("table");
table.onclick = function (event) {
    if (event.target.tagName !== "TH") return;
    let tbody = table.querySelector("tbody");
    let rowArray = Array.from(tbody.rows);
    let colName = event.target.dataset.title;
    let compareFn;

    switch (colName) {
        case "name":
            {
                compareFn = function (rowA, rowB) {
                    return rowA.cells[0].innerHTML > rowB.cells[0].innerHTML
                        ? 1
                        : -1;
                };
            }
            break;
        case "earning":
            {
                compareFn = function (rowA, rowB) {
                    return rowA.cells[1].innerHTML - rowB.cells[1].innerHTML;
                };
            }
            break;
        case "state": {
            compareFn = function (rowA, rowB) {
                return rowA.cells[2].innerHTML > rowB.cells[2].innerHTML
                    ? 1
                    : -1;
            };
        }
    }

    rowArray.sort(compareFn);
    tbody.append(...rowArray);
};
