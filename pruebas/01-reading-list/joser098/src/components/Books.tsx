import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import Book from "./BookComponent";
import { useFilters } from "../hooks/useFilters";
import { addToReadingList } from "../redux/booksState";

const Books = () => {
  const availableBooks = useSelector(
    (state: RootState) => state.book.libraryStorage.availableBooks
  );
  const dispatch = useDispatch();
  const { filterBooks } = useFilters();
  const filteredBooks = filterBooks(availableBooks);

  return (
    <section className=" min-h-screen">

      <h2 className="text-violet font-bold bg-white">
        LIBROS DISPONIBLES ({filteredBooks.length})
      </h2>

      {filteredBooks.length == 0 ? (
        <h2 className=" w-full ">NO HAY LIBROS DISPONIBLES</h2>
      ) : (
        filteredBooks?.map((books) => {
          return (
            <button onClick={() => dispatch(addToReadingList(books.title))}>
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
            </button>
          );
        })
      )}
    </section>
  );
};

export default Books;
