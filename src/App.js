import React from 'react';

import './App.css';
import BooksList from './features/books/BooksList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h5>The Books</h5>
      </header>
      <BooksList/>
    </div>
  );
}

export default App;
