import { ON_INPUT_CHANGE, ADD_USER, ADD_USER_SUCCESS, GET_USER, GET_USER_SUCCESS } from "./userActionTypes";
const initialState = {
  loading: false,
  addUserSuccess: false,
};

// Use the initialState as a default value
export default function userReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case ON_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case ADD_USER:
      return {
        ...state,
        loading: true,
      };
    case ADD_USER_SUCCESS:
      return {
        ...initialState,
        addUserSuccess: true,
      };
      case GET_USER:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload
      };
    default:
      return state;
  }
}
