let filter = document.getElementById("sort");
let table = document.getElementById("table");
let tbody = table.tBodies[0];
let arr = Array.from(tbody.rows);
let cArr = Array.from(arr);
let compare;

filter.addEventListener("input", function (event) {
    let value = this.value;
    switch (value) {
        case "reset":
            {
                tbody.innerHTML = "";
                tbody.append(...cArr);
            }

            break;
        case "name":
            {
                compare = function (rowA, rowB) {
                    return rowA.cells[0].innerHTML
                        .toLowerCase()
                        .localeCompare(rowB.cells[0].innerHTML.toLowerCase());
                };
            }

            break;

        case "class":
            {
                compare = function (rowA, rowB) {
                    return (
                        parseInt(rowA.cells[1].innerHTML) -
                        parseInt(rowB.cells[1].innerHTML)
                    );
                };
            }
            break;

        case "roll":
            {
                compare = function (rowA, rowB) {
                    return rowA.cells[2].innerHTML - rowB.cells[2].innerHTML;
                };
            }
            break;

        case "cgpa": {
            compare = function (rowA, rowB) {
                return (
                    parseFloat(rowA.cells[3].innerHTML) -
                    parseFloat(rowB.cells[3].innerHTML)
                );
            };
        }
    }
    if (value !== "reset") {
        arr.sort(compare);
        tbody.innerHTML = "";
        tbody.append(...arr);
    }
});
