import { createStore } from "redux";
import townReducer from "./reducers/town";

const store = createStore(
  townReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
