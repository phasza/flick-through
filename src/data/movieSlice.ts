import {createSlice} from '@reduxjs/toolkit'
import type Movie from './movie';

interface MovieState {
  moviesById: Record<number, Movie>
}

const initialState: MovieState = { moviesById: {} };

const slice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    
  }
});

export default slice.reducer;