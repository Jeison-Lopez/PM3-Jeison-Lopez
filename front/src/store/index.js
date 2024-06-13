// src/store/index.js

import { createStore, combineReducers } from "redux";
import userReducer from "../reducers/userReducer";
import appointmentsReducer from "../reducers/appointmentsReducer"; // Asegúrate de importar el reducer de appointments

const rootReducer = combineReducers({
  user: userReducer,
  appointments: appointmentsReducer, // Agrega el reducer de appointments al rootReducer
});

const store = createStore(rootReducer);

export default store;
