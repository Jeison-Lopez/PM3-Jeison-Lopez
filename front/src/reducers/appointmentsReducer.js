// reducers/appointmentsReducer.js

const initialState = {
  userAppointments: [], // Asegúrate de inicializar correctamente
};

const appointmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_APPOINTMENTS":
      return {
        ...state,
        userAppointments: action.payload,
      };
    default:
      return state;
  }
};

export default appointmentsReducer;
