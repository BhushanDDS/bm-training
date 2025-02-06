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