const createBookCard = (books) => {
    const sortedBooks = books.books.sort((a, b) => {
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
                <p>Dostupne kopije: {book.avaiableCopies}</p>
            </div>
        </div>
    ));
}

function DisplayBooks (books ) {

  return (
    <div>
        <h2>Knjige</h2>
        <div className="display-books-container">
            <div>aa</div>
            <div className='books-container'>
                {createBookCard(books)}
            </div>
        </div>
    </div>
  )
}

export default DisplayBooks;