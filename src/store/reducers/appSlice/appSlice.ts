import { createSlice } from '@reduxjs/toolkit';
import IMovieDetails from '../../../types/movieDetails';

export interface IMovie {
  title: string;
  year: string;
}

export interface IAppState {
  movies: IMovie[];
  pageNumber: Number;
  searchQuery: String;
  movieDetails: IMovieDetails | null | undefined;
}

const initialState: IAppState = {
  movies: [],
  pageNumber: 1,
  searchQuery: 'love',
  movieDetails: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMovies: (state, { payload }) => {
      console.log(payload, 'payload movies');
      state.movies = payload;
    },
    setPageNumber: (state, { payload }) => {
      console.log(payload, 'payload page number');
      state.pageNumber = payload;
    },
    setSearchQuery: (state, { payload }) => {
      console.log(payload, 'payload search query');
      state.searchQuery = payload;
    },
    setMovieDetails: (state, { payload }) => {
      state.movieDetails = payload;
    },
  },
});

export const { setMovies, setPageNumber, setSearchQuery, setMovieDetails } =
  appSlice.actions;

export default appSlice.reducer;
