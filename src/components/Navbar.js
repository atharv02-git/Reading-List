import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

export default function Navbar() {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>My Reading list: </h1>
      {books.length === 1 ? <p>Currently you have {books.length} book available to read...</p> : <p>Currently you have {books.length} books available to read...</p>}
    </div>
  );
}
