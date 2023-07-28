import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import Book from "./BookComponent";
import { removeFromReadingList } from "../redux/booksState";

const ReadingList = () => {
  const readingList = useSelector(
    (state: RootState) => state.book.libraryStorage.readingList
  );
  const dispatch = useDispatch();

  return (
    <section className=" min-h-screen">
      <h2 className="text-violet font-bold bg-white">LISTA DE LECTURA</h2>
      {readingList?.map((books) => {
        return (
          <div>
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
            <button onClick={() => dispatch(removeFromReadingList(books.title))}
            >Quitar</button>
          </div>
        );
      })}
    </section>
  );
};

export default ReadingList;
