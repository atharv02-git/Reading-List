import React,{ createContext, useState } from 'react';
import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();

export default function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { title: "name of the wind", author: "patrick rothfuss", id: 1 },
    { title: "the final empire", author: "brandon sanderson", id: 2 },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id)); //the filter array will return a new filtered array only if the condition is passed else will remove the book with not matching id
  };

  return (
    <div>
      <BookContext.Provider value={{ books, addBook, removeBook }}>
        {props.children}
      </BookContext.Provider>
    </div>
  );
}
