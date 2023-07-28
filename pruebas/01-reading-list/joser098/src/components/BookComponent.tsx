import React from "react";
import { Book } from "../types";

const BookComponent: React.FC<Book> = ({ title, cover,}) => {


  return (
    <main className="inline-block p-3 " >
      <div className="">
        <img className="object-cover w-full h-64" src={cover} alt={title} />
      </div>
    </main>
  );
};

export default BookComponent;
