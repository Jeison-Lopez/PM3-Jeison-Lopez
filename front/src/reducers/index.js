import { combineReducers } from "redux";
import userReducer from "./userReducer";
import appointmentsReducer from "./appointmentsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  appointments: appointmentsReducer,
});

export default rootReducer;
