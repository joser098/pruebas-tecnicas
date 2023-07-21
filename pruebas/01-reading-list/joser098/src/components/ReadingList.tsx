import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import Book from "./BookComponent";

const ReadingList = () => {
  const readingList = useSelector((state: RootState) => state.book.libraryStorage.readingList);

  return (
    <>
    <h2 className="text-violet font-bold bg-white" >READING LIST</h2>
      {readingList.map((books) => {
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
    </>
  );
};

export default ReadingList;
