import './App.css'
import { genres } from './books'


function AddBooks() {



  const createGenreOptions = () => {
    const genreOptions = []
    for (const genre in genres) {
      genreOptions.push(<option key={genre} value={genre}>{genres[genre]}</option>)
    }
    return genreOptions
  }

  const addBook = () => {

  }

  return (
    <>  
      <div className='add-books-container'>
      <h1>Dodaj novu knjigu</h1>
        <div>
          <input type="text" placeholder='Naslov knjige' className='new-book-input-title'/>
          <input type="text" placeholder='Autor knjige' className='new-book-input-author'/>
          <input type="text" placeholder='Izdavačka kuća' className='new-book-input-publisher'/>
        </div>
        <div>
          <input type="number" placeholder='Godina izdavanja' className='new-book-input-year'/>
          <input type="url" placeholder='Url slike' className='new-book-input-image'/>
        </div>
        <div>
          <select className='new-book-input-genre'>
            {createGenreOptions()}
          </select>
          <input type="number" placeholder='Broj dostupnih knjiga' className='new-book-input-avaiable-copies' />
        </div>
        <button onClick={() => addBook()}>Dodaj knjigu</button>
      </div>
    </>
  )
}

export default AddBooks 
