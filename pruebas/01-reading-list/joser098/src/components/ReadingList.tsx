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
    <section className=" min-h-screen min-w-full">
      <h2 className="text-violet font-bold bg-white">LISTA DE LECTURA {readingList.length}</h2>
      {readingList.length == 0 
      ?  <h2 className=" w-full text-7xl pt-10 mobile:text-lg">NO HAY LIBROS EN LA LISTA</h2>    
      : readingList?.map((books) => {
        return (
            <button onClick={() => dispatch(removeFromReadingList(books.title))}>
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
      })}
    </section>
  );
};

export default ReadingList;
