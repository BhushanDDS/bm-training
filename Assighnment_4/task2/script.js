/*
Task: Create an object bookLibrary to manage a collection of books.
The object should have the following properties and methods:
books: An array of book objects (each book has title, author, and yearPublished).
addBook(book): Adds a new book to the collection.
getBooksByAuthor(author): Returns all books by a given author.
removeBook(title): Removes a book by title.
Add a method getAllBooks to return a list of all book titles.
*/


const bookLibrary = {
    books: [{
            title: 'Read books',
            author: 'Pandurang',
            yearPublished: '2020'
        },
        {

            title: 'Dont read books',
            author: 'Pandurang',
            yearPublished: '2016'
        },
        {
            title: 'Dont read books part 2',
            author: 'Uzaif',
            yearPublished: '2011'
        },
        {
            title: 'Read books part 2',
            author: 'Onkar',
            yearPublished: '2023'
        }
    ],
    addbook: function(title, author, yop) {
        const temp = {
            title: title,
            author: author,
            yearPublished: yop
        }
        if (temp) {
            bookLibrary.books.push(temp);
            console.log('Done');

        }


    },
    getBookByAuthor: function(author) {
        this.books.forEach((val) => {
            if (val.author === author) {
                console.log(val);

            }

        })

    },
    removeBook: function(title) {
        let index = this.books.findIndex(val => val.title === title);
        if (index != -1) {
            this.books.splice(index, 1)
            console.log('deleted');

            this.getAllBooks()

        }

    },
    getAllBooks: function() {


        console.log('Books');

        bookLibrary.books.forEach((val) => {
            console.log(`book title : ${val.title} \n book author ${val.author} \n published in ${val.yearPublished}\n\n`);

        })
    }
}

// console.log(bookLibrary.books[0].author);
bookLibrary.addbook("new Book ", "Umesh", "2000");
let res = bookLibrary.getBookByAuthor('Umesh');
console.log(res);
bookLibrary.removeBook('Read books');
// bookLibrary.getAllBooks()