import { useState } from "react";
import { borrowBook, findBook, genres, returnBook } from "./books";

const createGenreOptions = () => {
    return Object.keys(genres).map(genre => (
      <option key={genre} value={genre}>
        {genres[genre]}
      </option>
    ));
};


function CreateBookCard ( books ) {
    const booksInitialCopies = {};
    books.forEach(book => (booksInitialCopies[book.id] = book.avaiableCopies));

    const [booksCopies, setBooksCopies] = useState(booksInitialCopies);
    
    
    const sortedBooks = books.sort((a, b) => {
        if (a.author !== b.author) {
            return a.author.localeCompare(b.author);
        }
        if (a.title !== b.title) {
            return a.title.localeCompare(b.title);
        }
        return a.yearOfPublication - b.yearOfPublication;
    });
    
    const checkBookImageLink = (book) => {
        if (book.bookCoverImage === '') {
            return 'https://www.freeiconspng.com/uploads/no-image-icon-4.png';
        }
        return book.bookCoverImage;
    }
    const handleBorrowBook = (bookId) => {
        borrowBook(bookId);
        const updatedBooksCopies = { ...booksCopies };
        updatedBooksCopies[bookId] = findBook(bookId).avaiableCopies;
        setBooksCopies(updatedBooksCopies);
    };
    
    const handleReturnBook = (bookId) => {
        returnBook(bookId);
        const updatedBooksCopies = { ...booksCopies };
        updatedBooksCopies[bookId] = findBook(bookId).avaiableCopies;
        setBooksCopies(updatedBooksCopies);
    };
    
    return sortedBooks.map(book => (
        <div key={book.id} className='book-card'>
            <img src={checkBookImageLink(book)} alt={book.title} style={{ opacity: booksCopies[book.id] === 0 ? 0.7 : 1 }} />
            <div className="book-card-desc">
                <h3>{book.title} {booksCopies[book.id]  === 0 && "(Nedostupno)"}</h3>
                <p>{book.author}</p>
                <br />
                <p>Izdavačka kuća: {book.publishingHouse}</p>
                <p>Godina izdavanja: {book.yearOfPublication}</p>
                <p>Žanr: {book.genres}</p>
                <p>Broj dostupnih knjiga: {booksCopies[book.id]}</p>
                <div className="button-container">
                    <button className="borrow-button" onClick={() => handleBorrowBook(book.id)} style={{ color: booksCopies[book.id]  === 0 ? "red" : "white" }} disabled={booksCopies[book.id]  === 0}>Posudi</button>
                    <button className="return-button" onClick={() => handleReturnBook(book.id)}>Vrati</button>
                </div>
            </div>
        </div>
    ));
    
}
    

function DisplayBooks(books) {
    const [filterName, setFilterName] = useState('');
    const [filterGenre, setFilterGenre] = useState('');

    const filteredBooks = books.books.filter(book => {
        const nameMatch = book.title.toLowerCase().startsWith(filterName.toLowerCase());
        const genreMatch = filterGenre === '' || book.genres === genres[filterGenre];
        return nameMatch && genreMatch;
    });

    const handleNameChange = (event) => {
        setFilterName(event.target.value);
    };

    const handleGenreChange = (event) => {
        setFilterGenre(event.target.value);
    };

    return (
        <div className="display-books-container">
            <div className="filter-books-container">
                <h2>Pretraži knjigu</h2>
                <div className="filter-books-name-container">
                    <h3>Ime knjige</h3>
                    <input type="text" className="filter-books-name-input" value={filterName} onChange={handleNameChange} />
                </div>
                <select className='filter-genre' value={filterGenre} onChange={handleGenreChange}>
                    <option value="">Svi žanrovi</option>
                    {createGenreOptions()}
                </select>
            </div>
            <div className='books-container'>
                {CreateBookCard(filteredBooks)}
            </div>
        </div>
    );
}

export default DisplayBooks;
