import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { syncStorage } from "../redux/booksState";
import { Book, BooksState } from "../types";
import { library } from '../../../books.json';


const allBooks: Book[] = [];
library.map((book): void => {
  allBooks.push(book.book);
});

export const useSyncLocalStorage = () => {
  const dispatch = useDispatch();
  const [ books, setBooks ] = useState(() => {
    const storedBooks = window.localStorage.getItem("libraryStorage");
    if(storedBooks !== null){
      dispatch(syncStorage(JSON.parse(storedBooks)))
      return JSON.parse(storedBooks)
    }
    dispatch(syncStorage({availableBooks: allBooks, readingList: []}))
    return {availableBooks: allBooks, readingList: []};
  });
  

  useEffect(() => {
    const onStorageChange = (event: StorageEvent) => {
      if(event.newValue !== null){
        console.log(event.newValue)
        const newValue : BooksState = JSON.parse(event.newValue)
         dispatch(syncStorage(newValue))
        //  setBooks(newValue)
        }
      }
    window.addEventListener('storage', onStorageChange)

    return () => {
      window.removeEventListener('storage', onStorageChange)
    }
  }, [])

  return { books, setBooks }
}