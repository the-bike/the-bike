import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectAllBooks, fetchBooks } from './booksSlice';

const BookExcerpt = ({ book }) => {
  return (
    <article className="book-excerpt" key={book.id}>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <Link
        className="btn btn-primary"
        to={`/books/${book.id}`}
      >Open</Link>
    </article>
  );
};

export const BooksList = () => {
  const dispatch = useDispatch();

  const books = useSelector(selectAllBooks);
  const status = useSelector(state => state.books.status);
  const error = useSelector(state => state.books.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    content = books.map(book => (
      <BookExcerpt key={book.id} book={book} />
    ));
  } else if (status === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <section>
      <h3>Books</h3>
      {content}
    </section>
  )
};
