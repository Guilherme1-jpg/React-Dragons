import { useReducer } from "react";

const initialState = {
  dragon: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ORDER":
      let newState = [...state];
      newState = newState.sort((a, b) => (a.name > b.name ? 1 : -1));
      return newState;
      break;
  }

  return state;
};
export const OrderDragon = () => {
  return useReducer(reducer, initialState);
};
