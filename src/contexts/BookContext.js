import React, { createContext, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

export default function BookContextProvider(props) {
  // useReducer will accept two arguments the first is the reducerName and the second is the initial value of the piece of state
  const [books, dispatch] = useReducer(bookReducer, []);
  return (
    <div>
      <BookContext.Provider value={{ books, dispatch }}>
        {props.children}
      </BookContext.Provider>
    </div>
  );
}
