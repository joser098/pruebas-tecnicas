import { createSlice } from "@reduxjs/toolkit";
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
    availableBooks: [],
    readingList: []
  },
  genres: genres,
  filters: {
      pages: '0',
      genre: 'all',
      title: ''
  },
  tabState: true
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    syncStorage: (state, { payload }) => {
      state.libraryStorage = payload
    },
    addToReadingList: (state, { payload }) => {
      const availablesUpdate: Book[] = state.libraryStorage.availableBooks.filter((book: Book) => book.title !== payload);
      const bookToAdd = state.libraryStorage.availableBooks.find((book : Book) => book.title === payload);
      if(bookToAdd){
        state.libraryStorage = {
          availableBooks: availablesUpdate, 
          readingList: [...state.libraryStorage.readingList, bookToAdd]
        }
      }
      window.localStorage.setItem('libraryStorage', JSON.stringify({availableBooks: availablesUpdate, readingList: [...state.libraryStorage.readingList]}));
    },
    removeFromReadingList: (state, { payload }) => {
      const readingListUpdate: Book[] = state.libraryStorage.readingList.filter((book: Book) => book.title !== payload);
      const bookToAdd = state.libraryStorage.readingList.find((book : Book) => book.title === payload);
      if(bookToAdd){
        state.libraryStorage = {
          availableBooks: [bookToAdd, ...state.libraryStorage.availableBooks], 
          readingList: readingListUpdate
        }
      }
      window.localStorage.setItem('libraryStorage', JSON.stringify({availableBooks: [...state.libraryStorage.availableBooks], readingList: readingListUpdate}));
    },
    changePageFilter: (state, { payload }) => {
      state.filters.pages = payload 
    },
    changeGenreFilter: (state, { payload }) => {
      state.filters.genre = payload
    },
    changeTitleFilter: (state, { payload }) => {
      state.filters.title = payload 
    },
    setTab: (state) => {
      state.tabState = !state.tabState
    }
  },
});

export const { syncStorage, addToReadingList, removeFromReadingList, changePageFilter, changeGenreFilter, changeTitleFilter, setTab } = booksSlice.actions;

export default booksSlice.reducer;
