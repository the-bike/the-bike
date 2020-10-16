import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { client } from '../../api/client';

const initialState = [];

export const fetchMakers = createAsyncThunk(
  'makers/fetchMakers',
  async () => {
    const response = await client.get('/api/makers.json');
    return response.makers;
  }
);

const makersSlice = createSlice({
  name: 'makers',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMakers.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export default makersSlice.reducer;

export const selectMakers = state => state.makers;
