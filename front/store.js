// store.js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./src/reducers"; // Importa tu combinación de reducers

// Estado inicial (puedes definir más estados según sea necesario)
const initialState = {
  user: null,
  userAppointments: [],
};

// Crea el store de Redux
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
