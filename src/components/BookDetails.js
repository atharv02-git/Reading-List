import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

export default function BookDetails({ book }) {
  const { dispatch } = useContext(BookContext);
  return (
    //dispatch will accept two arguments type and payload
    <li onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
}
