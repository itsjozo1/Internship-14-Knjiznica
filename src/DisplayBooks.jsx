const createBookCard = (books) => {
  return books.books.map(book => (
    <div key={book.id} className='book-card'>
      <img src={book.bookCoverImage} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.publishingHouse}</p>
      <p>{book.yearOfPublication}</p>
      <p>{book.genres}</p>
      <p>{book.avaiableCopies}</p>
    </div>
  ));
}

function DisplayBooks (books ) {
    
  return (
    <div>
        <h2>Knjige</h2>
        <div className='books-container'>
            {createBookCard(books)}
        </div>
    </div>
  )
}

export default DisplayBooks;