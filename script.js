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

addBookToLibrary(
  "How to win friends and infuence people",
  "Dale Carnegie",
  192,
  true,
);

const container = document.querySelector(".container");
const form = document.querySelector(".form");
function showBooks() {
  for (let i = 0; i < library.length; i++) {
    const sno = document.createElement("div");
    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const read = document.createElement("div");
    const readBtn = document.createElement("button");
    const remove = document.createElement("div");
    const removeBtn = document.createElement("button");
    sno.textContent = i + 1;
    title.textContent = library[i].title;
    author.textContent = library[i].author;
    pages.textContent = library[i].pages;
    if (library[i].readStatus == true) {
      readBtn.classList.add("read-yes", "read");
      readBtn.textContent = "Yes";
    } else {
      readBtn.classList.add("read-no", "read");
      readBtn.textContent = "No";
    }
    readBtn.addEventListener("click", () => {
      library[i].isread();
      removeBooks();
      showBooks();
    });
    removeBtn.textContent = "X";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", () => {
      library.splice(i, 1);
      removeBooks();
      showBooks();
      if (library.length == 0) container.style.visibility = "hidden";
      else container.style.visibility = "visible";
    });
    read.append(readBtn);
    remove.append(removeBtn);
    display.appendChild(sno);
    display.appendChild(title);
    display.appendChild(author);
    display.appendChild(pages);
    display.appendChild(read);
    display.appendChild(remove);
  }
}
function removeBooks() {
  let divs = Array.from(display.children);
  for (let i = 6; i < divs.length; i++) {
    display.removeChild(divs[i]);
  }
}

const dialog = document.querySelector("dialog");
const addBtn = document.querySelector(".add-btn");
const cancelBtn = document.querySelector(".cancel");
const display = document.querySelector(".container");
const submitBtn = document.querySelector(".submit-btn");

window.addEventListener("load", () => {
  form.reset();
  showBooks();
});

addBtn.addEventListener("click", () => {
  dialog.showModal();
});

cancelBtn.addEventListener("click", (e) => {
  dialog.close();
  e.preventDefault();
});

submitBtn.addEventListener("click", (e) => {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#check");
  if (!title || !author || !pages) return;
  addBookToLibrary(title, author, pages, read.checked);
  removeBooks();
  showBooks();
  form.reset();
  dialog.close();
  container.style.visibility = "visible";
  e.preventDefault();
});
