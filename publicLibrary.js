function Library(books, numshelves) {
    this.books = books;
    this.numshelves = numshelves;
}
var myLibrary = new Library("Jane Eyre, Tom Sawyer", "Two");

Library.prototype.listBooks = function () {
    console.log(myLibrary);
};

function Books(book, shelf) {
    this.book = book;
    this.shelf = shelf;
}

var tomSawyer = new Books("Tom Sawyer", "shelfOne");
var janeEyre = new Books("Jane Eyre", "shelfTwo");

Books.prototype.unshelf = function () {
    delete this.shelf;
};

Books.prototype.enshelf = function (string) {
    this.shelf = string;
};

function Shelf(book) {
    this.book = book;
}

var shelfOne = new Shelf("Tom Sawyer");
var shelfTwo = new Shelf("Jane Eyre");


tomSawyer.unshelf();

tomSawyer.enshelf("shelfOne");

Library.prototype.listBooks();