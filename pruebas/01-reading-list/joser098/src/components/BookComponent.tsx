import React from "react";
import { Book } from "../types";

const BookComponent: React.FC<Book> = ({ title, cover,}) => {


  return (
    <main className="inline-block p-3 " >
      <div className=" w-36 h-auto">
        <img className="object-cover " src={cover} alt={title} />
      </div>
    </main>
  );
};

export default BookComponent;
