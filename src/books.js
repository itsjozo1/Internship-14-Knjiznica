import { v4 as uuidv4 } from 'uuid';

let genres= {
    classic: "Klasik",
    romantic: "Romantični",
    sciFi: "Znanstvena fantastika",
    thriller: "Zagonetni triler",
    fantasy: "Fantastični",
    science: "Znanstveni",
    biography: "Biografija"
}

let books = [
    {
        id: uuidv4(),
        title: "The Great Gatsby",
        author : "F. Scott Fitzgerald",
        bookCoverImage: "https://www.hachettebookgroup.com/wp-content/uploads/2020/06/9780762498130-3.jpg?w=640",
        yearOfPublication: 1925,
        genres: genres.classic,
        avaiableCopies: 5,
        publishingHouse: "Scribner"
    },
    {
        id: uuidv4(),
        title: "To Kill a Mockingbird",
        author : "Harper Lee",
        bookCoverImage: "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
        yearOfPublication: 1960,
        genres: genres.classic,
        avaiableCopies: 6,
        publishingHouse: "J.B. Lippincott & Co."
    },
    {
        id: uuidv4(),
        title: "Pride and Prejudice",
        author : "Jane Austen",
        bookCoverImage: "https://cdn2.penguin.com.au/covers/original/9780141949055.jpg",
        yearOfPublication: 1813,
        genres: genres.romantic,
        avaiableCopies: 3,
        publishingHouse: "T. Egerton, Whitehall"
    },
    {
        id: uuidv4(),
        title: "1984",
        author : "George Orwell",
        bookCoverImage: "https://m.media-amazon.com/images/I/612ADI+BVlL._AC_UF1000,1000_QL80_.jpg",
        yearOfPublication: 1949,
        genres: genres.sciFi,
        avaiableCopies: 8,  
        publishingHouse: "Secker & Warburg"
    },
    {
        id: uuidv4(),
        title: "The Catcher in the Rye",
        author : "J.D. Salinger",
        bookCoverImage: "https://www.pluggedin.com/wp-content/uploads/2020/01/catcher-in-the-rye-cover-image-682x1024.jpeg",
        yearOfPublication: 1951,
        genres: genres.classic,
        avaiableCopies: 4,
        publishingHouse: "Little, Brown and Company"
    },
    {
        id: uuidv4(),
        title: "The Alchemist",
        author : "Paulo Coelho",
        bookCoverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
        yearOfPublication: 1988,
        genres: genres.fantasy,
        avaiableCopies: 7,
        publishingHouse: "HarperTorch"
    },
    {
        id: uuidv4(),
        title: "The Da Vinci Code",
        author : "Dan Brown",
        bookCoverImage: "https://m.media-amazon.com/images/I/815WORuYMML._AC_UF1000,1000_QL80_.jpg",
        yearOfPublication: 2003,
        genres: genres.thriller,
        avaiableCopies: 2,
        publishingHouse: "Doubleday"
    },
    {
        id: uuidv4(),
        title: "The Hobbit",
        author : "J.R.R. Tolkien",
        bookCoverImage: "https://m.media-amazon.com/images/I/71k--OLmZKL._AC_UF894,1000_QL80_.jpg",
        yearOfPublication: 1937,
        genres: genres.fantasy,
        avaiableCopies: 6,
        publishingHouse: "George Allen & Unwin"
    },
    {
        id: uuidv4(),
        title: "The Hunger Games",
        author : "Suzanne Collins",
        bookCoverImage: "https://m.media-amazon.com/images/I/61I24wOsn8L._AC_UF1000,1000_QL80_.jpg",
        yearOfPublication: 2008,
        genres: genres.thriller,
        avaiableCopies: 5,
        publishingHouse: "Scholastic Corporation"
    },
    {
        id: uuidv4(),
        title: "The Lord of the Rings",
        author : "J.R.R. Tolkien",
        bookCoverImage: "https://m.media-amazon.com/images/I/91Yr0n5lNWL._AC_UF1000,1000_QL80_.jpg",
        yearOfPublication: 1954,
        genres: genres.fantasy,
        avaiableCopies: 3,
        publishingHouse: "George Allen & Unwin"
    },
    {
        id: uuidv4(),
        title: "Harry Potter and the Sorcerer's Stone",
        author : "J.K. Rowling",
        bookCoverImage: "https://m.media-amazon.com/images/I/71XqqKTZz7L._AC_UF1000,1000_QL80_.jpg",
        yearOfPublication: 1997,
        genres: genres.fantasy,
        avaiableCopies: 9,
        publishingHouse: "Bloomsbury"
    },
    {
        id: uuidv4(),
        title: "The Chronicles of Narnia",
        author : "C.S. Lewis",
        bookCoverImage: "https://m.media-amazon.com/images/I/81RuC2qCSmL._AC_UF1000,1000_QL80_.jpg",
        yearOfPublication: 1950,
        genres: genres.fantasy,
        avaiableCopies: 4,
        publishingHouse: "Geoffrey Bles"
    },
    {
        id: uuidv4(),
        title: "The Fault in Our Stars",
        author : "John Green",
        bookCoverImage: "https://m.media-amazon.com/images/I/81yAo5ElQlL._AC_UF1000,1000_QL80_.jpg",
        yearOfPublication: 2012,
        genres: genres.romantic,
        avaiableCopies: 6,
        publishingHouse: "Dutton Books"
    },
    {
        id: uuidv4(),
        title: "The Girl on the Train",
        author : "Paula Hawkins",
        bookCoverImage: "https://cdn2.penguin.com.au/covers/original/9781784161750.jpg",
        yearOfPublication: 2015,
        genres: genres.thriller,
        avaiableCopies: 7,
        publishingHouse: "Riverhead Books"
    },
    {
        id: uuidv4(),
        title: "The Help",
        author : "Kathryn Stockett",
        bookCoverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1622355533i/4667024.jpg",
        yearOfPublication: 2009,
        genres: genres.thriller,
        avaiableCopies: 10,
        publishingHouse: "Amy Einhorn Books"
    },
    {
        id: uuidv4(),
        title: "Sapiens: A Brief History of Humankind",
        author : "Yuval Noah Harari",
        bookCoverImage: "https://cdn.ozone.hr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/a/ac0298ff151610a3f389413be98f10ab/sapiens--a-brief-history-of-humankind-30.jpg",
        yearOfPublication: 2011,
        genres: genres.science,
        avaiableCopies: 5,
        publishingHouse: "Harper"
    },
    {
        id: uuidv4(),
        title: "Educated",
        author : "Tara Westover",
        bookCoverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635i/35133922.jpg",
        yearOfPublication: 2018,
        genres: genres.biography,
        avaiableCopies: 6,
        publishingHouse: "Random House"
    },
    {
        id: uuidv4(),
        title: "Becoming",
        author : "Michelle Obama",
        bookCoverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528206996i/38746485.jpg",
        yearOfPublication: 2018,
        genres: genres.biography,
        avaiableCopies: 3,
        publishingHouse: "Crown Publishing Group"
    },
    {
        id: uuidv4(),
        title: "The Immortal Life of Henrietta Lacks",
        author : "Rebecca Skloot",
        bookCoverImage: "https://m.media-amazon.com/images/I/81coyP8S-ZL._AC_UF1000,1000_QL80_.jpg",
        yearOfPublication: 2010,
        genres: genres.science,
        avaiableCopies: 8,
        publishingHouse: "Crown Publishing Group"
    },
    {
        id: uuidv4(),
        title: "The Glass Castle",
        author : "Jeannette Walls",
        bookCoverImage: "https://static1.squarespace.com/static/53eec134e4b0def980284edb/53eef6b3e4b0124ec1e22111/5990e69bdb29d643eb0f64e1/1503759480899/glass-castle-book-cover%5B1%5D.jpg?format=1500w",
        yearOfPublication: 2005,
        genres: genres.biography,
        avaiableCopies: 4,
        publishingHouse: "Scribner"
    }
];


if(!localStorage.getItem('books')){
    localStorage.setItem('books', JSON.stringify(books));
}

const addBook = (book) => {
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
}

const borrowBook = (id) => {
    let book = books.find(book => book.id === id);
    if(book.avaiableCopies > 0){
        book.avaiableCopies--;
        localStorage.setItem('books', JSON.stringify(books));
    }
}

const returnBook = (id) => {
    let book = books.find(book => book.id === id);
    book.avaiableCopies++;
    localStorage.setItem('books', JSON.stringify(books));
}

export { books, addBook, borrowBook, returnBook, genres };