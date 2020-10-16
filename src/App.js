import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Navbar } from './app/Navbar';
import { About } from './app/About';
import { BooksList } from './features/books/BooksList';
import { SingleBookPage } from './features/books/SingleBookPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <BooksList />
          </Route>
          <Route exact path="/books/:bookId">
            <SingleBookPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
