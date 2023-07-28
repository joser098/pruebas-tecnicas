import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import Book from "./BookComponent";
import { removeFromReadingList } from "../redux/booksState";

const ReadingList = () => {
  const readingList = useSelector((state: RootState) => state.book.libraryStorage.readingList);
  const dispatch = useDispatch()

  return (
    <section className=" w-1/3 border-2 border-black">
    <h2 className="text-violet font-bold bg-white" >READING LIST</h2>
      {readingList?.map((books) => {
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
