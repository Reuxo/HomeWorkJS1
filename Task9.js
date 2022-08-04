const table = document.getElementById("sortable");
const headers = table.querySelectorAll("th");
[].forEach.call(headers, function (header, index) {
  header.addEventListener("click", function () {
    sortColumn(index);
  });
});

const tableBody = table.querySelector("tbody");
const rows = tableBody.querySelectorAll("tr");

const sortColumn = function (index) {
  //Клонируем строки
  const newRows = Array.from(rows);
  newRows.sort(function (rowA, rowB) {
    // Получаем содержимое ячеек
    const cellA = rowA.querySelectorAll("td")[index].innerHTML;
    const cellB = rowB.querySelectorAll("td")[index].innerHTML;
    switch (true) {
      case cellA > cellB:
        return 1;
      case cellA < cellB:
        return -1;
      case cellA === cellB:
        return 0;
    }
  });
  //Удаление старых строк
  [].forEach.call(rows, function (row) {
    tableBody.removeChild(row);
  });
  //Добавление новой строки
  newRows.forEach(function (newRows) {
    tableBody.appendChild(newRows);
  });
};
//Функции для преобразования содержимого ячеек в другой тип
const transform = function (index, content) {
  //Получаем тип столбца
  const type = headers[index].getAttribute("data-type");
  switch (type) {
    case "number":
      return parseFloat(content);
    case "string":
    default:
      return content;
  }
};
