import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Book, BooksState } from "../types";
import { library } from "../../../books.json";

const allBooks: Book[] = [];

library.map((book): void => {
  allBooks.push(book.book);
});

const initialState: BooksState = {
  libraryStorage: {
    availableBooks: JSON.parse(localStorage.getItem('availableBooks') || JSON.stringify(allBooks)),
    readingList: JSON.parse(localStorage.getItem('readingList') || '[]')
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
    }
  },
});

export const { syncStorage, addToReadingList } = booksSlice.actions;

export default booksSlice.reducer;
