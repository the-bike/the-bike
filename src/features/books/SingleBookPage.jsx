import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { selectBookById } from './booksSlice';

export const SingleBookPage = () => {
  const { bookId } = useParams();

  const book = useSelector(state => selectBookById(state, bookId));

  if (!book) {
    return (
      <section>
        <h5>Not found!</h5>
      </section>
    );
  }

  return (
    <section>
      <article>{book.title}</article>
      <Link to="/">Back</Link>
    </section>
  );
};
