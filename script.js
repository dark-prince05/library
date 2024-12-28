const library = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.isread = function () {
    this.readStatus = this.readStatus ? false : true;
  };
}
function addBookToLibrary(title, author, pages, readStatus) {
  library.push(new Book(title, author, pages, readStatus));
}

const dialog = document.querySelector("dialog");
const addBtn = document.querySelector(".add-btn");
const cancelBtn = document.querySelector(".cancel");

addBtn.addEventListener("click", () => {
  dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
  dialog.close();
});
