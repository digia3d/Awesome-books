const bookCollection = [
    {
      title: 'The Sulivan',
      author: 'Mario Puzo',
    },
    {
      title: 'The Poison Arrow Tree',
      author: 'Shel Arensen',
    },
  ];
  
  function addBook(book) {
    bookCollection.push(book);
  }
  
  function removeBook(index) {
    bookCollection.splice(index, 1);
  }
  
  function displayBooks(books) {
    const booksContainer = document.querySelector('#book-collection');
  
    const booksHtml = books.map(
      ({ title, author }) => `
              <div>
                  <h2>${title}</h2>
                  <p>${author}</p>
                  <button>Remove</button>
                  <hr />
              <div>
          `,
    );
  
    booksContainer.innerHTML = booksHtml.join('');
  }
  
  
  
  
  
  
  
  window.onload = () => {
     const bookForm = document.getElementById('bookForm')
  
      bookForm.addEventListener('submit',  (event) => {
           event.preventDefault();
          
      const bookTitle = document.getElementById('title');
      const bookAuthor = document.getElementById('author');
  
      let newBook = { title: bookTitle.value,
      author: bookAuthor.value,};
  
      addBook(newBook);
      displayBooks(bookCollection); 
      }
      );
  
  displayBooks(bookCollection); 
   }
  
  // remove div on click
  const removeButton = document.getElementById('remove-btn');
  const bookDiv = document.querySelectorAll('.book');
  
  function removeDiv () {
      bookDiv.style.display = 'none';
  }
  
  removeButton.addEventListener('click', removeDiv);