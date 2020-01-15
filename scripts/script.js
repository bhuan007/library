let myLibrary = [];
let tableData = "";
const bookForm = document.querySelector(".addBookForm");

function addBookToLibrary(obj) {
    myLibrary.push(obj);
}

function render(myArray) {
    
    for (let index in myArray) {
        let selection = ""
        if (myArray[index].isRead == true) {
            selection = '<select><option value="true" selected>Read</option><option value="false">Not Read</option></select>'
        }
        else {
            selection = '<select><option value="true">Read</option><option value="false" selected>Not Read</option></select>'
        }
        tableData += `<tr class="index${index}"><td>${myArray[index].title}</td><td>${myArray[index].author}</td><td>${myArray[index].pages}</td><td>${selection}</td><td><button onclick="removeBtn(${index})">Remove</button></td></tr>`
    }
    document.querySelector(".tableData").innerHTML = tableData;
}

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.readStatus = function () {
        if (this.isRead) {
            return "read";
        }
        else {
            return "not read yet";
        }
    }
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus()}`;
    }
}


function showForm() {
    bookForm.style.display = "grid";
}

function hideForm() {
    bookForm.style.display = "none";
    clearForm();
}

function clearForm() {
    title.value = "";
    author.value = "";
    pages.value = "";
    status.value = "false";
}

function formSubmit() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let status = document.getElementById('status').value;

    if (status == "true") {
        status = true;
    }
    else {
        status = false;
    }
    const book = new Book(title, author, pages, status);
    addBookToLibrary(book);
    tableData = "";
    render(myLibrary);
    clearForm();
    hideForm();
}

function removeBtn(num) {
    myLibrary.splice(num, 1);
    tableData = "";
    render(myLibrary);
}


//Creating and adding demo books to the myLibrary array and rendering to the table
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

const book2 = new Book("Blood of Elves", "Andrzej Sapkowski", 432, false);

const book3 = new Book("The Two Towers", "J.R.R. Tolkien", 352, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
render(myLibrary);







