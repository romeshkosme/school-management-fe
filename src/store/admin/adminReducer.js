import {
  ON_INPUT_CHANGE,
  GET_ADMIN,
  GET_ADMINS,
  GET_ADMINS_SUCCESS,
  GET_ADMIN_SUCCESS,
} from "./adminActionTypes";

const initialState = {
  dateOfJoining: "",
  dateOfLeaving: "",
  admins: [],
  loader: false,
};

export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case GET_ADMINS:
      return {
        ...state,
        loader: true,
      };
    case GET_ADMINS_SUCCESS:
      return {
        ...state,
        admins: action.payload,
        loader: false,
      };
    case GET_ADMIN:
      return {
        ...state,
        loader: true,
      };
    case GET_ADMIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        dateOfJoining: new Date(action.payload.dateOfJoining)
          .toISOString()
          .slice(0, 10),
        dateOfLeaving: new Date(action.payload.dateOfLeaving)
          .toISOString()
          .slice(0, 10),
        loader: false,
      };
    default:
      return state;
  }
}
