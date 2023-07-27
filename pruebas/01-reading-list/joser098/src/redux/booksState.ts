import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Book, BooksState } from "../types";
import { library } from "../../../books.json";

const allBooks: Book[] = [];
const genres: string[] = []

library.map((book): void => {
  allBooks.push(book.book);
  if(!genres.includes(book.book.genre)){
    genres.push(book.book.genre)
  }
});

const initialState: BooksState = {
  libraryStorage: {
    availableBooks: JSON.parse(localStorage.getItem('availableBooks') || JSON.stringify(allBooks)),
    readingList: JSON.parse(localStorage.getItem('readingList') || '[]')
  },
  genres: genres,
  filters: {
      pages: '0',
      genre: 'all'
  }
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    syncStorage: (state, { payload }) => {
      state.libraryStorage = payload
    },
    addToReadingList: (state, { payload }: PayloadAction<string>) => {
      const availablesUpdate = state.libraryStorage.availableBooks.filter((book: Book) => book.title !== payload);
      const bookToAdd = state.libraryStorage.availableBooks.find((book : Book) => book.title === payload);
      window.localStorage.setItem('libraryStorage', JSON.stringify({availableBooks: availablesUpdate, readingList: [...state.libraryStorage.readingList, bookToAdd]}));
    },
    changePageFilter: (state, { payload }) => {
      state.filters.pages = payload 
    },
    changeGenreFilter: (state, { payload }) => {
      state.filters.genre = payload
    }

  },
});

export const { syncStorage, addToReadingList, changePageFilter, changeGenreFilter } = booksSlice.actions;

export default booksSlice.reducer;
