import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { genres } from './books';
import { checkInput, getInputValue } from './checkInputMethods.js';

function AddBooks() {  


  const addBook = () => {
    const bookData = {
      id: uuidv4(),
      title: getInputValue('input-title'),
      author: getInputValue('input-author'),
      publishingHouse: getInputValue('input-publisher'),
      yearOfPublication: getInputValue('input-year'),
      bookCoverImage: getInputValue('input-image'),
      genres: genres[getInputValue('input-genre')],
      avaiableCopies: Math.abs(getInputValue('input-avaiable-copies'))
    };
    
    if (checkInput()) {
      console.log(bookData);
    }
  };

  const createGenreOptions = () => {
    return Object.keys(genres).map(genre => (
      <option key={genre} value={genre}>
        {genres[genre]}
      </option>
    ));
  };

  return (
    <div className='add-books-container'>
      <h1>Dodaj novu knjigu</h1>
      <div>
        <input type="text" placeholder='Naslov knjige' className='input-title'/>
        <input type="text" placeholder='Autor knjige' className='input-author'/>
        <input type="text" placeholder='Izdavačka kuća' className='input-publisher'/>
      </div>
      <div>
        <input type="number" placeholder='Godina izdavanja' className='input-year'/>
        <input type="url" placeholder='Url slike' className='input-image'/>
      </div>
      <div>
        <select className='input-genre'>
          {createGenreOptions()}
        </select>
        <input type="number" placeholder='Broj dostupnih knjiga' className='input-avaiable-copies' />
      </div>
      <button onClick={addBook}>Dodaj knjigu</button>
    </div>
  );
}

export default AddBooks;
