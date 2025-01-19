// src/components/BookItem.js
import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div className="book-item">
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      <h3>{book.volumeInfo.title}</h3>
      <p>{book.volumeInfo.authors?.join(', ')}</p>
      <p>{book.volumeInfo.publishedDate}</p>
      <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
        Mais informações
      </a>
    </div>
  );
};

export default BookItem;
