import { v4 as uuidv4 } from "uuid";

export const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state,
        {
          title: action.booksObj.title, //here name books which is an object should be same with the name we passed in as a dispatch function
          author: action.booksObj.author,
          id: uuidv4(),
        },
      ];
    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.id); //the filter array will return a new filtered array only if the condition is passed else will remove the book with not matching id
    default:
      return state;
  }
};
