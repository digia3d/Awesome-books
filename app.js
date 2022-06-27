const myBooks = [
    {
        title: 'The Godfather',
        author: 'Mario Puzo',
    },

    {
        title: 'Becoming',
        author: 'Michele',
    },
]

function addBook(book) {
    myBooks.push(book);
  }

  function removeBook(index) {
    myBooks.splice(index, 1);
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
 
  


