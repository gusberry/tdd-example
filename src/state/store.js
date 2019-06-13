import { createStore } from "redux";
import counterReducer from "./reducers/counter";

export default function initStore(initialState) {
  return createStore(counterReducer, initialState);
}
