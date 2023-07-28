import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Book } from "../types";

export const useFilters = () => {
    const filters = useSelector((state: RootState) => state.book.filters);
    const filterPages = Number(filters.pages)

    const filterBooks = (books: Book[]) => {
        return books?.filter((book: Book) => {
        const filterTitle = book.title.toLocaleLowerCase()

            return  (book.genre === filters.genre || filters.genre === "all") && book.pages >= filterPages && (filterTitle.includes(filters.title.toLocaleLowerCase()) || filters.title === '')
        })
    }

    return { filterBooks }
};