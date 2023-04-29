let library = [];
const displayTitle = document.getElementById("display-title");
const displayAuthor = document.getElementById("display-author");
const displayPages = document.getElementById("display-pages");
const tableList = document.getElementsByTagName("table")[0];
let addButton = document.querySelector(".btn");

class Book {
  //Constructor
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }
}
function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;

  const selectElement = document.getElementById("status");
  //let arrStatus = [...status];

  //const optionValues = arrStatus.map((optionValue) => optionValue.value);

  const selectedOption = selectElement.options[selectElement.selectedIndex];

  // Get the text content of the selected option
  let selectedOptionText = selectedOption.textContent;

  // Log the selected option text to the console

  let newTitleElement = document.createElement("td");
  let newAuthorElement = document.createElement("td");
  let newPagesElement = document.createElement("td");
  let statusButton = document.createElement("button");
  let deleteButton = document.createElement("button");
  let displayTable = document.querySelector(".display-table");

  let newBook = new Book(`${title}`, `${author}`, `${pages}`, `${selectedOptionText}`);
  newTitleElement.textContent = newBook.title;
  newAuthorElement.textContent = newBook.author;
  newPagesElement.textContent = newBook.pages;

  statusButton.textContent = selectedOptionText;
  deleteButton.textContent = "DELETE";
  let newBookElement = document.createElement("tr");

  newBookElement.appendChild(newTitleElement);
  newBookElement.appendChild(newAuthorElement);
  newBookElement.appendChild(newPagesElement);
  newBookElement.appendChild(statusButton);
  newBookElement.appendChild(deleteButton);

  tableList.appendChild(newBookElement);
}

addButton.addEventListener("click", addBook);
