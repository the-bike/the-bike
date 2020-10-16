import { configureStore } from '@reduxjs/toolkit';

import booksReducer from '../features/books/booksSlice';
import makersReducer from '../features/makers/makersSlice';

export default configureStore({
  reducer: {
    books: booksReducer,
    makers: makersReducer,
  },
});
