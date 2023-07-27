import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { syncStorage } from "../redux/booksState";
import { BooksState } from "../types";

export const useSyncLocalStorage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const onStorageChange = (event: StorageEvent) => {
      if(event.newValue !== null){
        console.log(event.newValue)
        const newValue : BooksState = JSON.parse(event.newValue)
         dispatch(syncStorage(newValue))
        }
      }
    window.addEventListener('storage', onStorageChange)

    return () => {
      window.removeEventListener('storage', onStorageChange)
    }
  }, [])
}