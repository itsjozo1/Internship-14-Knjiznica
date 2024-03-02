const getInputValue = (className) => document.querySelector(`.${className}`).value.trim();


const checkAvaiableCopies = () => {
    let avaiableCopies = document.querySelector('.input-avaiable-copies');
    avaiableCopies.style.border = '';
    if (Math.abs(avaiableCopies.value) > 1 && avaiableCopies.value !== ''){
      avaiableCopies.value = Math.floor(avaiableCopies.value);
      return true;
    }
    else{
      avaiableCopies.style.border = '1px solid red';
      avaiableCopies.value = '';
      return false;
    }
  };

const checkValidYear = () => {   
  const year = document.querySelector('.input-year');
  year.style.border = '';
  if (Math.abs(year.value) < new Date().getFullYear() && year.value !== ''){
    return checkAvaiableCopies();
  }
  else{
    year.style.border = '1px solid red';
    year.value = '';
    checkAvaiableCopies();
    return false;
  }
};  

const checkInput = () => {
  const fields = ['title', 'author', 'publisher', 'genre'];
  if (fields.every(field => getInputValue(`input-${field}`) !== '')) {
        fields.forEach(field => document.querySelector(`.input-${field}`).style.border = '');
      return checkValidYear();
    }
    else{
        fields.forEach(field => {
        document.querySelector(`.input-${field}`).style.border = '';
        if (getInputValue(`input-${field}`) === '') {
        document.querySelector(`.input-${field}`).style.border = '1px solid red';
      }
    });
    checkValidYear();
    return false;
  }
};

export { getInputValue, checkInput };