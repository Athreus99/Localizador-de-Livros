import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import './App.css';

const BookFinderApp = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      setBooks(response.data.items);
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
    }
    setLoading(false);
  };

  return (
    <div className="book-finder-app">
      <SearchBar query={query} setQuery={setQuery} searchBooks={searchBooks} />
      {loading && <div className="loading">Carregando...</div>}
      <BookList books={books} />
    </div>
  );
};

export default BookFinderApp;
