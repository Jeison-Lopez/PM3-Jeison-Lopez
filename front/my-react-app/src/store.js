import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userAppointments: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    addTurn(state, action) {
      state.userAppointments.push(action.payload);
    },
    setTurns(state, action) {
      state.userAppointments = action.payload;
    },
  },
});

export const { setUser, addTurn, setTurns } = userSlice.actions;

const store = configureStore({
  reducer: userSlice.reducer,
});

export default store;
