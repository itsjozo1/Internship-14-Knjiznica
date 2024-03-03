import { genres } from "./books";
import { useState } from "react";

const createGenreOptions = () => {
    return Object.keys(genres).map(genre => (
      <option key={genre} value={genre}>
        {genres[genre]}
      </option>
    ));
};

const createBookCard = (books) => {
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

    return sortedBooks.map(book => (
        <div key={book.id} className='book-card'>
            <img src={checkBookImageLink(book)} alt={book.title} />
            <div className="book-card-desc">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <br />
                <p>Izdavačka kuća: {book.publishingHouse}</p>
                <p>Godina izdavanja: {book.yearOfPublication}</p>
                <p>Žanr: {book.genres}</p>
                <p>Broj dostupnih knjiga: {book.avaiableCopies}</p>
            </div>
        </div>
    ));
}

function DisplayBooks(books ) {
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
        <div>
            <h2>Knjige</h2>
            <div className="display-books-container">
                <div className="filter-books-container">
                    <h2>Pretraži knjigu</h2>
                    <div className="filter-books-name-container">
                        <h3>Ime knjige</h3>
                        <input type="text" className="filter-books-name-input" value={filterName} onChange={handleNameChange} />
                    </div>
                    <div className="filter-books-genre-container">
                        <h3>Žanr</h3>
                        <select className='filter-genre' value={filterGenre} onChange={handleGenreChange}>
                            <option value="">Svi žanrovi</option>
                            {createGenreOptions()}
                        </select>
                    </div>
                </div>
                <div className='books-container'>
                    {createBookCard(filteredBooks)}
                </div>
            </div>
        </div>
    );
}

export default DisplayBooks;