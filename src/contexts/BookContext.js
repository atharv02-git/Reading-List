import React, { createContext, useEffect, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

export default function BookContextProvider(props) {
  // useReducer will accept two arguments the first is the reducerName and the second is the initial value of the piece of state

  //here we are creating an useEffect function to store our books data into local storage in the form of a string using JSON.stringify but there's one catch as we refresh the page goes to its original null data because we have defined initial state of books as an empty array

  // so we will pass third argument(which will be a function) to useReducer function so that it will return only that initial value which is true, that value will be parsed(from string json version to json), (i.e: if any data found in book array)

  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('books',JSON.stringify(books));
  },[books]) 

  return (
    <div>
      <BookContext.Provider value={{ books, dispatch }}>
        {props.children}
      </BookContext.Provider>
    </div>
  );
}
