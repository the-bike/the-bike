import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { client } from '../../api/client';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await client.get('/api/books.json');
    return response.books;
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBooks.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.books = action.payload;
    },
    [fetchBooks.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export default booksSlice.reducer;

export const selectAllBooks = state => state.books.books;

export const selectBookById = (state, bookId) => state.books.books.find(book => book.id === bookId);
