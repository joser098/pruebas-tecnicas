import React from "react";
import { Book } from "../types";

const BookComponent: React.FC<Book> = ({ title, cover }) => {

  return (
    <main className="inline-block p-3 " >
      <div className="relative flex justify-center">
        <img className="object-cover w-full h-64 hover:opacity-70 transition-opacity" src={cover} alt={title} />
      </div>
    </main>
  );
};

export default BookComponent;
