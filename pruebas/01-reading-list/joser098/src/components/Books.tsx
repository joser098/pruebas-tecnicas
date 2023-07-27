import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import Book from "./BookComponent";
import { useFilters } from "../hooks/useFilters";

const Books = () => {
  const availableBooks = useSelector(
    (state: RootState) => state.book.libraryStorage.availableBooks
  );
  const { filterBooks } = useFilters()
  const filteredBooks = filterBooks(availableBooks)


  return (
    <section>
      <h2 className="text-violet font-bold bg-white">AVAILABLE BOOKS</h2>
      {filteredBooks.map((books) => {
        return (
          <Book
            title={books.title}
            pages={books.pages}
            genre={books.genre}
            cover={books.cover}
            synopsis={books.synopsis}
            year={books.year}
            ISBN={books.ISBN}
            author={books.author}
          />
        );
      })}
    </section>
  );
};

export default Books;
