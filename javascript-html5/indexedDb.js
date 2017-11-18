var databaseController = new DatabaseController("books");

function init() {
  databaseController.onopenend = refreshAllBooks;
  databaseController.open();
}

function refreshAllBooks() {
  databaseController.getAllBooks(function(books) {
      refreshList(books);
  });
}

function refreshList(books) {
  var bookList = "";

  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    bookList += "<li>Id: " + book.id
      + ", Book title: " + book.title
      + ", Book author: " + book.author
      + "<button onclick='databaseController.removeBook(" + book.id
      + ", refreshAllBooks)'>X</button>"
      + "<button onclick='editBook(" + JSON.stringify(book) + ")'>E</button>"
      + "</li>";
  }

  document.getElementById("bookList").innerHTML = bookList;
}

function addBook(){
  var bookTitle = document.getElementById("bookTitle").value;
  var bookAuthor = document.getElementById("bookAuthor").value;

  databaseController.addBook({title: bookTitle, author: bookAuthor},
    function(result) {
      if (!result.error)
        init();
      else
        alert(result.message);
    });
}

function editBook(book) {
  book.title = document.getElementById("bookTitle").value;
  book.author = document.getElementById("bookAuthor").value;

  databaseController.editBook(book, function(result) {
    refreshAllBooks();
  });
}

function DatabaseController(databaseName) {
  this.databaseName = databaseName;
}

DatabaseController.prototype.open = function() {
  var openRequest = indexedDB.open(this.databaseName);
  var controller = this;

  openRequest.onsuccess = function(event) {
    controller.db = openRequest.result;
    controller.onopenend();
  };

  openRequest.onerror = function(event) {

  };

  openRequest.onupgradeneeded = function(event) {
    controller.db = event.target.result;
    controller.db.createObjectStore("books", {keyPath: "id", autoIncrement: true});
  };
};

DatabaseController.prototype.addBook = function(book, callback) {
  var transaction = this.db.transaction(["books"], "readwrite");
  var objectStore = transaction.objectStore("books");
  var addRequest = objectStore.add(book);

  addRequest.onsuccess = function(event) {
    callback({error: false, key: event.target.result});
  };

  addRequest.onerror = function(event) {
    callback({error: true, message: "Book already exists in database"});
  };
};

DatabaseController.prototype.editBook = function(book, callback) {
  var transaction = this.db.transaction(["books"], "readwrite");
  var objectStore = transaction.objectStore("books");
  var putRequest = objectStore.put(book);

  putRequest.onsuccess = function(event) {
    callback({error: false});
  };

  putRequest.onerror = function(event) {
    callback({error: true, message: "Book doesn't exists in database"});
  };
};

DatabaseController.prototype.removeBook = function(bookKey, callback) {
  var transaction = this.db.transaction(["books"], "readwrite");
  var objectStore = transaction.objectStore("books");
  var deleteRequest = objectStore.delete(bookKey);

  deleteRequest.onsuccess = function(event) {
    callback({error: false});
  };

  deleteRequest.onerror = function(event) {
    callback({error: true,
      message: "There is no book in database with id " + bookKey});
  };
};

DatabaseController.prototype.getBook = function(bookKey, callback) {
  var transaction = this.db.transaction(["books"], "readwrite");
  var objectStore = transaction.objectStore("books");
  var getRequest = objectStore.get(bookKey);

  getRequest.onsuccess = function(event) {
    callback({error: false, book: event.target.result});
  };

  getRequest.onerror = function(event) {
    callback({error: true,
      message: "There is no book in database with id " + bookKey});
  };
};

DatabaseController.prototype.getAllBooks = function(callback) {
  var transaction = this.db.transaction(["books"], "readwrite");
  var objectStore = transaction.objectStore("books");
  var allBooks = [];

  objectStore.openCursor().onsuccess = function (event) {
    var cursor = event.target.result;

    if (cursor) {
      allBooks.push(cursor.value);
      cursor.continue();
    }
    else {
      callback(allBooks);
    }
  };
};
