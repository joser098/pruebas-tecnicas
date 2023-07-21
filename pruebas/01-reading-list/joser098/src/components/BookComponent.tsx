import React from "react";
import { Book } from "../types";
import { useDispatch } from "react-redux";
import { addToReadingList } from "../redux/booksState";

const BookComponent: React.FC<Book> = ({ title, cover }) => {
  const dispatch = useDispatch();

  return (
    <main className="inline-block p-3 " >
      <div className="w-48 h-72 m-2">
        <img className="object-cover " src={cover} alt={title} />
      </div>
      <button onClick={() => dispatch(addToReadingList(title))} className="border-2 w-8 rounded-full hover:bg-violet "> + </button>
    </main>
  );
};

export default BookComponent;
